The usual reason for self-hosting a RAG system is simple: the data can't leave the building. That is the kind of work I do, and it is a good reason. But keeping data in the building only settles who hosts it. A run of security papers published in 2026 looks at what remains once it is inside: who can read the vectors, who can write to them, and who gets to see what the retriever finds.

The short version is that a private deployment can still leak, and several of the attacks work from the inside.

## A system prompt is not access control

A common design retrieves the top documents, passes them to the model, and tells it in the system prompt to respect the user's role. Rohith Namboothiri tested this directly in [a paper at TrustNLP 2026](https://aclanthology.org/2026.trustnlp-main.15.pdf), using 431 queries across 12 enterprise roles.

Restricted text reached the model on 86.1% of queries. The model then leaked it in 41.3% of answers with Gemini 2.0 Flash and 29.5% with GPT-4o-mini. A second pipeline removed unauthorised documents before anything was ranked, so the model never saw them. Its structural leak rate was zero.

The corpus was small, at 247 chunks, and about two thirds of the queries targeted restricted content, so these are not production rates. The lesson is about design. Once restricted text is in the context, you are relying on the model's behaviour, and that behaviour changes from one model to the next.

Clever retrieval adds more places to get this wrong. Scott Thornton's [work on retrieval pivot attacks](https://arxiv.org/abs/2602.08668) looked at hybrid RAG, where a vector search finds a starting document and a knowledge graph expands from it. Vector search alone leaked nothing, but two hops through a shared entity reached other tenants' data. Leakage appeared in 95.4% of ordinary queries on a synthetic corpus, and in 69.5% and 8.5% of queries on the Enron emails and SEC filings. Re-checking permissions at each hop took all three to zero, with no latency penalty in the author's tests.

## Your vectors are your data

Teams often treat embeddings as a harmless by-product. A [March 2026 review](https://arxiv.org/abs/2603.21654) by Yanming Mu and colleagues is clear that they aren't. Intercepted embeddings can be inverted to recover the original documents or queries.

Attackers don't even need to start with much. In July 2026, [Cedric Raelijohn and colleagues](https://arxiv.org/abs/2607.01276) showed that an outsider who sees only which documents come back, with no scores or ranking, can identify the embedding model behind a system from 13 candidates. They tested this on AnythingLLM, a real RAG application. Knowing the model is often a step towards inversion. A high similarity threshold reduced the attack sharply, but the cost varied by model: at 0.75, one model kept its recall and another lost almost all of it.

## Write access is the bigger risk

Two papers show what someone can do with write access to the vector store.

The [Black-Hole attack](https://arxiv.org/abs/2604.05480) by Hanxi Li and colleagues, accepted at VLDB 2027, adds a small number of vectors near the centre of the collection. In high-dimensional space, those points become nearest neighbours of a large share of everything else. With 1% of the collection poisoned, up to 94.4% of queries returned a malicious result. The attacker doesn't need real user queries or the embedding model, and one attack path works by poisoning public pre-embedded datasets. Defences were mixed. Reducing hubness either hurt retrieval or gave limited protection, and detection worked on some attack paths and failed on others. The authors call a robust defence an open problem.

[VectorSmuggle](https://arxiv.org/abs/2605.13764), by Jascha Wanger, is about getting data out. Someone with write access to ingestion rotates each vector by a small angle to hide data inside it. Retrieval scores matched the clean baseline exactly, and two anomaly detectors did no better than chance. The channel survived most of the storage setups tested, and product quantisation weakened it without closing it. There are limits: at 256 bytes per vector a One-Class SVM could detect the tampering, and the headline numbers come from 68 synthetic chunks.

The more worrying finding is a survey of seven vector stores, including Qdrant, Milvus, Chroma and pgvector. None offered a native check of vector integrity, anomaly detection at ingestion or proof of where a vector came from. The paper proposes VectorPin, which signs each vector together with its source and model, so any later change breaks the signature. That is the author's own proposal, and it doesn't help if the attacker holds the signing key.

## What I would check in a self-hosted build

These are my own conclusions from the papers above:

1. **Filter by permission before retrieval, inside the query.** Never rely on the system prompt. If you already keep vectors in PostgreSQL, row-level security is a natural place to start. [Budigi and Sirigiri](https://arxiv.org/abs/2605.03275) report no cross-tenant leakage in controlled tests with a PostgreSQL and pgvector design.
2. **Re-check at every hop.** Graph expansion, neighbouring chunks and agent tool calls each need their own permission check.
3. **Classify vectors like the source documents.** Give them the same encryption, access reviews, backups and deletion rules.
4. **Lock down ingestion.** Keep the number of writers small, log every write, and record a hash of each vector with its source and model.
5. **Treat pre-embedded public datasets as untrusted code.** Embed the source text yourself, where you can.
6. **Watch for documents that appear too often.** A chunk that shows up for unrelated queries deserves a look, though detection alone won't stop every attack.
7. **Attack it yourself.** Run role-based tests on every release. Test similarity thresholds for each model before you rely on them.

## How far to trust this

This field is young, and the numbers don't compare easily. An [October 2026 survey](https://arxiv.org/abs/2610.30193) of 118 papers by Peiyang Liu and colleagues found that evaluations often use benign benchmarks and attackers that don't adapt, and that few studies measure direct disclosure of content as their main result. Most of this work is still in preprint and runs on test data, and several papers evaluate a defence their own authors propose.

Read these results as a map of where to look, and not as a forecast of your risk. Self-hosting is still the right decision for a lot of sensitive data. It moves the boundary to your own servers, and you still have to defend what sits inside it.

## Sources

- Namboothiri, [Authorization-First Retrieval: Enforcing Least Privilege in Multi-Agent RAG Systems](https://aclanthology.org/2026.trustnlp-main.15.pdf), TrustNLP 2026.
- Thornton, [Retrieval Pivot Attacks in Hybrid RAG](https://arxiv.org/abs/2602.08668), preprint, March 2026.
- Mu et al., [Towards Secure Retrieval-Augmented Generation](https://arxiv.org/abs/2603.21654), preprint, March 2026.
- Raelijohn et al., [Embedding Inference Attack](https://arxiv.org/abs/2607.01276), preprint, July 2026.
- Li et al., [Can You Trust the Vectors in Your Vector Database? Black-Hole Attack from Embedding Space Defects](https://arxiv.org/abs/2604.05480), accepted at VLDB 2027.
- Wanger, [VectorSmuggle: Steganographic Exfiltration in Embedding Stores and a Cryptographic Provenance Defense](https://arxiv.org/abs/2605.13764), preprint, May 2026.
- Budigi and Sirigiri, [Beyond Similarity Search: A Unified Data Layer for Production RAG Systems](https://arxiv.org/abs/2605.03275), preprint, May 2026.
- Liu et al., [Protection Is Not One Event: A Survey of RAG Protection Research by Measured Endpoint](https://arxiv.org/abs/2610.30193), preprint, October 2026.

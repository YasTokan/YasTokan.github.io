Most RAG tutorials start the same way: split the documents, embed the chunks, store them in a vector database. I build RAG platforms over private company data, so two recent papers caught my attention. Read together, they suggest that the step everyone starts with may be the weakest part of the system once the content is a company's own knowledge.

## Keyword search won the company benchmark

In May 2026, Yuhong Sun and colleagues published [EnterpriseRAG-Bench](https://arxiv.org/abs/2605.05253), a benchmark built to look like the inside of a company. It simulates one business across roughly 500,000 documents from nine tools, including Slack, Gmail, Jira, Confluence, GitHub and Google Drive. It includes the mess real companies have, such as near-duplicate documents with conflicting facts, and it asks 500 questions across ten categories.

Three ways of finding documents were compared, with the same model writing the answers each time:

| Retriever | Correct answers | Document recall |
|---|---|---|
| BM25 keyword search | 68.8% | 68.4% |
| Agent using shell tools such as grep and find | 60.6% | 55.8% |
| Vector search (text-embedding-3-large) | 51.4% | 46.0% |

The overall gap is large, but the more interesting result is in the Semantic category, where you would expect embeddings to win. Vector search answered 32.8% of those questions correctly, with 24.8% recall. BM25, a ranking formula from the 1990s, answered 44.8% correctly, with 43.2% recall.

The authors offer a cautious explanation: embedding models learn from public text, and company text is full of project codenames and internal acronyms. They say this needs more study, but it fits how the two methods work. A keyword index doesn't need to know what a codename means. It only needs to find the same string. An embedding model has to place that word in a space it learned from text that never contained it.

The agent result is worth a closer look too. It had the highest completeness of the three, at 61.1%, and returned far fewer irrelevant documents: 2.0, against about 9 for the other two. It got there by searching, reading nearby files and searching again. The price is time. Each question could take up to ten minutes, where the other two retrieve in a fraction of a second.

## Better embeddings may not be enough

You could argue that a stronger embedding model would close the gap. The [LIMIT paper](https://arxiv.org/abs/2508.21038) by Orion Weller and colleagues at Google DeepMind and Johns Hopkins, accepted at ICLR 2026, gives a reason to doubt that.

Its theoretical result is that the dimension of an embedding caps how many different top-k result sets it can ever return. This holds even in the best case, where the vectors are tuned directly against the test set.

The authors then built a deliberately awkward test: 50,000 documents listing what fictional people like, and 1,000 queries of the form "who likes X", each with two correct answers. The questions are simple. The results were not close:

| Model | Recall at 100 |
|---|---|
| BM25 | 93.6% |
| GTE-ModernColBERT (multi-vector) | 54.8% |
| Promptriever, 4096 dimensions | 18.9% |
| Gemini Embed, 3072 dimensions | 10.0% |

This doesn't mean your system will fail the same way. LIMIT was designed to stress embeddings, and the theory can't predict which combinations a given model will miss. What it does show is that a single vector has a fixed amount of room, and that a question needing an unusual combination of documents can ask for more than that room holds. Company questions often look like that: which customers on the old plan raised a billing ticket after the March release?

BM25 has its own weakness, and the same paper shows it. When the authors replaced the items in a smaller version of the test with synonyms, BM25 fell by nearly 90% and dropped below most of the single-vector models. Keyword search only works when the person asking uses the same words as the document.

## What these results do not tell us

- EnterpriseRAG-Bench uses generated documents, because no real company corpus of this size can be published. The authors list where it falls short of real data. Its Slack threads, for example, are more focused than real ones.
- Several of its authors work at Onyx, an enterprise search company, which also hosts the dataset and code. Onyx's own product isn't scored in the paper.
- It tested one embedding model, with no hybrid search or reranking, so it says nothing about a well-tuned hybrid system.
- It is a preprint. LIMIT has been through peer review at ICLR.

So the fair conclusion is narrower than "embeddings don't work". You can't assume plain vector search is a strong baseline for company data.

## What I would change in a RAG build

1. **Make keyword search the baseline.** Measure it first, and make any embedding layer prove that it beats it on your data.
2. **Test on your own questions.** Collect real ones from support tickets and chat, and include codenames, acronyms and questions with several right documents. A public benchmark can't contain your vocabulary. A February 2026 paper by [Mukul Chhabra and colleagues](https://arxiv.org/abs/2602.20379) makes a related point about scoring: generic metrics miss failures such as identifying the wrong case, and error codes and version numbers need to count.
3. **Protect identifiers.** Keep ticket numbers, error codes and product names whole during chunking, and store them as metadata you can filter on.
4. **Use embeddings for what they do well.** Paraphrase is the clear case. Combine them with keyword results and measure whether the combination helps, because neither paper tested it.
5. **Rerank a shortlist.** On the small 46-document version of LIMIT, Gemini 2.5 Pro solved every query when used as a reranker. That is too expensive to run across a whole collection, so keep it for the top results.
6. **Save agent search for hard questions.** Send simple lookups to fast retrieval, and escalate questions that span several documents when the user can wait.

There is a practical bonus for self-hosted systems. A keyword index needs no GPU, and most databases already include one, so the baseline costs little to try.

Vector search still has a place in these systems. For company knowledge, though, I would treat it as one retriever that has to earn its cost, and treat BM25 as the score to beat.

## Sources

- Sun et al., [EnterpriseRAG-Bench: A RAG Benchmark for Company Internal Knowledge](https://arxiv.org/abs/2605.05253), preprint, May 2026.
- Weller et al., [On the Theoretical Limitations of Embedding-Based Retrieval](https://arxiv.org/abs/2508.21038), ICLR 2026.
- Chhabra et al., [Case-Aware LLM-as-a-Judge Evaluation for Enterprise-Scale RAG Systems](https://arxiv.org/abs/2602.20379), preprint, February 2026.

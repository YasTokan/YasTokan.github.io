Databases have mostly been designed for two kinds of caller: applications running known queries, and analysts running a few unknown ones. A paper from UC Berkeley, presented at CIDR in January 2026, argues that a third caller is arriving and is likely to become the largest: AI agents working on someone's behalf. The authors include Ion Stoica and Matei Zaharia, so it is worth taking seriously even though the claim is a forecast.

Research published since then adds useful detail, and some of it is uncomfortable. Agents query data in a very different way from people, and on realistic tasks they still score below 50%. If that is the workload, it changes what a good data platform looks like.

## Agents query by guessing at speed

The [Berkeley paper](https://arxiv.org/abs/2509.00997) calls this behaviour agentic speculation. An agent doesn't plan one good query. It sends many exploratory ones: it looks at table metadata, tries part of a solution, checks the result and tries again. The authors describe four properties of this traffic:

- **Scale.** In theory, a single agent can send hundreds or thousands of requests a second.
- **Variety.** Requests range from simple metadata lookups to full attempts at the answer.
- **Redundancy.** With 50 attempts per task on the BIRD text-to-SQL benchmark, distinct sub-plans were often less than 10 to 20% of the total. Most of the work was repeated.
- **Steerability.** Agents respond to guidance. In a second case study with 22 tasks, expert hints cut attempts at part of a query by 36.6% and all SQL queries by 18.1%.

The obvious reaction is to rate-limit this traffic, and that is where the paper gets interesting. The waste is doing useful work. Success rates in the first case study rose by 14% to 70% as the number of requests grew. A data system that throttles speculation may also be throttling accuracy.

## Fast, tireless and often wrong

[AgenticDataBench](https://arxiv.org/abs/2607.01647), published in July 2026 by researchers at Tsinghua University and Ant Group, shows how far agents still have to go. It contains 344 tasks across 15 domains, 102 of them from real work at Ant Group, and it tested 12 combinations of agent framework and model.

The best combination averaged 48.8% on task accuracy, and the worst averaged 31.6%. The weakest skills were not exotic: merging and aligning data, and cleaning text. Agents were consistently weaker on mixed and non-relational data. When the authors re-ran a small sample of failed tasks with higher limits and longer timeouts, scores did not improve significantly.

I read those two findings together. More attempts help an agent search a space it understands. They don't help much when it doesn't understand the data. That points to context, more than compute, as the thing to invest in.

## What researchers want to change

**Cheap branches.** The Berkeley paper cites Neon's report that agents created 20 times more branches and ran 50 times more rollbacks than humans. An agent needs somewhere safe to be wrong. [Git4Data](https://arxiv.org/abs/2609.02106), a September 2026 preprint, brings branch, diff and merge into SQL, at a cost that follows the size of the change and not the size of the data. The authors report up to an order of magnitude better performance than DoltDB on agent-style branching workloads. That is their own comparison, and it is an upper figure.

**Queries that explain themselves.** The Berkeley authors propose that agents send probes in place of plain queries. A probe is SQL plus a short description of the goal and how accurate the answer needs to be, so the database can return a rough answer when a rough answer is enough. They also propose a memory store for table descriptions and earlier results. These are proposals, and nothing you can install today.

**Rules enforced by the engine.** A query can be valid and still break a rule about how data may be combined or released. [Data Flow Control](https://arxiv.org/abs/2606.05679), by Charlie Summers and Eugene Wu, moves those rules out of the prompt and into the database. Their system rewrites queries to enforce a policy, and they report almost no overhead across five engines, including PostgreSQL and DuckDB.

## What you can do with ordinary tools

Most of this needs no new database. These are my own recommendations, based on the findings above:

1. **Keep agents away from production.** Give them a read replica or a branch, with statement timeouts and limits on result size.
2. **Document the schema for the agent.** Add column comments, business definitions and example queries. Hints reduced exploration in the Berkeley study, so documentation now has a direct running cost attached.
3. **Cache more than you think you need.** If most sub-plans are repeats, a shared cache is the cheapest speed-up available.
4. **Put permissions in the database.** Use views and row-level security. A system prompt is a request, and a database rule is a control.
5. **Log every agent query.** You can't improve a workload you can't see, and these logs show which tables confuse the agent.

The second point matters most for older systems. I have worked on modernising a 20-year-old CRM, and in systems of that age, much of the meaning of the schema sits in people's heads. An agent can't ask them. Every undocumented column turns into extra queries, so legacy documentation debt becomes a compute bill. Writing it down now pays off twice, for new engineers and for agents.

## How far to trust this

- The claim that agents will dominate database workloads is a prediction. The paper gives no measured share of traffic.
- The case studies are small. The hint result comes from 22 tasks, with hints added to the prompt by hand.
- AgenticDataBench reflects one company's real tasks plus generated ones, and accuracy will vary a lot by domain.
- Git4Data, Data Flow Control and AgenticDataBench are preprints, and each reports its own results.

The direction still looks sound to me. Agents are becoming a real kind of database user, and the teams that do well with them will be the ones that give them safe places to be wrong and clear descriptions of their data.

## Sources

- Liu et al., [Supporting Our AI Overlords: Redesigning Data Systems to be Agent-First](https://arxiv.org/abs/2509.00997), CIDR 2026.
- Sun et al., [AgenticDataBench: A Comprehensive Benchmark for Data Agents](https://arxiv.org/abs/2607.01647), preprint, July 2026.
- Gou et al., [Git4Data: Database-Native Version Control for AI Agents](https://arxiv.org/abs/2609.02106), preprint, September 2026.
- Summers and Wu, [Data Flow Control: Data Safety Policies for AI Agents](https://arxiv.org/abs/2606.05679), preprint, June 2026.

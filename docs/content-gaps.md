# Portfolio content gaps

These questions are limited to facts not established by the supplied brief or reviewed
repositories. Priority **P0** blocks truthful flagship writing; **P1** materially
improves it; **P2** can wait until later editing.

## Profile

Resolved: Charlotte, North Carolina; remote or hybrid preferred; selective relocation
may be discussed after family considerations; currently **Full Stack Engineer
(contract)**; 4+ years of professional experience, reaching five years in April 2027;
seeking long-term backend/platform/cloud opportunities; no “Available” homepage label;
existing public email confirmed; target positioning is **Backend • Platform • Cloud
Engineer**.

1. **P0:** Which résumé file is the newest authoritative version, and which employment dates and titles in it should control the portfolio?
2. **P1:** Are there industries, company stages, clearance requirements, or role types Sean wants to prioritize or avoid mentioning?
3. **P2:** Which name format should appear on résumé and metadata: Sean Hayes, Sean M. Hayes, or another form?

## Employment

### GDIT

1. **P0:** Are the old portfolio's “Jan 2023 – Present” dates and “Software Engineer III” title still accurate? If not, what are the correct public dates and title?
2. **P0:** Which Spring Boot services or API capabilities did Sean personally design, implement, test, or operate, described without internal names?
3. **P0:** Is the old claim of approximately 40% faster deployment defensible? What were the before/after definitions, measurement window, and Sean's contribution?
4. **P1:** Which testing layers were used—unit, integration, contract, end-to-end—and which did Sean introduce or materially improve?
5. **P1:** What API-versioning, validation, schema, or compatibility decision best demonstrates engineering judgment?
6. **P1:** What is the maximum safe public wording for the classified environment?

### TIAA

Resolved policy: remove the old approximately 30% availability and millions-of-events
claims unless independently proven. Architecture decisions are more important than
unsourced scale.

1. **P0:** Are “Jan 2021 – Dec 2022,” “SDE II,” and “Charlotte, NC” accurate and approved for reuse?
2. **P0:** Which AWS ingestion path did Sean personally build or own, and which services were merely part of the surrounding platform?
3. **P1:** What delivery guarantee was required from the Kafka consumers, and how were duplicates, poison messages, retries, or dead letters handled?
4. **P1:** What production symptom did the ELK or Prometheus/Grafana instrumentation make easier to detect or diagnose?
5. **P1:** Did Sean write Jenkins/OpenShift configuration, operate deployments, troubleshoot them, or consume a centrally managed pipeline?

### Recent enterprise integration/cloud work

Resolved public case-study label: **Enterprise Event-Driven Integration**. Employer and
internal-system naming will not anchor the story.

1. **P0:** What date range may accompany the sanitized engagement, if any?
2. **P0:** What was Sean's formal role and what parts of the integration were his direct responsibility?
3. **P0:** Which facts belong to completed production work versus design, prototype, migration, or troubleshooting?
4. **P0:** Which technologies and architecture relationships are approved for public mention?
5. **P1:** Was HCP Terraform used for remote state, runs, policy, variable management, or another responsibility, and what did Sean implement?
6. **P1:** How did GitHub Actions interact with Terraform and deployment environments, stated without internal workflow or account details?
7. **P1:** Which authentication responsibilities belonged to AWS Secrets Manager versus HashiCorp Vault?
8. **P1:** What sanitized networking or DNS failure best demonstrates Sean's method of isolating a distributed integration problem?
9. **P1:** What relational database was downstream, if naming it is safe, and what write/transaction behavior did the integration require?

## Enterprise Event-Driven Integration case study

Resolved lead tradeoff: Event Source Mapping offered automatic commits and a simpler
model but could not satisfy the authentication need; Lambda-managed polling offered
authentication flexibility and control at the cost of explicit offset management and
replay considerations.

1. **P0:** What business-neutral problem statement accurately describes why the integration existed?
2. **P0:** Who were the generalized producers, consumers, and operational stakeholders?
3. **P0:** Which architecture components can be shown safely, and which must be replaced with generic equivalents?
4. **P0:** What did Sean decide personally, what did the team decide, and what was inherited?
5. **P0:** Was processing record-by-record, micro-batched, or scheduled in batches, and why?
6. **P0:** What offset or commit strategy was implemented? When could a message be replayed or skipped?
7. **P0:** How was idempotency achieved at the relational write boundary—natural key, idempotency key, upsert, deduplication table, or another mechanism?
8. **P0:** Which measurable or observable outcome can be stated without disclosing sensitive volume or business data?
9. **P1:** What happened when only part of a batch succeeded?
10. **P1:** How were poison events identified, retained, retried, or escalated?
11. **P1:** What failure caused manual authentication handling to become necessary, and what operational or security tradeoff did the final solution introduce?
12. **P1:** How did secret rotation affect long-running consumers or Lambda execution environments?
13. **P1:** Which timeout, retry, backoff, or concurrency settings mattered most, and how were they selected?
14. **P1:** What telemetry connected an event from consumption through transformation and database persistence?
15. **P1:** Which alarms or dashboards were actionable, and which signals initially produced noise?
16. **P1:** Describe one sanitized incident where application, network, identity, and downstream symptoms pointed in different directions. What evidence narrowed the fault domain?
17. **P0:** Which option was implemented, what part of that decision did Sean own, and what consequence became most important in operation?
18. **P2:** If rebuilding the platform today, which decision would Sean preserve and which would he revisit?

## Chronicle

Resolved naming direction: **Chronicle** is the umbrella; **Snapshot Engine** and
**Engineering Orchestrator** are related subsystems, not identical products.

1. **P0:** Which orchestrated workflows actually ran end to end with multiple Codex agents, and which exist only as scripts or design concepts?
2. **P0:** What did the central orchestrator automate beyond displaying status and invoking shell workflows?
3. **P0:** How were specialized agent roles defined, selected, and handed work?
4. **P0:** Which tmux behavior was implemented: session creation, pane assignment, command dispatch, monitoring, recovery, or only some of these?
5. **P0:** What role did Git play in actual coordination—shared working tree, checkpoint commits, rollback, task ownership, or artifact history?
6. **P0:** Which snapshot-engine milestones are complete: snapshot, list/show, diff, search, timeline, TUI, and garbage collection?
7. **P1:** What coordination failure or developer-experience problem motivated the orchestration experiment?
8. **P1:** How did the workflow avoid two agents editing the same file or making incompatible decisions?
9. **P1:** What happened when an agent stalled, failed a check, or produced an incomplete handoff?
10. **P1:** Which logs or artifacts demonstrate a completed orchestration run without exposing private prompt or repository data?
11. **P1:** Why did content-addressed snapshots add value beyond Git commits for this workflow?
12. **P1:** What security boundary was intended for commands, credentials, repository access, and untrusted output?
13. **P2:** What would be required to move from local prototype to a dependable multi-user engineering platform?

## Resonance Foundry / Harmonics Lab

Repository evidence already establishes the rendering APIs, lifecycle, tests, modal
solver, reduced-motion handling, and current build size; those questions are omitted.

Resolved origin: Resonance Foundry began as a way to deeply understand browser
rendering, animation systems, performance, interaction design, and modern frontend
engineering through experimentation—not simply to make visual effects.

1. **P0:** Which parts did Sean author directly, which were built through AI-assisted collaboration, and how should that collaboration be described?
2. **P1:** Which experiment best represents the most difficult engineering decision, and why?
3. **P1:** What browser or performance bug required the most investigation?
4. **P1:** Were any experiments profiled on representative mobile devices, and what measured limits were found?
5. **P1:** Which accessibility limitations should be acknowledged beyond the known mobile/reduced-motion issues?
6. **P1:** Why was the Harmonics Lab kept CPU-based, and what measured threshold—not only architectural preference—would justify WebGL migration?
7. **P1:** What scientific accuracy boundary should the Chladni explanation state most prominently?
8. **P2:** Which experiments should remain in the public lab, and which are educational stepping stones better left out of the featured narrative?

## Secondary projects

### JobFit Engine

1. **P0:** Which repository is canonical: the local `jobfit-engine-v1` repository or the `jobfit-engine` URL referenced by the old portfolio?
2. **P0:** What is implemented beyond authentication, and what remains planned?
3. **P1:** Is the matching/scoring engine implemented, and if so, what makes its output explainable?
4. **P1:** Was the NextAuth-to-FastAPI encrypted-token path exercised end to end and covered by tests?
5. **P1:** Which old portfolio claims—Spring Boot, Kafka, Prisma, blue/green deployment—belong to the current implementation, an older version, or a plan?

### EduRAG

1. **P0:** Which provider paths have been exercised with real services versus stubs?
2. **P0:** Are citations currently generated and displayed end to end, or only represented in the intended architecture?
3. **P1:** Is OpenTelemetry/Grafana/Loki actually implemented? The reviewed README describes a scaffold and roadmap but the old portfolio states these more strongly.
4. **P1:** What evaluation method, if any, measures retrieval quality or answer grounding?

### Diablo IV tooling

1. **P1:** Which portions of the extensive agent queue are implemented and tested versus historical planning records?
2. **P1:** What is the strongest non-game-specific lesson: schema design, source provenance, completeness gates, recommendation truthfulness, or agent coordination?
3. **P2:** Is there a safe deployed demonstration, or should the entry link only to code and screenshots?

### Other work

1. **P1:** Which repository contains the policy-enforcement/gRPC experiment, and what is implemented?
2. **P1:** Which repository contains GraphQL service work, and what problem did it solve?
3. **P1:** What ECK/Elasticsearch work is complete enough to demonstrate beyond local experimentation?
4. **P2:** Are there professional or independent projects not present under the reviewed local code directory?

## Personal biography

Resolved direction: keep the personal layer short; identify Sean only as a father,
paraglider, rock climber, and outdoors-oriented person; disclose no custody, legal, or
family-member details; use no forced mountain/software metaphor.

1. **P1:** Does Sean want personal photography, abstract outdoor imagery, or text only on the About page?
2. **P1:** How long has Sean paraglider-flown and climbed, without naming locations or details he would rather keep private?
3. **P2:** Are there other interests, community activities, mentoring, or volunteering that belong in the narrative?
4. **P2:** Should the final copy stay quiet and reflective, or become slightly more direct and conversational?

## Highest-risk missing facts

The following must be resolved before flagship prose is written:

1. Authoritative résumé and employment chronology beyond the confirmed current role and experience duration.
2. Ownership boundaries for the professional integration work.
3. Whether any professional metrics in the old portfolio are defensible.
4. The exact implemented Kafka delivery, idempotency, and failure-recovery behavior.
5. The confidentiality boundary for the sanitized architecture.
6. The line between implemented Chronicle orchestration and exploration.

# Portfolio content inventory

Status: Phase 3 editorial review. No claim in this document is approved for publication
merely because it appears here.

## Positioning currently supported

Sean Hayes is being positioned primarily as a **Backend • Platform • Cloud Engineer**.
The supplied professional history supports a narrative centered on backend
services, distributed integrations, event-driven architecture, cloud infrastructure,
delivery automation, observability, and production troubleshooting. The animation work
is evidence of technical curiosity and craftsmanship, not a change of professional
identity to frontend engineering.

The three proposed flagship stories form a coherent progression:

1. **Enterprise Event-Driven Integration** establishes professional systems
   and operational credibility.
2. **Chronicle** shows developer-tooling and autonomous-workflow exploration, provided
   its implemented pieces are separated from its larger architectural concept.
3. **Resonance Foundry / Harmonics Lab** provides directly inspectable evidence of
   performance awareness, mathematical curiosity, browser systems knowledge, and product
   judgment.

Together they say: Sean builds reliable systems, improves how engineers work, and
explores technical ideas deeply enough to make them tangible.

## Narrative north star

The portfolio's quiet underlying answer to “Why build software?” is:

> I enjoy understanding how systems work at every layer, from infrastructure and
> distributed services to the tools engineers use every day. I am happiest when I am
> learning something deeply enough that I can explain it clearly to someone else.

This is not intended as a large homepage slogan. It is an editorial standard for what
the portfolio chooses to explain. Terraform, Kafka, idempotency, language internals,
browser rendering, and agent orchestration belong to one narrative because Sean is
interested in why abstractions exist and how systems behave—not merely in accumulating
tools.

### Five-minute memory test

If a staff engineer spends five minutes with the portfolio, they should remember three
things:

1. **Sean understands systems across boundaries.** He can reason from backend code and
   event semantics through cloud infrastructure, delivery, and production behavior.
2. **Sean makes tradeoffs explicit.** He does not present tools as answers; he explains
   constraints, alternatives, failure modes, and the operational cost of a decision.
3. **Sean learns deeply and builds to understand.** Chronicle and Resonance Foundry show
   curiosity, craftsmanship, and the ability to make complex ideas inspectable and
   explainable.

Every flagship page should reinforce at least two of these truths. Any section that does
not strengthen one of them should be reconsidered.

## Known profile facts

| Fact                                                       | Current evidence                                | Publication status                                |
| ---------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------- |
| Name: Sean Hayes                                           | Owner-supplied brief; existing portfolio        | Safe                                              |
| Primary positioning: Backend • Platform • Cloud Engineer   | Owner confirmation                              | Safe                                              |
| Location: Charlotte, North Carolina                        | Owner confirmation                              | Safe                                              |
| Work preference: remote or hybrid                          | Owner confirmation                              | Safe                                              |
| Relocation may be considered for the right opportunity     | Owner confirmation                              | Do not advertise broadly; discuss when relevant   |
| Current role: Full Stack Engineer (contract)               | Owner confirmation                              | Safe after employer/date context is confirmed     |
| Professional experience: 4+ years                          | Owner confirmation                              | Safe                                              |
| Professional experience reaches five years in April 2027   | Owner confirmation                              | Use a maintainable date-based representation      |
| Seeking long-term backend/platform/cloud opportunities     | Owner confirmation                              | Safe; do not label “Available” while employed     |
| Dad to a daughter and deeply family-oriented               | Owner confirmation                              | Safe at this generality; private details excluded |
| Interests include paragliding, rock climbing, and hiking   | Owner confirmation                              | Safe                                              |
| GitHub account: `ksdbh`                                    | Existing portfolio and local repository remotes | Safe, subject to final link check                 |
| LinkedIn profile exists                                    | Existing portfolio                              | Safe, subject to owner confirmation               |
| Preferred public email is the address in the old portfolio | Owner confirmation                              | Safe                                              |
| Only the newest résumé should be published                 | Owner confirmation                              | `public/Sean_Hayes_Resume.pdf` is authoritative   |

## Flagship-project evaluation

### 1. Enterprise Event-Driven Integration — retain as flagship

This is the strongest lead story because it aligns most directly with the target roles
and can demonstrate engineering under real operational constraints. It should remain a
generalized pattern-based case study rather than a diagram of an employer's actual system.

The compelling center is not a list of Kafka, Lambda, Terraform, and secrets tools. It
is the decision chain around asynchronous processing, delivery semantics, idempotency,
authentication, persistence, observability, recovery, and cross-boundary troubleshooting.

The confirmed lead decision compares two viable architectures:

| Option                      | Advantages                                             | Costs                                                |
| --------------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| Event Source Mapping        | Automatic offset commits and simpler operational model | Authentication limitations                           |
| Application-Managed Polling | Authentication flexibility and greater control         | Explicit offset management and replay considerations |

This is the appropriate center of the case study because it demonstrates constraint-led
reasoning. The final implementation choice, its ownership boundary, and its observed
consequences still require confirmation before the case study receives publication
approval. The current draft exposes those gaps rather than filling them with inference.

Current limitation: no repository can establish the professional ownership, chronology,
failure incidents, scale, or outcomes. Those require owner confirmation and careful
confidentiality review.

### 2. Chronicle — retain as flagship umbrella

Chronicle should be the umbrella containing two related but non-identical bodies of work:

- **Snapshot Engine:** an implemented, idempotent local-workspace initializer that creates
  the `.chronicle` configuration, blobs, and manifests boundaries. Snapshot creation,
  list/show, diff, search, timeline, and garbage collection remain specifications or
  placeholders.
- **Engineering Orchestrator:** a working local prototype built from fixed tmux worker
  roles, shell dispatch and capture scripts, run logs, reports, task handoffs, and a small
  read-only `orchestrator status` CLI.

The case study labels every capability as implemented, prototype, or architectural
exploration. It does not imply LangGraph, AutoGen, enterprise deployment, or a production
autonomous agent service.

This remains a flagship candidate because the honest evolution—from coordination
problem, to scripts and checkpoints, to snapshot tooling, to a broader workflow
architecture—is more credible and technically interesting than presenting a fictional
finished platform.

### 3. Resonance Foundry / Harmonics Lab — retain as flagship

This is the most verifiable story. The current repository demonstrates:

- Strict TypeScript and `noUncheckedIndexedAccess`.
- A reusable experiment lifecycle with explicit resource cleanup.
- CSS, SVG, Canvas, Web Audio, and raw WebGL.
- DPR-aware responsive Canvas rendering.
- `requestAnimationFrame` ownership and cancellation.
- Seeded random-number generation.
- Testable geometry, wave, flow, shader, audio, attractor, spectrum, and plate utilities.
- A CPU modal-plate solver with square sine modes, circular Bessel-mode approximation,
  frequency response, material presets, and energy-dependent grain transport.
- Reduced-motion detection and explicit pause/resume behavior.
- Twenty-nine passing unit tests.
- A current Vite production bundle of approximately 23.4 kB JavaScript gzipped.

Known qualification: accessibility and mobile behavior are partially implemented, not
fully audited. The portfolio must not claim comprehensive WCAG compliance.

The approved origin story is not “I wanted cool animations.” Resonance Foundry began as
a way to understand browser rendering, animation systems, performance, interaction
design, and modern frontend engineering deeply through experimentation.

## Secondary-project inventory

| Project                                         | Evidence found                                                                                                                                                           | Current recommendation                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| JobFit Engine                                   | Next.js/FastAPI monorepo; implemented NextAuth JWE verification and authenticated FastAPI endpoint; automation rules                                                     | Secondary until the scoring workflow, deployment state, and outcome are verified |
| EduRAG                                          | FastAPI/Next.js scaffold; ingestion, chunking, embedding and provider stubs; mock auth; CI/docs; roadmap explicitly separates implemented and planned work               | Secondary and labeled scaffold/prototype                                         |
| Diablo IV Sorceress Helper                      | FastAPI/Pydantic backend, Next.js frontend, validated JSON domain model, importer, checklists, tests, explicit source-accuracy constraints, agent-coordination artifacts | Strong secondary story for data modeling and truth-aware recommendation tooling  |
| Systems Engineering / Order Processing Platform | Architecture and ADR learning project; implementation intentionally not started                                                                                          | Archive or “in progress,” never implementation evidence                          |
| Elasticsearch/ECK playground                    | Local directory exists, but no reviewed narrative or verified implementation inventory yet                                                                               | Hold pending inspection and owner context                                        |
| Policy/gRPC experimentation                     | Mentioned by owner; no reviewed local evidence identified in this pass                                                                                                   | Hold pending repository/source identification                                    |
| GraphQL services                                | Mentioned by owner; no reviewed local evidence identified in this pass                                                                                                   | Hold pending repository/source identification                                    |

## Evidence matrix

Legend: **Yes** means publishable at the stated generality. **Generalized** means the claim
can be used only without proprietary details. **Review** means it is not yet approved.

| Claim                                                                               | Evidence source                                             | Project / employer                  | Safe for public use?                   | Needs clarification?                        | Potential portfolio location               |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ |
| Professional Java/Spring Boot backend experience                                    | Owner-supplied professional history                         | GDIT                                | Generalized                            | Scope and ownership                         | Experience; Backend capability             |
| Professional REST API and OpenAPI experience                                        | Owner brief                                                 | GDIT                                | Generalized                            | Representative decisions                    | Experience; Integration case study         |
| Professional PostgreSQL experience                                                  | Owner brief                                                 | GDIT                                | Generalized                            | Schema/transaction responsibilities         | Backend capability                         |
| Built applications that deployed onto Kubernetes                                    | Owner clarification                                         | GDIT                                | Generalized                            | Deployment/configuration specifics          | Platform capability                        |
| GitLab CI/CD experience                                                             | Owner brief                                                 | GDIT                                | Generalized                            | Pipeline ownership and verified outcome     | Platform capability                        |
| Work in a classified environment                                                    | Owner brief                                                 | GDIT                                | Only at this generality                | Approved wording                            | About/experience                           |
| Professional Python and Java experience                                             | Owner brief                                                 | TIAA                                | Generalized                            | Role boundaries and dates                   | Experience                                 |
| Professional AWS Lambda/SQS/S3/Glue/Athena experience                               | Owner brief                                                 | TIAA                                | Generalized                            | Which systems and level of ownership        | Cloud capability                           |
| Professional Kafka experience                                                       | Owner brief                                                 | TIAA and recent integration work    | Generalized                            | Scale, delivery semantics, operational role | Flagship 1; Distributed Systems capability |
| Docker and OpenShift experience                                                     | Owner brief                                                 | TIAA                                | Generalized                            | Development vs production ownership         | Platform capability                        |
| ELK and Prometheus/Grafana experience                                               | Owner brief                                                 | TIAA                                | Generalized                            | What Sean instrumented or operated          | Operational capability                     |
| Recent Terraform/HCP Terraform experience                                           | Owner brief                                                 | Recent enterprise integration       | Generalized                            | Modules, workflow, ownership, outcome       | Flagship 1; Cloud capability               |
| GitHub Actions delivery automation                                                  | Owner brief                                                 | Recent enterprise integration       | Generalized                            | Workflow stages and ownership               | Flagship 1                                 |
| Secrets Manager and Vault integration experience                                    | Owner brief                                                 | Recent enterprise integration       | Generalized                            | Authentication pattern safe to describe     | Flagship 1                                 |
| Distributed networking/DNS troubleshooting                                          | Owner brief                                                 | Recent enterprise integration       | Generalized                            | Concrete generalized incident and lesson    | Flagship 1                                 |
| Idempotent persistence and offset/commit tradeoff knowledge                         | Owner brief as proposed topic                               | Recent enterprise integration       | Review                                 | What was actually implemented               | Flagship 1                                 |
| Evaluated Event Source Mapping against Application-Managed Polling                  | Owner confirmation                                          | Enterprise event-driven integration | Generalized                            | Final choice, ownership, and consequences   | Flagship 1 lead decision                   |
| Event Source Mapping offered automatic commits with authentication limits           | Owner confirmation                                          | Enterprise event-driven integration | Generalized                            | Exact safe authentication constraint        | Flagship 1 architecture                    |
| Application-Managed Polling offered authentication control with offset/replay costs | Owner confirmation                                          | Enterprise event-driven integration | Generalized                            | Implemented offset and replay behavior      | Flagship 1 architecture                    |
| Improved availability by approximately 30%                                          | Old portfolio only                                          | TIAA                                | No                                     | Owner directed removal unless proven        | Exclude                                    |
| Kafka pipelines processing millions of events/day                                   | Old portfolio only                                          | TIAA                                | No                                     | Owner directed removal unless proven        | Exclude                                    |
| Reduced deployment time by approximately 40%                                        | Old portfolio only                                          | GDIT                                | Review                                 | Measurement and personal contribution       | Do not publish yet                         |
| Implemented idempotent local workspace initialization                               | Source and tests                                            | Chronicle                           | Yes                                    | None                                        | Flagship 2                                 |
| Designed a local content-addressed snapshot engine                                  | README and specification                                    | Chronicle                           | Architectural Exploration              | Snapshot behavior is not implemented        | Flagship 2                                 |
| Built local multi-worker dispatch and pane-capture tooling                          | Shell scripts, logs, reports, orchestration package         | Chronicle repository                | Yes at general level                   | Exact workflow and agent responsibilities   | Flagship 2                                 |
| Built a production autonomous engineering platform                                  | No supporting evidence found                                | Chronicle                           | No                                     | Claim should be rejected                    | Nowhere                                    |
| Implemented DPR-aware Canvas rendering                                              | Experiment source                                           | Resonance Foundry                   | Yes                                    | None                                        | Flagship 3; Creative capability            |
| Implemented explicit animation lifecycle cleanup                                    | `AnimationExperiment`, `ExperimentHost`, experiment modules | Resonance Foundry                   | Yes                                    | None                                        | Flagship 3                                 |
| Implemented browser-native WebGL and Web Audio experiments                          | Source modules                                              | Resonance Foundry                   | Yes                                    | Browser support notes                       | Flagship 3                                 |
| Implemented a modal plate approximation and grain simulation                        | Plate physics source and tests                              | Harmonics Lab                       | Yes with “approximation” qualification | None                                        | Flagship 3                                 |
| Maintains automated math/physics utility tests                                      | 29 passing Vitest tests                                     | Resonance Foundry                   | Yes                                    | None                                        | Flagship 3                                 |
| Created RAG ingestion/retrieval scaffold with citations                             | README and repository structure                             | EduRAG                              | Yes as prototype/scaffold              | Confirm real-provider paths exercised       | Secondary work                             |
| Built cross-framework encrypted-session verification                                | README and source paths described                           | JobFit Engine                       | Yes after source review                | Confirm end-to-end test/deployment          | Secondary work                             |
| Built truth-aware recommendation tooling with explicit data caveats                 | README, schemas, tests, knowledge artifacts                 | Diablo IV helper                    | Yes                                    | Current feature status                      | Secondary work                             |

## Evidence-backed capability groups

### Distributed Systems

Evidence currently available: professional Kafka and asynchronous integration history;
proposed offset, idempotency, failure-recovery, and persistence decisions requiring
clarification; independent event-driven order-processing architecture still in Phase 0.

### Cloud & Platform Engineering

Evidence currently available: professional AWS, Terraform/HCP Terraform,
Kubernetes-deployed applications, OpenShift, Docker, GitLab CI/CD, Jenkins, and GitHub
Actions experience. The portfolio must distinguish use, implementation, and operational
ownership; it must not imply ownership of Kubernetes itself at GDIT.

### Backend Engineering

Evidence currently available: professional Python, Java, Spring Boot, REST, OpenAPI, and
relational-database work; independent FastAPI/Pydantic services and authentication code.

### Operational Engineering

Evidence currently available: professional troubleshooting, ELK, Prometheus/Grafana,
and distributed integration work. Incident ownership, instrumentation decisions, and
outcomes still need clarification.

### Emerging AI Engineering

Evidence currently available: Chronicle orchestration prototypes, EduRAG scaffold, and
AI-assisted repository workflows. Evidence does not support claims of a production
agent platform.

### Creative Engineering

Evidence currently available: Resonance Foundry source, tests, rendering engines, audio,
physics, lifecycle design, and measured build output.

## Professional case-study privacy checklist

Every professional story must pass this checklist before publication:

- [ ] Employer approval requirements have been considered.
- [ ] Classified information is excluded without exception.
- [ ] Internal repositories, project names, service names, hostnames, and account IDs are absent.
- [ ] Customer, vendor, and user identities are removed.
- [ ] Architecture is redrawn as a generalized pattern, not copied from internal material.
- [ ] Exact topology, network boundaries, regions, DNS names, ports, and security controls are generalized where sensitive.
- [ ] Credentials, secret paths, token formats, certificate details, and authentication material are absent.
- [ ] Screenshots contain no internal UI, logs, tickets, dashboards, or metadata.
- [ ] Example payloads are synthetic and contain no production schema or data.
- [ ] Metrics are approved, defensible, scoped, and rounded when necessary.
- [ ] The distinction between Sean's contribution and the team's work is explicit.
- [ ] Technology names are included only when disclosure is safe.
- [ ] Failure descriptions teach the general engineering lesson without revealing an exploitable weakness.
- [ ] Generic terms are used where appropriate: “enterprise Kafka cluster,” “cloud secrets manager,” “relational downstream system,” and “external vendor integration.”
- [ ] A second confidentiality review occurs after diagrams and prose are complete.

## Homepage positioning candidates

1. **I build backend and cloud systems that move data reliably, automate infrastructure, and stay understandable in production.**
2. **Backend and platform engineer focused on distributed integrations, reliable delivery, and operable cloud systems.**
3. **I design event-driven services and cloud platforms with failure recovery, observability, and maintainability built in.**
4. **I turn complex integration paths into reliable APIs, automated infrastructure, and systems teams can operate with confidence.**
5. **I build the services and platform foundations behind dependable data movement—from APIs and events to infrastructure and delivery.**
6. **Backend engineer working across application code, cloud infrastructure, and production operations to make distributed systems easier to trust.**
7. **I build reliable software at the boundaries: between services, clouds, data stores, delivery pipelines, and the teams operating them.**
8. **Platform-minded backend engineer building event-driven systems, repeatable infrastructure, and better engineering workflows.**

Recommended starting point: **Option 1** is the clearest recruiter-facing statement.
Option 7 is the most distinctive if the case studies provide enough integration
evidence. The role label should be **Backend • Platform • Cloud Engineer**. No homepage
availability badge should appear while Sean is employed.

## About-page narrative direction

The About page should remain concise and conversational. The approved high-level
direction is:

> I'm a backend and cloud engineer who enjoys understanding how complex systems behave.
>
> I am a dad to a wonderful daughter. During my off time from work my hobbies include
> paragliding, rock climbing and hiking.

This is still directional until final copy review, but its length, privacy boundary, and
absence of forced metaphors are approved.

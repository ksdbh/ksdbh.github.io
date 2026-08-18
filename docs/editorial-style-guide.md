# Editorial style guide

Status: authoritative portfolio writing standard.

This guide defines the voice, writing standards, storytelling philosophy, and content
rules for Sean Hayes's portfolio. It applies to every page, project case study,
architecture diagram, animation label, caption, metadata description, and interface
message.

When another document conflicts with this guide on editorial matters, this guide wins.
The evidence and confidentiality requirements in `content-inventory.md` and the factual
questions in `content-gaps.md` still determine what may truthfully be published.

## Editorial purpose

The portfolio should communicate how Sean thinks.

Technology supports the story; it is not the story. Visitors should remember engineering
judgment, curiosity, and craftsmanship rather than a list of technologies.

Every page must answer:

> What evidence does this page provide about how Sean solves engineering problems?

If a section cannot answer that question, reconsider whether it belongs.

The portfolio is not marketing collateral. It should not use recruiter buzzwords or
optimize search-engine language at the expense of authenticity. Descriptive metadata
should remain accurate and useful, but engineering credibility is the primary editorial
goal.

## Core principles

Always prefer:

- Clarity over cleverness.
- Evidence over claims.
- Specificity over adjectives.
- Engineering decisions over technology lists.
- Tradeoffs over outcomes alone.
- Measured confidence over self-promotion.
- Truthfulness over impressiveness.

Every important statement must be defensible. If evidence does not exist:

1. Remove the statement.
2. Weaken the wording to match what is known.
3. Identify uncertainty explicitly.
4. Explain that details are confidential and provide a safe generalization.

Never fill a narrative gap with an assumption merely because the result reads better.

## Portfolio voice

The writing should feel:

- Calm.
- Confident.
- Curious.
- Technical.
- Thoughtful.
- Professional.
- Approachable.

The reader should feel as though another engineer is explaining the work—not as though a
company is selling a product.

Write in Sean's first-person voice for personal reasoning, ownership, and reflection:

> I selected explicit polling because the authentication boundary required control the
> managed integration did not provide.

Use neutral explanatory voice for general system behavior:

> The consumer can receive an event again when processing succeeds but the offset commit
> does not.

Use “we” only when the decision or outcome genuinely belonged to a team. Do not use “we”
to obscure Sean's contribution, and do not use “I” to claim a team's work.

## Tone

Do not sound:

- Sales-driven.
- Overly enthusiastic.
- Corporate.
- AI-generated.
- Buzzword-heavy.
- Self-congratulatory.

Instead:

- Explain.
- Teach.
- Reason.
- Reflect.
- Justify decisions.
- Show tradeoffs.

Confidence comes from precision. Avoid intensifiers such as “extremely,” “incredibly,”
“highly,” and “massively” unless they convey a measured distinction.

## The three ideas to reinforce

Every substantial page should reinforce at least one, and every flagship case study at
least two, of these ideas:

1. **Sean understands systems across boundaries.**
2. **Sean makes engineering tradeoffs explicit.**
3. **Sean learns deeply and builds to understand.**

These are editorial tests, not slogans to repeat verbatim throughout the site.

## Writing about engineering work

Do not stop after describing implementation. Reveal judgment.

Every flagship project must answer:

- What problem existed?
- Why was it difficult?
- What constraints mattered?
- What did Sean own?
- Which alternatives were considered?
- Why was the selected approach appropriate under those constraints?
- What operational consequences followed?
- What failed or behaved unexpectedly?
- What changed after investigation or iteration?
- What would Sean improve today?

A case study should allow a technical reader to disagree thoughtfully with a decision.
If the story hides every cost and rejected option, it is not yet an engineering case
study.

## Required flagship-project structure

Use this order unless the material clearly requires a different narrative sequence:

1. **Problem** — the condition that required change.
2. **Context** — users, system boundary, and Sean's role.
3. **Constraints** — technical, operational, organizational, security, and confidentiality limits.
4. **Architecture** — components and interactions at a safe level of detail.
5. **Engineering decisions** — the consequential choices and their rationale.
6. **Rejected alternatives** — credible options, not straw men.
7. **Operational behavior** — deployment, runtime behavior, recovery, and maintenance.
8. **Observability** — how behavior and failure became visible.
9. **Security** — boundaries, identity, secrets, and relevant risk controls.
10. **Performance** — only when performance was relevant and evidence exists.
11. **Outcome** — what changed, stated without unsupported attribution or numbers.
12. **Lessons learned** — how the work changed Sean's understanding.
13. **Future improvements** — what another iteration would address.

Headings may be made more natural for the specific story, but none of these concerns
should disappear silently. Use an explicit “not applicable,” “unknown,” or
“confidential” state when appropriate.

## Technologies

Never create a giant skills or technology cloud. Never present technologies without
context.

Avoid:

> Kafka · AWS · Terraform · Python · Docker

Prefer:

> Designed an event-driven ingestion path that isolated burst traffic from downstream
> processing while preserving reliable replay through idempotent persistence.

A compact technology list may follow the explanation as supporting evidence. It should
answer “what was used to implement this decision?” rather than substitute for the
decision.

Use a technology's official name and capitalization. Do not add a technology to a case
study merely because it existed somewhere in the environment. Distinguish among:

- Designed or implemented directly.
- Configured or operated.
- Integrated with.
- Deployed onto.
- Used as part of a team-managed platform.
- Explored in an independent project.

For example, write “built applications that deployed onto Kubernetes” when Sean did not
own the cluster or platform.

## Tradeoffs

Tradeoffs are first-class content. Every consequential decision should make clear:

- Benefits.
- Costs.
- Limitations.
- Failure modes.
- Operational impact.
- Maintenance implications.
- Future improvements.

Present alternatives as viable choices under different constraints. Do not make the
selected option look inevitable after the fact.

Useful pattern:

> Event Source Mapping simplified offset commits, but its authentication boundary did
> not fit the integration. Application-Managed Polling provided the required authentication
> control, while making offset ownership and replay behavior application concerns.

The point is not that one service is universally better. The point is why one set of
costs fit the actual constraints.

## Evidence standard

Every important claim should connect to evidence. Evidence may include:

- Implemented code.
- Architecture.
- Tests.
- Performance profiles.
- Defensible measurements.
- Observability artifacts.
- Production experience.
- Public repositories.
- Documented decisions.
- Deployment artifacts.

Follow the evidence states in `src/content/schema.ts`:

- **Known:** a value exists and cites evidence.
- **Unknown:** a precise factual question remains.
- **Confidential:** the underlying evidence cannot be published; provide a safe summary.
- **Not applicable:** explain why the field does not apply.

Do not publish unsupported metrics. If a number cannot be defined, scoped, attributed,
and defended, omit it. An architectural decision is usually more revealing than an
unverifiable percentage.

### Claim-strength vocabulary

Match verbs to evidence:

- **Designed** — Sean materially defined the architecture or interface.
- **Built / implemented / developed** — Sean wrote or assembled the working capability.
- **Operated** — Sean had meaningful runtime or production responsibility.
- **Investigated** — Sean diagnosed behavior using evidence.
- **Measured** — a method, baseline, and result exist.
- **Validated** — a check, test, or acceptance criterion was applied.
- **Improved** — a defensible before/after difference exists, even if no public number is available.
- **Explored / prototyped** — the work tested an idea without claiming production maturity.

Do not replace an unavailable metric with “significantly,” “substantially,” or another
unsourced adjective.

## Ownership

Every professional case study should distinguish:

- What Sean owned.
- What Sean contributed to.
- What the team decided collectively.
- What was inherited.
- What another platform or infrastructure team operated.

Ownership is more credible when boundaries are explicit. Limited scope is not a weakness
when the work within that scope demonstrates sound engineering judgment.

## Writing about AI

Present AI work honestly. Label capabilities as:

- **Implemented.** Supported by working code, tests, or run artifacts.
- **Prototype.** Exercised, but not hardened as a dependable product.
- **Architectural exploration.** A reasoned design that was not fully implemented.
- **Planned.** Intended future work.

Acknowledge AI assistance where it materially shaped implementation or workflow. Explain
Sean's role in framing the problem, setting constraints, reviewing output, testing,
debugging, and making decisions.

Never imply:

- Autonomous behavior that was not implemented.
- Production deployment that did not occur.
- Use of an agent framework that was not used.
- Reliability, safety, or evaluation that was not tested.

Chronicle is an umbrella for the related **Snapshot Engine** and **Engineering
Orchestrator**. The editorial treatment must preserve the boundary between those
subsystems and their maturity levels.

## Writing about curiosity

Curiosity is a defining characteristic of the portfolio, but it should be demonstrated
rather than announced.

Avoid:

> I am passionate about learning new technologies.

Prefer showing the question that motivated the work:

> Resonance Foundry began as a way to understand browser rendering, animation systems,
> performance, and interaction design by building experiments at each abstraction layer.

The portfolio's underlying motivation is understanding why a technology or abstraction
exists, how it behaves under pressure, and how to explain it clearly after learning it.

## Personal writing

Personal information should make the portfolio warmer without dominating it. Sean is a
dad to a daughter, is family-oriented, and enjoys paragliding, rock climbing, and hiking.

Keep this material concise and sincere. Do not expose names, ages, schedules, precise
locations, or other private family details.

Avoid forced metaphors:

- Do not compare software development to climbing a mountain.
- Do not compare infrastructure to flying.
- Do not write “whether scaling cliffs or scaling systems.”

The approved About-page direction is:

> I'm a backend and cloud engineer who enjoys understanding how complex systems behave.
>
> I am a dad to a wonderful daughter. During my off time from work my hobbies include
> paragliding, rock climbing and hiking.

## Animation and visual explanations

Motion must communicate meaning. Animation exists to:

- Explain systems.
- Illustrate architecture.
- Show state and causality.
- Guide attention.
- Reinforce interaction.

Motion should not exist simply because animation is possible. Decorative motion should
be minimal.

Every animation needs a one-sentence informational purpose before implementation. If
that sentence cannot be written, do not build the animation.

Animations must pause when offscreen. Reduced-motion users must receive an equivalent
experience. Content must not require animation, color, sound, or JavaScript to be
understood whenever a practical static representation exists.

### Diagram and animation copy

- Label components by responsibility before vendor product.
- Use short, concrete state labels: “queued,” “processing,” “commit pending,” “retrying.”
- Explain what initiated a transition.
- Explain what success and failure mean.
- Provide a prose or structured-list equivalent.
- Mark synthetic data and generalized architecture explicitly.
- Avoid anthropomorphizing services or agents when precise state language is available.

## Design-language implications

Editorial and visual restraint should reinforce each other. The design should feel:

- Editorial.
- Modern.
- Intentional.
- Precise.
- Quiet.
- High-end.

Avoid:

- Developer clichés.
- Floating technology logos.
- Decorative terminal screenshots.
- Neon cyberpunk aesthetics.
- Large glowing gradients.
- Interface copy that imitates logs without communicating real information.

## Accessibility language standard

Accessibility is not optional. Content should remain understandable without animation,
color, sound, or JavaScript whenever practical.

- Give every informative image meaningful alternative text.
- Give complex diagrams nearby prose that explains the same relationships.
- Do not repeat visible captions word-for-word in alternative text.
- Describe purpose and relevant relationships rather than every visual detail.
- Use link text that identifies the destination; avoid isolated “click here” links.
- Write button labels as actions: “View architecture,” “Pause motion,” “Read case study.”
- Use headings to communicate document hierarchy, not to achieve a visual size.
- State errors in plain language and explain how to recover.

## Confidentiality

Professional work must be generalized and reviewed for confidentiality. Never reveal:

- Internal or classified architecture.
- Company secrets.
- Customer or vendor identities.
- Internal repository, project, service, or account names.
- Credentials, secret paths, certificates, or token material.
- Private infrastructure, topology, networking, DNS, or security-sensitive details.
- Production payloads, logs, dashboards, screenshots, or data.

Use generalized descriptions when necessary:

- “Enterprise Kafka cluster.”
- “Cloud secrets manager.”
- “Relational downstream system.”
- “External vendor integration.”

Generalization should preserve the engineering decision while removing identifying or
exploitable detail. Protect trust over storytelling.

## Preferred and avoided language

### Prefer

- Designed.
- Built.
- Implemented.
- Developed.
- Operated.
- Investigated.
- Measured.
- Validated.
- Improved.
- Simplified.
- Automated.
- Observed.
- Modeled.
- Refactored.
- Documented.
- Explored.

### Avoid

- Leveraged.
- Utilized.
- Synergized.
- Revolutionized.
- Optimized, unless measurable.
- Cutting-edge.
- World-class.
- Best-in-class.
- Game-changing.
- Passionate.
- Rockstar.
- Ninja.
- Guru.
- 10x.

Also avoid “robust,” “scalable,” “seamless,” and “production-ready” unless the following
sentence explains the evidence and scope behind the term.

## Mechanics and consistency

### Names and titles

- Use **Sean Hayes** on first reference and **Sean** thereafter when third person is necessary.
- Current employment title: **Full Stack Engineer (contract)**.
- Portfolio positioning: **Backend • Platform • Cloud Engineer**.
- Do not call Sean a frontend engineer because the portfolio contains sophisticated browser work.

### Dates and experience

- Use `Month YYYY` for employment dates when the month is confirmed.
- Use an en dash for ranges: `April 2022 – Present`.
- Current approved experience wording is **4+ years**.
- Sean reaches five years of experience in April 2027.
- Do not derive or publish a career start date until résumé chronology is reconciled.
- Avoid copy that becomes false after a calendar boundary when a maintainable representation is available.

### Numbers and measurements

- Spell out one through nine in prose; use numerals for 10 and above.
- Use numerals with units, versions, percentages, durations, and technical quantities.
- Include units and context: `23.4 kB gzipped`, not `23.4`.
- State whether a number is measured, approximate, rounded, or synthetic.
- Do not publish the old 30% availability or millions-of-events claims unless evidence is established.

### Technology and code

- Use backticks for identifiers, commands, filenames, and short code terms.
- Use fenced code blocks only when the code teaches something relevant to the decision.
- Keep examples minimal and synthetic.
- Explain why a snippet matters before or immediately after it.
- Do not publish internal schemas, payloads, addresses, identifiers, or configuration.

### Headings and paragraphs

- Use sentence case for headings.
- Keep paragraphs focused on one idea.
- Prefer direct sentences and active voice when ownership is known.
- Vary sentence length naturally; do not reduce technical writing to fragments for drama.
- Avoid rhetorical questions unless the page answers them immediately.
- Do not use exclamation marks in professional case-study prose.

### Punctuation and typography

- Use the serial comma.
- Use an em dash sparingly for interruption or emphasis.
- Use an en dash for ranges.
- Use curly quotation marks in prose when supported by the content pipeline.
- Do not use decorative symbols as substitutes for headings or structure.

## Reader experience

### Recruiter: approximately 30 seconds

The reader should understand:

- Who Sean is.
- What kind of engineering work he seeks.
- What he has evidence of building.
- How to contact him or view his résumé.

### Engineering manager: approximately two minutes

The reader should understand:

- The major projects.
- Sean's ownership boundaries.
- His strongest technical capabilities.
- The decisions and operational concerns he considers.

### Senior or staff engineer: five minutes or more

The reader should understand:

- The reasoning behind consequential decisions.
- The alternatives and tradeoffs.
- The architecture and failure behavior.
- Sean's operational thinking.
- Why Sean would be constructive and enjoyable to design systems with.

Do not create separate voices for these audiences. Use progressive disclosure so the
same honest story supports different reading depths.

## Editing workflow

Before drafting:

1. Identify the page's evidence and which core idea it reinforces.
2. Resolve or explicitly mark required facts in `content-gaps.md`.
3. Identify confidentiality boundaries.
4. Write the problem, constraints, ownership, and decision before polishing language.

During editing:

1. Remove unsupported adjectives and metrics.
2. Replace technology lists with the decisions they supported.
3. Add the strongest credible alternative and its benefits.
4. Separate team outcomes from Sean's contribution.
5. Check that maturity labels match the evidence.
6. Ensure visuals and text communicate equivalent information.

Before publication:

1. Conduct factual review.
2. Conduct confidentiality review.
3. Conduct technical review.
4. Conduct plain-language and accessibility review.
5. Verify links, repositories, résumé, dates, and contact information.

## Final editorial test

Before publishing any page, ask:

- Does this page teach something?
- Does it demonstrate engineering judgment?
- Does it provide evidence instead of claims?
- Does it honestly represent the work and ownership?
- Does it explain meaningful constraints or tradeoffs?
- Does it preserve confidentiality and trust?
- Is it understandable without animation, color, or sound?
- Does it reinforce at least one of the portfolio's three core ideas?

If any answer is no, revise the page before implementation or publication.

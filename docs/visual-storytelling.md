# Visual storytelling plan

Motion in the portfolio must explain system state, causality, ownership, or tradeoffs.
If removing an animation does not remove information, the animation is decorative and
should normally be omitted.

## Narrative test

Visual storytelling supports the same three ideas that a staff engineer should remember
after five minutes:

1. Sean reasons across application, infrastructure, delivery, and operational boundaries.
2. Sean evaluates constraints and tradeoffs instead of presenting tools as answers.
3. Sean learns deeply, builds experiments, and explains complex systems clearly.

Motion is successful only when it makes one of those ideas easier to understand.

## Motion vocabulary

Use a small, consistent visual grammar:

| Visual behavior        | Meaning                                                      |
| ---------------------- | ------------------------------------------------------------ |
| Directed pulse         | Event, request, task, or artifact moving between boundaries  |
| Expanding ring         | Fan-out, propagation, retry, or impact radius                |
| Converging paths       | Aggregation, orchestration, or reconciliation                |
| Repeated path          | Retry or replay; repetition count must be finite and labeled |
| Dimmed node            | Degraded or unavailable component                            |
| Held event             | Backpressure, queueing, or rate limitation                   |
| Branching path         | Decision or alternative architecture                         |
| Stable periodic signal | Healthy operation or heartbeat                               |
| Irregular signal       | Variance or failure requiring explanation                    |
| Settling particles     | Emergent behavior or a system reaching equilibrium           |

Color must reinforce labels and shapes rather than carry meaning alone. Motion should
never be the only way a state change is communicated.

## Homepage

### Hero: restrained system boundary

Concept: a sparse, low-contrast field of paths responds gently to pointer or scroll
position. A small number of pulses cross service boundaries and resolve into a stable
path near the positioning statement.

Information communicated: Sean works at boundaries between services, infrastructure,
data, delivery, and operations.

Implementation direction: SVG for the labeled topology; optional Canvas flow texture
behind it. The text and diagram render statically first. Motion starts only after the
hero is visible, pauses offscreen, and disappears under reduced motion.

Avoid: a full-screen particle spectacle, constantly changing copy, terminal simulation,
or technology logos orbiting Sean's name.

### Capability evidence

Concept: selecting a capability highlights the projects and experience entries that
support it. Lines connect “Distributed Systems” to the integration project and relevant
experience rather than animating an isolated skills cloud.

Information communicated: every capability has evidence.

Implementation direction: semantic links and CSS/SVG highlighting. No Canvas required.
On mobile, replace connecting lines with an explicit ordered evidence list.

## Flagship 1: Enterprise Event-Driven Integration

### Architecture flow

Concept: a generalized architecture diagram shows a generic producer, enterprise Kafka
cluster, compute boundary, cloud secrets manager, relational downstream system, and
observability plane. As the reader advances through the narrative, a synthetic event
moves through the exact boundary being discussed.

Information communicated:

- Asynchronous decoupling.
- Batch or record processing.
- Authentication before downstream work.
- Persistence and commit boundary.
- Telemetry emitted across the flow.

The lead comparison should contrast Event Source Mapping with Application-Managed Polling.
The visual should make the trade visible: automation and simpler commits on one path;
authentication flexibility, explicit offset ownership, and replay responsibility on the
other. Neither path should be visually framed as universally correct.

### Failure-mode controls

The reader can select a finite scenario:

- Duplicate delivery.
- Partial batch failure.
- Secret/authentication failure.
- Downstream timeout.
- DNS/network failure.

The diagram then displays the observed symptom, containment behavior, recovery path, and
tradeoff. This should be a deterministic state machine, not a free-running simulation.

Reduced-motion form: stepwise states changed by buttons with no animated travel.

Privacy constraint: all names, payloads, topology, telemetry, and values are synthetic.
The diagram must communicate a generalized pattern, not reconstruct employer systems.

## Flagship 2: Chronicle

### Orchestration sequence

Concept: a central orchestrator receives a bounded task, delegates work to specialized
agent nodes, records artifacts/checkpoints, and reconciles results. Agent nodes activate
only when their actual role in the documented workflow is discussed.

Information communicated:

- Task decomposition.
- Independent execution environments.
- Shared repository state.
- Handoffs and checkpoints.
- Failure/retry or human review boundaries.

### Truthful maturity overlay

Every node or edge displays one of three states:

- **Implemented** — supported by source, tests, or run artifacts.
- **Prototype** — exercised but not hardened as a product.
- **Exploration** — architectural direction not presented as shipped capability.

Chronicle is the umbrella. The **Snapshot Engine** and **Engineering Orchestrator** must
be visually distinct subsystems with an explicit connection between repository
checkpoint state and coordinated engineering work.

Implementation direction: accessible SVG with a textual ordered sequence. Avoid a fake
chat transcript; Chronicle is about workflow orchestration, not conversational UI.

## Flagship 3: Resonance Foundry / Harmonics Lab

### Case-study preview

Concept: begin with a lightweight static or SVG representation of an experiment. The
reader may explicitly activate one small live demonstration tied to the surrounding
technical explanation.

Information communicated:

- Why CSS, SVG, Canvas, Web Audio, or WebGL was selected.
- How lifecycle ownership prevents leaked frames and listeners.
- How DPR scaling preserves Canvas sharpness.
- How deterministic seeds make procedural behavior reproducible.
- Where a CPU solver is educationally useful and where GPU migration becomes justified.

### Harmonics Lab explanation

Use the real plate renderer alongside a simplified, labeled modal explanation. A drive
frequency change may highlight contributing eigenmodes and then show grains discovering
nodes. Do not draw pre-existing “answer lines” over the grains.

Scientific qualification: label the square basis and circular Bessel-mode model as
educational approximations with explicit boundary assumptions.

The full control surface belongs on `/lab`, not inside the case-study reading flow.

## Work index and secondary projects

Secondary entries remain mostly static. A short state transition may reveal architecture
or evidence on focus/selection, but the index should not run multiple Canvas previews.
This protects scan speed, battery, and visual hierarchy.

Use implementation-state labels consistently:

- Shipped/implemented.
- Prototype.
- Architectural exploration.
- In progress.

## About page

Personal material should use still photography or quiet, optional transitions. Family
should not be represented through generative metaphors. Paragliding and climbing may
influence composition, space, texture, or photographic rhythm, but should not be forced
into infrastructure analogies.

An optional transition between professional and personal layers can open the page's
spatial composition—less grid density, more natural imagery—without implying that the
activities are credentials.

## Navigation and page transitions

- Use short opacity/position transitions to preserve orientation between routes.
- Keep content visible without waiting for animation.
- Do not intercept native scrolling.
- Do not apply parallax to body text.
- Preserve focus and announce route changes.
- Avoid animating layout properties that trigger repeated reflow.
- Treat scroll position as a cue for section state, not a frame-by-frame movie timeline.

## Interaction and accessibility requirements

- Every interactive diagram must be operable by keyboard and touch.
- Every diagram needs a prose or structured-list equivalent.
- `prefers-reduced-motion` produces a complete static experience.
- An explicit motion preference may override the default only through user action.
- Pause Canvas/WebGL when hidden, offscreen, or in a background tab.
- Never autoplay audio.
- Do not use rapid flashes or high-frequency luminance changes.
- Maintain at least 44-by-44-pixel touch targets.
- Preserve visible focus and selected states.
- Announce scenario changes through a polite live region only when useful.

## Performance constraints

- Essential project content must be server-rendered/static HTML.
- No homepage WebGL dependency in the initial bundle.
- Lazy-load animation engines near the viewport or after explicit activation.
- Render only one substantial live experiment at a time.
- Provide still-image or SVG fallbacks before hydration.
- Cap device pixel ratio and simulation density where visually equivalent.
- Use `IntersectionObserver` for offscreen suspension.
- Test representative low-power mobile hardware, not only desktop emulation.
- Record frame time and long tasks before promoting an effect to the homepage.

## Motion review checklist

Before an animation ships:

- [ ] Can a reviewer state what information the motion communicates?
- [ ] Is the same information available without motion?
- [ ] Does it stop when offscreen or hidden?
- [ ] Does reduced motion remain complete and understandable?
- [ ] Is the interaction keyboard- and touch-accessible?
- [ ] Is the renderer appropriate: CSS, SVG, Canvas, or WebGL?
- [ ] Does it avoid loading a large client dependency for a small effect?
- [ ] Does it remain smooth within the agreed mobile performance budget?
- [ ] Does it avoid exposing confidential architecture or data?
- [ ] Does it strengthen the engineering narrative rather than compete with it?

## Updated target repository tree

Phase 0 adds only content planning and schema files. The approved Phase 1 target remains:

```text
ksdbh.github.io/
├── docs/
│   ├── content-inventory.md
│   ├── content-gaps.md
│   └── visual-storytelling.md
├── src/
│   ├── app/                         # Phase 1 Next.js routes
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── work/page.tsx
│   │   ├── work/[slug]/page.tsx
│   │   └── lab/page.tsx
│   ├── components/                  # Future presentation components
│   ├── content/
│   │   ├── schema.ts                # Phase 0 evidence-first types
│   │   ├── profile.ts               # After factual review
│   │   ├── experience.ts            # After confidentiality review
│   │   └── projects/                # One typed record per case study
│   ├── features/
│   │   └── animation-lab/           # Migrated engines and adapters
│   ├── lib/
│   └── styles/
├── public/
│   ├── images/
│   └── resume/
└── tests/
```

The existing Vite application remains untouched during Phase 0. The migration and
visual component directories are targets, not files to create before content approval.

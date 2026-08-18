import { known, unknown } from '../schema';
import { inventoryReview, ownerBrief, resonanceSource } from './evidence';
import type { CaseStudy } from './types';

const evidence = [ownerBrief, inventoryReview, resonanceSource];

export const resonanceFoundry: CaseStudy = {
  slug: 'resonance-foundry',
  title: 'Resonance Foundry',
  eyebrow: 'Browser systems · Implemented Engineering Laboratory',
  maturity: 'implemented',
  maturityLabel: 'Implemented',
  lede: known(
    'A framework-free engineering laboratory for learning how browser rendering, animation lifecycles, mathematical models, interaction, audio, and accessibility behave beneath higher-level abstractions.',
    evidence,
  ),
  facts: [
    { label: 'Runtime', value: 'Browser-native TypeScript' },
    { label: 'Renderers', value: 'CSS · SVG · Canvas · WebGL' },
    { label: 'Shared systems', value: 'Lifecycle · spectrum · audio' },
    { label: 'Validation', value: '29 utility tests' },
  ],
  executiveSummary: {
    paragraphs: [
      known(
        'Resonance Foundry began as a way to understand browser rendering directly. Each experiment chooses the smallest appropriate renderer, while a shared host owns mounting, resizing, pausing, resuming, and destruction.',
        evidence,
      ),
      known(
        'The result is less a gallery of effects than a set of inspectable systems: deterministic procedural generation, device-pixel-ratio-aware Canvas, SVG geometry, Web Audio sonification, and an approximate Chladni solver whose assumptions remain visible in code.',
        evidence,
      ),
    ],
  },
  problem: {
    paragraphs: [
      known(
        'High-level animation libraries make motion easy to produce but can hide how timing, cleanup, resolution, rendering cost, accessibility, and mathematical state interact. The project creates a controlled place to study those boundaries directly.',
        evidence,
      ),
    ],
  },
  context: {
    paragraphs: [
      known(
        'The laboratory uses Vite and TypeScript for development while keeping runtime behavior in browser APIs. Node.js supports package management, linting, tests, and builds; it is not the application runtime.',
        evidence,
      ),
    ],
  },
  constraints: {
    paragraphs: [],
    points: known(
      [
        'Experiments must switch without leaving animation frames, audio nodes, or event listeners behind.',
        'Canvas output must remain sharp across responsive sizes without allowing device pixel ratio to grow cost without limit.',
        'Randomized systems need seeded state when reproducibility matters.',
        'Reduced-motion preference must alter default behavior, not merely hide a decorative transition.',
        'Mathematical visualizations must distinguish physical approximation from scientific simulation.',
      ],
      evidence,
    ),
  },
  architecture: {
    paragraphs: [
      known(
        'Controls update shared experiment and spectral state. The host owns exactly one active experiment and its lifecycle. Each module chooses CSS, SVG, Canvas, or WebGL according to its rendering problem; Web Audio consumes the shared spectrum without redefining the visual physics.',
        evidence,
      ),
    ],
    diagram: {
      title: 'Browser experiment lifecycle',
      description:
        'Shared controls and state flow through one lifecycle host into the active renderer, while audio and cleanup remain explicit neighboring systems.',
      nodes: [
        {
          id: 'controls',
          label: 'Controls',
          detail: 'User input',
          status: 'implemented',
          x: 24,
          y: 138,
          width: 118,
          height: 70,
        },
        {
          id: 'state',
          label: 'Shared state',
          detail: 'Settings + spectrum',
          status: 'implemented',
          x: 184,
          y: 138,
          width: 132,
          height: 70,
        },
        {
          id: 'host',
          label: 'Experiment host',
          detail: 'Lifecycle owner',
          status: 'implemented',
          x: 358,
          y: 138,
          width: 144,
          height: 70,
        },
        {
          id: 'renderer',
          label: 'Active module',
          detail: 'CSS / SVG / Canvas',
          status: 'implemented',
          x: 548,
          y: 138,
          width: 148,
          height: 70,
        },
        {
          id: 'audio',
          label: 'Sonifier',
          detail: 'Web Audio',
          status: 'implemented',
          x: 184,
          y: 292,
          width: 132,
          height: 70,
        },
        {
          id: 'frame',
          label: 'Frame loop',
          detail: 'RAF + resize',
          status: 'implemented',
          x: 548,
          y: 292,
          width: 148,
          height: 70,
        },
        {
          id: 'cleanup',
          label: 'Cleanup',
          detail: 'Destroy + pagehide',
          status: 'implemented',
          x: 358,
          y: 24,
          width: 144,
          height: 70,
        },
      ],
      edges: [
        { id: 'input', path: 'M142 173 H184', label: 'update', labelX: 163, labelY: 162 },
        { id: 'activate', path: 'M316 173 H358', label: 'configure', labelX: 337, labelY: 162 },
        { id: 'render', path: 'M502 173 H548', label: 'mount', labelX: 525, labelY: 162 },
        {
          id: 'sound',
          path: 'M250 208 V292',
          label: 'sonify',
          labelX: 259,
          labelY: 253,
          dashed: true,
        },
        {
          id: 'animate',
          path: 'M622 208 V292',
          label: 'schedule',
          labelX: 631,
          labelY: 253,
          dashed: true,
        },
        {
          id: 'teardown',
          path: 'M430 138 V94',
          label: 'replace / leave',
          labelX: 439,
          labelY: 119,
          dashed: true,
        },
      ],
      mobileSteps: [
        'Controls update experiment settings and a shared spectral palette.',
        'The host mounts one active experiment and coordinates pause, resume, resize, and destroy behavior.',
        'The experiment selects CSS, SVG, Canvas, or WebGL for its specific rendering workload.',
        'Web Audio can sonify shared state while remaining decoupled from plate physics.',
        'Switching experiments or leaving the page cancels frames and releases owned resources.',
      ],
      boundaryNote:
        'The diagram shows runtime ownership, not a claim that every experiment uses every renderer or audio path.',
    },
  },
  decisions: [
    {
      title: 'Choose the renderer per effect',
      status: 'Implemented',
      summary: known(
        'CSS handles simple composited repetition, SVG handles scalable inspectable geometry, Canvas handles dense immediate-mode drawing, and raw WebGL is reserved for workloads that benefit from GPU parallelism.',
        evidence,
      ),
      drivers: known(
        ['Rendering model', 'Element count', 'Interactivity', 'Inspectability', 'Performance cost'],
        evidence,
      ),
      consequences: known(
        [
          'Each experiment uses an appropriate primitive.',
          'The laboratory must maintain more than one rendering and cleanup model.',
        ],
        evidence,
      ),
    },
    {
      title: 'Make lifecycle ownership a shared contract',
      status: 'Implemented',
      summary: known(
        'Every experiment implements mount, update, resize, pause, resume, and destroy so switching behavior is explicit and testable.',
        evidence,
      ),
      drivers: known(['Resource cleanup', 'Consistent controls', 'Experiment isolation'], evidence),
      consequences: known(
        [
          'The host can replace experiments predictably.',
          'Modules must account for all frames, listeners, observers, and runtime resources they own.',
        ],
        evidence,
      ),
    },
    {
      title: 'Keep the first modal solver on the CPU',
      status: 'Implemented',
      summary: known(
        'Precomputed modal fields and CPU particle updates keep the Chladni approximation inspectable and utility-tested before moving the workload to GPU code.',
        evidence,
      ),
      drivers: known(
        [
          'Learning value',
          'Deterministic tests',
          'Readable physical assumptions',
          'Current workload',
        ],
        evidence,
      ),
      consequences: known(
        [
          'Square and circular plate modes can be examined directly.',
          'Particle count and field resolution remain bounded by main-thread cost.',
        ],
        evidence,
      ),
    },
  ],
  rejectedAlternatives: [
    {
      title: 'Force every experiment through Canvas',
      benefit: known(
        'One rendering API could make the module surface appear more uniform.',
        evidence,
      ),
      reason: known(
        'It would discard CSS compositing and SVG semantics where those tools are simpler, clearer, and easier for a learner to inspect.',
        evidence,
      ),
    },
    {
      title: 'Start with a frontend animation framework',
      benefit: known(
        'A framework could supply component lifecycle and animation abstractions quickly.',
        evidence,
      ),
      reason: known(
        'The primary goal was to understand browser primitives and the lifecycle responsibilities those abstractions normally manage.',
        evidence,
      ),
    },
    {
      title: 'Draw Chladni nodal lines as a fixed background',
      benefit: known(
        'The expected pattern would remain immediately recognizable and inexpensive to render.',
        evidence,
      ),
      reason: known(
        'It would show the answer instead of allowing grain motion to emerge from the approximate modal energy field.',
        evidence,
      ),
    },
  ],
  operationalBehavior: {
    paragraphs: [
      known(
        'Canvas and JavaScript experiments schedule their own requestAnimationFrame work. Frame deltas are clamped after interruption, resize work passes through a ResizeObserver, and the host destroys the current module before mounting another.',
        evidence,
      ),
      known(
        'A reduced-motion preference starts the laboratory paused. Microphone denial or an unavailable media API leaves the Audio Reactive experiment on its demo signal. WebGL initialization and shader failures are caught and reported in the experiment surface. Audio startup failure changes the tone control to “Audio unavailable.”',
        evidence,
      ),
      known(
        'Disabling microphone input stops its media tracks and closes its AudioContext. Destroying an experiment cancels its frame loop and removes owned listeners; pagehide cleanup releases the host, sonifier, spectrum dial, and FPS frame request.',
        evidence,
      ),
    ],
  },
  observability: {
    paragraphs: [
      known(
        'An on-screen frames-per-second signal makes local rendering behavior visible, while utility tests cover deterministic random generation, geometry, spectrum behavior, modal fields, and related state. The repository currently contains 29 tests.',
        evidence,
      ),
      known(
        'FPS is a diagnostic signal, not a controlled benchmark; it varies with device, browser, tab scheduling, and experiment settings.',
        evidence,
      ),
    ],
  },
  security: {
    paragraphs: [
      known(
        'The application has no backend. Microphone input begins only after an explicit button action and browser permission. The stream feeds an in-browser analyser, permission denial preserves the demo signal, and disabling or destroying the experiment stops the media tracks and closes the AudioContext.',
        evidence,
      ),
    ],
  },
  performance: {
    paragraphs: [
      known(
        'Responsive Canvas buffers account for device pixel ratio but cap it at two to limit fill cost. Modal fields are precomputed, frame deltas are bounded, deterministic state avoids accidental regeneration, and inactive experiments release their loops.',
        evidence,
      ),
      unknown(
        'No representative mobile profile, controlled cross-device benchmark, or measured WebGL migration threshold has been published.',
      ),
    ],
  },
  lessons: [
    {
      title: 'The rendering primitive is an architectural choice',
      body: known(
        'CSS, SVG, Canvas, and WebGL expose different ownership, accessibility, resolution, and performance tradeoffs. Uniformity is not automatically simplicity.',
        evidence,
      ),
    },
    {
      title: 'Failure handling belongs to the lifecycle',
      body: known(
        'The implementation treats permission denial, unavailable WebGL, audio startup failure, experiment replacement, and page exit as explicit runtime states rather than leaving cleanup to page refresh.',
        evidence,
      ),
    },
    {
      title: 'A useful approximation names its boundary',
      body: known(
        'The modal plate can teach relationships among geometry, modes, excitation, damping, and grain behavior without claiming laboratory-grade physical simulation.',
        evidence,
      ),
    },
  ],
  futureImprovements: {
    paragraphs: [],
    points: known(
      [
        'Profile representative phones and establish measurable CPU, memory, and frame-budget thresholds.',
        'Move modal-field and particle workloads to WebGL only where profiling demonstrates a meaningful benefit.',
        'Complete keyboard, screen-reader, contrast, and touch-target review across the laboratory controls.',
        'Document the mathematical error boundary of each physical approximation more formally.',
      ],
      evidence,
    ),
  },
  evidenceNotes: [
    'The lifecycle host, experiments, spectrum state, audio path, modal approximation, and tests are implemented.',
    'The Chladni system is an educational approximation, not a laboratory-grade solver.',
    'No controlled performance benchmark or comprehensive accessibility certification is claimed.',
  ],
};

import { known } from '../schema';
import { chronicleSource, inventoryReview } from './evidence';
import type { CaseStudy } from './types';

const evidence = [chronicleSource, inventoryReview];

export const chronicle: CaseStudy = {
  slug: 'chronicle',
  title: 'Chronicle',
  eyebrow: 'Developer workflow · Prototype',
  maturity: 'prototype',
  maturityLabel: 'Prototype',
  lede: known(
    'A local developer-workflow prototype with two distinct parts: implemented workspace initialization for a planned snapshot engine, and shell tooling that dispatches work to fixed tmux panes and captures run evidence.',
    evidence,
  ),
  facts: [
    { label: 'Scope', value: 'Local developer workflow' },
    { label: 'Snapshot Engine', value: 'Workspace initialization implemented' },
    { label: 'Orchestrator', value: 'Local shell prototype' },
    { label: 'Snapshot history', value: 'Planned' },
    { label: 'Production service', value: 'Not implemented' },
  ],
  executiveSummary: {
    paragraphs: [
      known(
        'Chronicle contains two related but unintegrated systems. The Snapshot Engine currently creates the .chronicle workspace, configuration, blobs directory, and manifests directory; it does not capture snapshots. The Engineering Orchestrator uses shell scripts to send role-specific prompts to four fixed tmux panes, capture pane output, and generate local run artifacts.',
        evidence,
      ),
      known(
        'The repository demonstrates a human-operated local workflow, not autonomous software development. Dispatch scripts, pane captures, reports, and a read-only status command are implemented or prototyped; durable snapshot history and a broader orchestration platform remain planned or architectural exploration.',
        evidence,
      ),
    ],
  },
  problem: {
    paragraphs: [
      known(
        'The repository explores how a local operator can retain task instructions and terminal output across several role-specific workers. Its implemented prototype addresses dispatch and capture; the broader goal of durable, searchable engineering history is documented but not implemented.',
        evidence,
      ),
    ],
  },
  context: {
    paragraphs: [
      known(
        'The prototype runs against one shared repository using shell scripts, four pre-existing tmux panes, and Codex command-line workers. It does not create the tmux session, isolate workers, schedule roles dynamically, or provide a hosted or multi-user service.',
        evidence,
      ),
    ],
  },
  constraints: {
    paragraphs: [],
    points: known(
      [
        'Dispatch requires an existing tmux window with at least four panes.',
        'Scout, builder, test, and infrastructure roles are assigned to fixed pane indexes.',
        'All workers operate in one shared worktree with no implemented file-ownership or collision mechanism.',
        'Shell scripts inherit the local user’s repository and command permissions.',
        'The capture script stores the latest 200 lines per pane by default; it is not a structured event log.',
      ],
      evidence,
    ),
  },
  architecture: {
    paragraphs: [
      known(
        'The prototype path begins with a human operator, sends prompts through fixed-pane dispatch scripts, and records pane output in local logs and reports. Separately, chronicle init creates the workspace expected by the planned Snapshot Engine. No implemented path connects orchestration runs to snapshot history.',
        evidence,
      ),
    ],
    diagram: {
      title: 'Local orchestration and durable-state boundary',
      description:
        'A human operator dispatches role-specific prompts to fixed tmux panes. Workers share one repository, pane output becomes local run evidence, and the separate snapshot timeline remains planned.',
      nodes: [
        {
          id: 'operator',
          label: 'Operator',
          detail: 'Human review',
          status: 'prototype',
          x: 24,
          y: 138,
          width: 118,
          height: 70,
        },
        {
          id: 'dispatch',
          label: 'Dispatch',
          detail: 'Shell scripts',
          status: 'prototype',
          x: 184,
          y: 138,
          width: 126,
          height: 70,
        },
        {
          id: 'workers',
          label: 'Workers',
          detail: 'Fixed tmux roles',
          status: 'prototype',
          x: 354,
          y: 138,
          width: 132,
          height: 70,
        },
        {
          id: 'repo',
          label: 'Repository',
          detail: 'Shared worktree',
          status: 'prototype',
          x: 530,
          y: 138,
          width: 128,
          height: 70,
        },
        {
          id: 'capture',
          label: 'Run evidence',
          detail: 'Logs + reports',
          status: 'implemented',
          x: 354,
          y: 292,
          width: 132,
          height: 70,
        },
        {
          id: 'workspace',
          label: 'Workspace init',
          detail: '.chronicle init',
          status: 'implemented',
          x: 530,
          y: 24,
          width: 128,
          height: 70,
        },
        {
          id: 'timeline',
          label: 'State timeline',
          detail: 'Snapshots + diff',
          status: 'planned',
          x: 690,
          y: 24,
          width: 142,
          height: 70,
        },
      ],
      edges: [
        { id: 'assign', path: 'M142 173 H184', label: 'assign', labelX: 163, labelY: 162 },
        { id: 'run', path: 'M310 173 H354', label: 'prompt', labelX: 332, labelY: 162 },
        { id: 'change', path: 'M486 173 H530', label: 'change', labelX: 508, labelY: 162 },
        {
          id: 'record',
          path: 'M420 208 V292',
          label: 'capture',
          labelX: 429,
          labelY: 253,
          dashed: true,
        },
        {
          id: 'review',
          path: 'M354 327 C230 327 83 294 83 208',
          label: 'review + replan',
          labelX: 197,
          labelY: 311,
          dashed: true,
        },
        {
          id: 'initialize',
          path: 'M594 138 V94',
          label: 'initialize',
          labelX: 603,
          labelY: 119,
          dashed: true,
        },
        {
          id: 'future',
          path: 'M658 59 H690',
          label: 'planned',
          labelX: 674,
          labelY: 48,
          dashed: true,
        },
      ],
      mobileSteps: [
        'A human operator assigns a bounded task through local dispatch scripts.',
        'Fixed tmux worker roles inspect, build, test, or investigate the shared repository.',
        'Pane output and run reports preserve evidence for review and replanning.',
        'The implemented init command creates the local workspace; snapshots, search, diff, and timeline behavior remain Planned.',
      ],
      boundaryNote:
        'Implemented, Prototype, and Planned describe repository state. Broader autonomous orchestration remains Architectural Exploration.',
    },
  },
  decisions: [
    {
      title: 'Map four roles to fixed tmux panes',
      status: 'Prototype',
      summary: known(
        'Dispatch scripts map scout, builder, test, and infrastructure prompts to pane indexes 0 through 3. Dynamic routing and scheduling are not implemented, and the repository does not record them as the historical reason for choosing fixed panes.',
        evidence,
      ),
      drivers: known(
        ['Four explicit role prompts', 'Existing tmux session', 'Direct shell dispatch'],
        evidence,
      ),
      consequences: known(
        [
          'Role-to-pane assignment is visible directly in the scripts.',
          'The workflow fails its preflight check when fewer than four panes exist and has no dynamic reassignment behavior.',
        ],
        evidence,
      ),
    },
    {
      title: 'Capture state before generating the next plan',
      status: 'Prototype',
      summary: known(
        'The analysis script calls the capture script first, then passes the resulting log path to a Codex command that writes the next dispatch script and a run report.',
        evidence,
      ),
      drivers: known(
        [
          'Current pane output as analysis input',
          'Timestamped local log',
          'Generated next dispatch',
        ],
        evidence,
      ),
      consequences: known(
        [
          'The next planning command can read the captured worker output.',
          'Only a bounded tail of unstructured terminal text is retained, and capture failures are written into the log.',
        ],
        evidence,
      ),
    },
    {
      title: 'Keep snapshot storage local',
      status: 'Planned',
      summary: known(
        'The Snapshot Engine specification requires local files and no external service. The implemented init command creates that local workspace, but the orchestrator does not write snapshots or consume snapshot history.',
        evidence,
      ),
      drivers: known(
        ['Local-only specification', 'Portable file layout', 'No external service dependency'],
        evidence,
      ),
      consequences: known(
        [
          'Initialization is deterministic and idempotent.',
          'Content-addressed blobs, manifests, snapshots, search, diff, and timeline behavior are still planned.',
        ],
        evidence,
      ),
    },
  ],
  rejectedAlternatives: [
    {
      title: 'Integrate snapshot history with Git',
      benefit: known('Git could provide existing source-history and review primitives.', evidence),
      reason: known(
        'The specification explicitly excludes Git integration beyond optional ignore rules; the current implementation does not use Git as its snapshot backend.',
        evidence,
      ),
    },
    {
      title: 'Capture snapshots automatically in the background',
      benefit: known(
        'Background capture could reduce the need for a user to create state deliberately.',
        evidence,
      ),
      reason: known(
        'Automatic background monitoring and scheduled snapshots are explicit non-goals in the Snapshot Engine specification.',
        evidence,
      ),
    },
  ],
  operationalBehavior: {
    paragraphs: [
      known(
        'chronicle init is idempotent: it creates .chronicle, config.json, blobs, and manifests without overwriting an existing configuration. Dispatch refuses to run from inside tmux, verifies that four panes exist, and then sends role-specific Codex commands to fixed pane indexes.',
        evidence,
      ),
      known(
        'The capture script records pane metadata and the most recent terminal output in a timestamped log. Snapshot creation, list, show, diff, search, timeline, garbage collection, and UI commands print TODO messages and currently return a successful exit code without performing their advertised work.',
        evidence,
      ),
    ],
  },
  observability: {
    paragraphs: [
      known(
        'Pane captures, timestamped logs, generated run reports, and a read-only status command are the prototype’s observable artifacts. They expose recent output and file timestamps; they do not provide structured worker state, durable event history, or health monitoring.',
        evidence,
      ),
    ],
  },
  security: {
    paragraphs: [
      known(
        'The prototype is intentionally local and inherits the permissions of the user running its shell scripts and command-line workers. It does not provide hardened process isolation, authentication, tenant separation, or a remote trust boundary.',
        evidence,
      ),
      known(
        'No remote or multi-user security model is implemented. That broader system remains Architectural Exploration.',
        evidence,
      ),
    ],
  },
  performance: {
    paragraphs: [
      known(
        'No performance or productivity benchmark is claimed. Capture retains 200 lines per pane by default, while the planned content-addressed storage path cannot be measured because snapshot creation is not implemented.',
        evidence,
      ),
    ],
  },
  lessons: [
    {
      title: 'Specifications are not implementation evidence',
      body: known(
        'The CLI exposes the intended product surface, but source inspection shows that only initialization performs Snapshot Engine work. Repository-defensible documentation must distinguish parser coverage from functional behavior.',
        evidence,
      ),
    },
    {
      title: 'Static coordination makes assumptions visible',
      body: known(
        'Fixed pane indexes, explicit prompts, and shell preflight checks make the prototype’s operating assumptions easy to inspect, even though they are brittle.',
        evidence,
      ),
    },
    {
      title: 'Unimplemented commands should not report success',
      body: known(
        'TODO subcommands currently return exit code zero. A dependable CLI must distinguish accepted syntax from completed work so scripts cannot mistake a placeholder for success.',
        evidence,
      ),
    },
  ],
  futureImprovements: {
    paragraphs: [],
    points: known(
      [
        'Implement and test snapshot, list, diff, search, timeline, and garbage-collection behavior before broadening orchestration.',
        'Return a nonzero or explicit unsupported result from placeholder commands until they are implemented.',
        'Replace pane-name assumptions with structured worker and run state.',
        'Define file ownership, collision handling, recovery, cancellation, and resumability explicitly.',
        'Add process isolation and a permission model before considering remote execution.',
      ],
      evidence,
    ),
  },
  evidenceNotes: [
    'Snapshot workspace initialization is implemented; most snapshot commands are not.',
    'The Engineering Orchestrator is a local shell-and-tmux prototype with fixed pane assumptions.',
    'No autonomous platform, production deployment, or productivity improvement is claimed.',
    'The reviewed Chronicle working tree contains uncommitted prototype changes; publication should not imply a released package.',
  ],
};

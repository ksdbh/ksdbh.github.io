import { confidential, known, type EvidenceReference, type Fact } from './schema';

const ownerStatement: EvidenceReference = {
  id: 'phase-2-owner-brief',
  kind: 'owner-statement',
  label: 'Phase 2 homepage brief',
  public: false,
};

const portfolioReview: EvidenceReference = {
  id: 'phase-0-portfolio-review',
  kind: 'artifact',
  label: 'Phase 0 content inventory',
  locator: 'docs/content-inventory.md',
  public: true,
};

const resonanceRepository: EvidenceReference = {
  id: 'resonance-foundry-repository',
  kind: 'repository',
  label: 'Resonance Foundry source and tests',
  public: true,
};

export interface HomepageProof {
  value: Fact<string>;
  label: string;
}

export interface HomepageProjectPreview {
  slug: string;
  number: string;
  title: string;
  context: string;
  maturity: string;
  purpose: Fact<string>;
  contribution: Fact<string>;
  decision: Fact<string>;
  technologies: readonly string[];
}

export interface HomepageCapability {
  title: string;
  description: Fact<string>;
  evidence: string;
  href: string;
}

export const homepageContent = {
  hero: {
    name: known('Sean Hayes', [ownerStatement]),
    positioning: known('Backend • Platform • Cloud Engineer', [ownerStatement]),
    statement: known(
      'I build backend and cloud systems that move data reliably, automate infrastructure and delivery, and make production behavior easier to understand.',
      [ownerStatement, portfolioReview],
    ),
    context: known('Charlotte, North Carolina · Remote or hybrid', [ownerStatement]),
  },
  proof: [
    { value: known('4+', [ownerStatement]), label: 'Years engineering experience' },
    { value: known('Python · Java', [ownerStatement, portfolioReview]), label: 'Backend systems' },
    {
      value: known('AWS · Terraform', [ownerStatement, portfolioReview]),
      label: 'Cloud delivery',
    },
    {
      value: known('Kafka · Containers', [ownerStatement, portfolioReview]),
      label: 'Distributed integration',
    },
  ] satisfies HomepageProof[],
  projects: [
    {
      slug: 'enterprise-event-driven-integration',
      number: '01',
      title: 'Enterprise Event-Driven Integration',
      context: 'Professional systems work',
      maturity: 'Generalized',
      purpose: known(
        'Integrate asynchronous data flows across application, identity, cloud, persistence, and operational boundaries.',
        [ownerStatement, portfolioReview],
      ),
      contribution: confidential(
        'Professional backend integration work across application, identity, cloud, persistence, and operational boundaries. Direct ownership and the final team decision are not yet attributed publicly.',
      ),
      decision: known(
        'Participated in evaluating Event Source Mapping against Application-Managed Polling. The authentication tradeoff is verified; the final production selection and delivery behavior are not yet published.',
        [ownerStatement, portfolioReview],
      ),
      technologies: ['Kafka', 'AWS', 'Terraform', 'Relational persistence'],
    },
    {
      slug: 'chronicle',
      number: '02',
      title: 'Chronicle',
      context: 'Developer experience',
      maturity: 'Prototype',
      purpose: known(
        'Explore how bounded tasks, checkpoints, and durable artifacts can make coordinated engineering work easier to inspect.',
        [portfolioReview],
      ),
      contribution: known(
        'Implemented idempotent workspace initialization and prototyped fixed-pane tmux dispatch, capture, and reporting scripts. Snapshot creation and history are planned.',
        [portfolioReview],
      ),
      decision: known(
        'Kept the implemented initializer, local orchestration prototype, planned snapshot behavior, and broader Architectural Exploration explicitly separate.',
        [portfolioReview],
      ),
      technologies: ['Python', 'Shell', 'tmux', 'Local files'],
    },
    {
      slug: 'resonance-foundry',
      number: '03',
      title: 'Resonance Foundry',
      context: 'Creative engineering',
      maturity: 'Implemented',
      purpose: known(
        'Understand browser rendering, animation lifecycles, performance, interaction design, and mathematical systems by building them directly.',
        [ownerStatement, portfolioReview, resonanceRepository],
      ),
      contribution: known(
        'Built a framework-free Engineering Laboratory with explicit lifecycle ownership, deterministic experiments, responsive rendering, failure handling, and testable geometry and physics utilities.',
        [portfolioReview, resonanceRepository],
      ),
      decision: known(
        'Selected CSS, SVG, Canvas, Web Audio, or WebGL according to each effect instead of forcing every experiment through one renderer.',
        [portfolioReview, resonanceRepository],
      ),
      technologies: ['TypeScript', 'SVG + Canvas', 'Web Audio', 'WebGL'],
    },
  ] satisfies HomepageProjectPreview[],
  capabilities: [
    {
      title: 'Backend Engineering',
      description: known(
        'Java and Spring Boot services, Python APIs, REST and OpenAPI contracts, and relational persistence boundaries.',
        [ownerStatement, portfolioReview],
      ),
      evidence: 'Professional application work · independent FastAPI systems',
      href: '/work/',
    },
    {
      title: 'Distributed Systems',
      description: known(
        'Kafka integrations and asynchronous workflows that cross application, identity, cloud, persistence, and operational boundaries.',
        [ownerStatement, portfolioReview],
      ),
      evidence: 'Enterprise Event-Driven Integration',
      href: '/work/enterprise-event-driven-integration/',
    },
    {
      title: 'Cloud & Platform Engineering',
      description: known(
        'AWS and Terraform delivery work, Docker, CI/CD, and applications deployed onto Kubernetes and OpenShift platforms.',
        [ownerStatement, portfolioReview],
      ),
      evidence: 'Professional cloud and deployment environments',
      href: '/work/',
    },
    {
      title: 'Operational Engineering',
      description: known(
        'Production troubleshooting across application, identity, network, and downstream boundaries, supported by logs, metrics, and operational telemetry.',
        [ownerStatement, portfolioReview],
      ),
      evidence: 'Professional integration and observability work',
      href: '/work/',
    },
    {
      title: 'Emerging AI & Developer Experience',
      description: known(
        'Local role dispatch, pane capture, run reports, agent handoffs, and retrieval-system scaffolds explored without presenting prototypes as products.',
        [portfolioReview],
      ),
      evidence: 'Chronicle · EduRAG',
      href: '/work/chronicle/',
    },
    {
      title: 'Creative Engineering',
      description: known(
        'Browser-native rendering, procedural systems, audio, geometry, and physics approximations built to make underlying behavior inspectable.',
        [portfolioReview, resonanceRepository],
      ),
      evidence: 'Resonance Foundry',
      href: '/work/resonance-foundry/',
    },
  ] satisfies HomepageCapability[],
} as const;

export function publicFact<T>(fact: Fact<T>): T | string | null {
  if (fact.status === 'known') return fact.value;
  if (fact.status === 'confidential') return fact.publicSummary;
  return null;
}

import { confidential, known, unknown } from '../schema';
import { inventoryReview, ownerBrief } from './evidence';
import type { CaseStudy } from './types';

const evidence = [ownerBrief, inventoryReview];

export const enterpriseIntegration: CaseStudy = {
  slug: 'enterprise-event-driven-integration',
  title: 'Enterprise Event-Driven Integration',
  eyebrow: 'Distributed systems · Generalized professional work',
  maturity: 'professional-sanitized',
  maturityLabel: 'Generalized',
  lede: confidential(
    'A generalized account of professional integration work in which authentication requirements changed the viable event-consumption options. The public record does not attribute a final implementation choice that has not been directly verified.',
  ),
  facts: [
    { label: 'Domain', value: 'Event-driven integration' },
    { label: 'Verified decision', value: 'Consumption-path evaluation' },
    { label: 'Sean’s ownership', value: 'Not yet verified for publication' },
    { label: 'Implementation detail', value: 'Generalized' },
  ],
  executiveSummary: {
    paragraphs: [
      confidential(
        'The work crossed an enterprise event stream, a cloud-compute boundary, authentication, and relational persistence. Employer, customer, payload, network, and scale details are omitted.',
      ),
      known(
        'Sean participated in evaluating Event Source Mapping against Application-Managed Polling. Event Source Mapping offered platform-managed offset behavior and a smaller application surface, but its authentication boundary did not fit the integration. Application-Managed Polling offered authentication flexibility while transferring offset, replay, retry, and partial-failure responsibility into application code.',
        evidence,
      ),
    ],
  },
  problem: {
    paragraphs: [
      confidential(
        'The verified technical problem was to move asynchronous records from an enterprise Kafka boundary toward a relational destination when the simpler managed consumption path could not satisfy the required authentication model.',
      ),
      unknown(
        'The business consumer, business-neutral outcome, and safe public description of the resulting capability remain unverified.',
      ),
    ],
  },
  context: {
    paragraphs: [
      confidential(
        'This was professional work in an enterprise environment. The public record does not distinguish Sean’s individual decisions from team decisions or inherited architecture. The diagram therefore shows boundaries rather than an employer topology.',
      ),
      unknown(
        'Sean’s direct implementation ownership, the final team decision, and the division between production work, design, migration, and troubleshooting have not yet been verified for publication.',
      ),
    ],
  },
  constraints: {
    paragraphs: [],
    points: known(
      [
        'The public record identifies an enterprise event stream and relational destination but does not establish which components Sean inherited or implemented.',
        'The required authentication model ruled out treating Event Source Mapping as an automatic default.',
        'The work crossed application, identity, cloud, persistence, infrastructure, and network ownership boundaries.',
        'Employer topology, payloads, accounts, volumes, and unsupported metrics cannot be published.',
      ],
      evidence,
    ),
  },
  architecture: {
    paragraphs: [
      confidential(
        'The public diagram is synthetic. It preserves the consequential boundaries—event source, consumer control, identity, persistence, and telemetry—without reconstructing a private environment.',
      ),
    ],
    diagram: {
      title: 'Generalized event-integration boundary',
      description:
        'A generalized producer, enterprise Kafka boundary, cloud consumer, relational destination, identity boundary, and operational signals are shown without asserting unverified commit ordering.',
      nodes: [
        {
          id: 'producer',
          label: 'Producer',
          detail: 'Generalized source',
          status: 'sanitized',
          x: 24,
          y: 150,
          width: 124,
          height: 70,
        },
        {
          id: 'stream',
          label: 'Event stream',
          detail: 'Enterprise Kafka',
          status: 'sanitized',
          x: 190,
          y: 150,
          width: 140,
          height: 70,
        },
        {
          id: 'consumer',
          label: 'Consumer',
          detail: 'Cloud compute',
          status: 'sanitized',
          x: 380,
          y: 150,
          width: 140,
          height: 70,
        },
        {
          id: 'target',
          label: 'Persistence',
          detail: 'Relational target',
          status: 'sanitized',
          x: 570,
          y: 150,
          width: 140,
          height: 70,
        },
        {
          id: 'identity',
          label: 'Identity',
          detail: 'Secrets boundary',
          status: 'sanitized',
          x: 380,
          y: 24,
          width: 140,
          height: 70,
        },
        {
          id: 'telemetry',
          label: 'Operations',
          detail: 'Logs and metrics',
          status: 'sanitized',
          x: 380,
          y: 306,
          width: 140,
          height: 70,
        },
      ],
      edges: [
        { id: 'produce', path: 'M148 185 H190', label: 'publish', labelX: 169, labelY: 174 },
        { id: 'consume', path: 'M330 185 H380', label: 'poll / receive', labelX: 355, labelY: 174 },
        { id: 'persist', path: 'M520 185 H570', label: 'write', labelX: 545, labelY: 174 },
        {
          id: 'authenticate',
          path: 'M450 94 V150',
          label: 'authenticate',
          labelX: 458,
          labelY: 123,
          dashed: true,
        },
        {
          id: 'observe',
          path: 'M450 220 V306',
          label: 'emit signals',
          labelX: 458,
          labelY: 266,
          dashed: true,
        },
      ],
      mobileSteps: [
        'A generalized producer publishes to an enterprise event stream.',
        'A cloud consumer crosses an identity boundary before it can consume records.',
        'Records move toward a relational destination; exact transformation and commit ordering are not published.',
        'Operational signals span consumption, authentication, processing, and persistence boundaries.',
      ],
      boundaryNote:
        'All topology, names, payloads, and relationships are generalized for confidentiality.',
    },
  },
  decisions: [
    {
      title: 'Event Source Mapping or Application-Managed Polling',
      status: 'Generalized · final implementation not attributed',
      summary: known(
        'Sean participated in comparing Event Source Mapping with Application-Managed Polling. The authentication constraint made the managed path an invalid automatic default; the public evidence does not establish the final production selection or Sean’s decision authority.',
        evidence,
      ),
      drivers: known(
        [
          'Authentication flexibility',
          'Offset and commit ownership',
          'Replay control',
          'Operational simplicity',
        ],
        evidence,
      ),
      consequences: known(
        [
          'Event Source Mapping reduced application responsibility but did not fit the authentication boundary.',
          'Application-Managed Polling offered authentication control at the cost of application-owned offsets, replay, retries, and partial-failure handling.',
        ],
        evidence,
      ),
    },
    {
      title: 'Batch and commit boundary',
      status: 'Unknown · not published',
      summary: unknown(
        'The implemented record or batch strategy and the position of offset commits relative to persistence remain unverified.',
      ),
      drivers: unknown(
        'The latency, throughput, downstream-transaction, and failure-isolation constraints remain unverified.',
      ),
      consequences: unknown('The implemented partial-batch failure behavior remains unverified.'),
    },
    {
      title: 'Idempotency and replay',
      status: 'Unknown · not published',
      summary: unknown(
        'The implemented duplicate-protection mechanism—if any—has not been verified for publication.',
      ),
      drivers: unknown(
        'The delivery guarantee, offset/write coordination requirements, and operator replay process remain unverified.',
      ),
      consequences: unknown(
        'The conditions under which a record could be replayed, duplicated, or skipped remain unverified.',
      ),
    },
  ],
  rejectedAlternatives: [
    {
      title: 'Event Source Mapping as the default',
      benefit: known(
        'Automatic commits and a smaller application-owned polling surface.',
        evidence,
      ),
      reason: known(
        'Its authentication boundary did not fit the integration constraint.',
        evidence,
      ),
    },
  ],
  operationalBehavior: {
    paragraphs: [
      unknown(
        'Implemented polling, timeout, retry, backoff, concurrency, poison-event, replay, and partial-batch behavior remain unverified. No production behavior is inferred from the architecture comparison.',
      ),
    ],
  },
  observability: {
    paragraphs: [
      unknown(
        'The logs, metrics, dashboards, alarms, correlation identifiers, and offset-progress signals used in the implemented system remain unverified.',
      ),
    ],
  },
  security: {
    paragraphs: [
      known(
        'Authentication was an architectural constraint because it changed which event-consumption mechanism was viable.',
        evidence,
      ),
      unknown(
        'The safe public division of responsibility between the cloud secrets manager and external secrets platform remains unverified.',
      ),
    ],
  },
  performance: {
    paragraphs: [
      known(
        'No throughput, latency, availability, or deployment-improvement number is published. Existing numerical claims were removed because their baselines and attribution could not be verified.',
        evidence,
      ),
      unknown('No defensible operational outcome has yet been verified for publication.'),
    ],
  },
  lessons: [
    {
      title: 'Authentication fit preceded operational convenience',
      body: known(
        'Event Source Mapping offered a smaller application-owned surface, but that benefit did not outweigh its authentication mismatch during the verified evaluation.',
        evidence,
      ),
    },
  ],
  futureImprovements: {
    paragraphs: [],
    points: unknown(
      'Technical future improvements cannot be attributed until the implemented architecture, operational consequences, and team decision are directly confirmed.',
    ),
  },
  evidenceNotes: [
    'Architecture is a generalized pattern, not a reconstruction of an employer system.',
    'The Event Source Mapping versus Application-Managed Polling evaluation is confirmed; the final production selection is not attributed.',
    'Unsupported scale, availability, and deployment metrics are intentionally excluded.',
    'Sean’s ownership, team decisions, batch semantics, idempotency, operational behavior, and outcomes still require direct confirmation.',
  ],
};

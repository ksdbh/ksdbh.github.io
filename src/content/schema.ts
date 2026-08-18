/**
 * Portfolio content is modeled as evidence, not marketing copy. A field must
 * either carry a sourced value or explicitly say why a public value is absent.
 */
export type Fact<T> =
  | {
      status: 'known';
      value: T;
      evidence: EvidenceReference[];
    }
  | {
      status: 'unknown';
      question: string;
    }
  | {
      status: 'confidential';
      publicSummary: string;
      evidence?: EvidenceReference[];
    }
  | {
      status: 'not-applicable';
      reason: string;
    };

export interface EvidenceReference {
  id: string;
  kind:
    | 'owner-statement'
    | 'resume'
    | 'repository'
    | 'source-code'
    | 'test'
    | 'deployment'
    | 'employment-record'
    | 'artifact';
  label: string;
  locator?: string;
  public: boolean;
  notes?: string;
}

export type PublicationState = 'draft' | 'review-required' | 'approved';
export type ProjectProminence = 'flagship' | 'secondary' | 'archive';
export type DeliveryStatus = 'implemented' | 'prototype' | 'architectural-exploration' | 'planned';

export interface Profile {
  name: Fact<string>;
  professionalTitle: Fact<string>;
  shortPositioning: Fact<string>;
  engineeringMotivation: Fact<string>;
  currentRole: Fact<string>;
  targetRoles: Fact<string[]>;
  location: Fact<string>;
  availability: Fact<string>;
  workPreference: Fact<WorkPreference>;
  professionalSummary: Fact<string[]>;
  workingPrinciples: Fact<string[]>;
  resumePath: Fact<string>;
  contactMethods: ContactMethod[];
  personalInterests: PersonalInterest[];
  publicationState: PublicationState;
}

export interface WorkPreference {
  remote: boolean;
  hybrid: boolean;
  onsite: boolean;
  relocation: 'open' | 'selective' | 'not-open';
  publicSummary: string;
}

export interface Experience {
  id: string;
  employer: Fact<string>;
  publicEmployerLabel: string;
  role: Fact<string>;
  startDate: Fact<string>;
  endDate: Fact<string>;
  location: Fact<string>;
  environment: Fact<string>;
  responsibilities: Fact<string[]>;
  technologies: Fact<string[]>;
  outcomes: Outcome[];
  capabilityIds: string[];
  confidentialityNotes: string[];
  publicationState: PublicationState;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  prominence: ProjectProminence;
  deliveryStatus: DeliveryStatus;
  subprojectIds: string[];
  oneLineSummary: Fact<string>;
  problem: Fact<string>;
  context: Fact<string>;
  ownership: Fact<string[]>;
  users: Fact<string[]>;
  constraints: Fact<string[]>;
  architecture: ArchitectureComponent[];
  decisions: ProjectDecision[];
  rejectedAlternatives: Tradeoff[];
  operationalBehavior: Fact<string[]>;
  failureModes: Fact<string[]>;
  security: Fact<string[]>;
  observability: Fact<string[]>;
  technologies: Fact<string[]>;
  outcomes: Outcome[];
  lessons: Lesson[];
  capabilityIds: string[];
  repositoryUrl: Fact<string>;
  liveUrl: Fact<string>;
  visualStoryId: Fact<string>;
  confidentialityNotes: string[];
  publicationState: PublicationState;
}

export interface ProjectDecision {
  id: string;
  title: string;
  context: Fact<string>;
  decision: Fact<string>;
  rationale: Fact<string[]>;
  consequences: Fact<string[]>;
  evidence: EvidenceReference[];
}

export interface ArchitectureComponent {
  id: string;
  label: string;
  category:
    | 'client'
    | 'service'
    | 'compute'
    | 'messaging'
    | 'storage'
    | 'identity'
    | 'network'
    | 'observability'
    | 'delivery'
    | 'agent'
    | 'tooling';
  responsibility: Fact<string>;
  technology: Fact<string>;
  deliveryStatus: DeliveryStatus;
  connections: ArchitectureConnection[];
  publicLabel?: string;
}

export interface ArchitectureConnection {
  targetId: string;
  direction: 'inbound' | 'outbound' | 'bidirectional';
  interaction: Fact<string>;
  protocol: Fact<string>;
  asynchronous: boolean;
}

export interface Tradeoff {
  id: string;
  option: Fact<string>;
  advantages: Fact<string[]>;
  disadvantages: Fact<string[]>;
  rejectionReason: Fact<string>;
}

export interface Outcome {
  id: string;
  statement: Fact<string>;
  measurement: Fact<{
    value: number;
    unit: string;
    direction?: 'increase' | 'decrease' | 'maintained';
    baseline?: string;
    measurementWindow?: string;
  }>;
  scope: Fact<string>;
}

export interface Lesson {
  id: string;
  observation: Fact<string>;
  implication: Fact<string>;
  nextIteration: Fact<string>;
}

export interface Capability {
  id: string;
  label: string;
  summary: Fact<string>;
  evidence: CapabilityEvidence[];
  projectIds: string[];
  experienceIds: string[];
  publicationState: PublicationState;
}

export interface CapabilityEvidence {
  claim: string;
  evidence: EvidenceReference[];
  strength: 'professional' | 'independent-project' | 'exploration';
}

export interface PersonalInterest {
  id: string;
  label: string;
  significance: Fact<string>;
  publicDetails: Fact<string[]>;
  media: Fact<string[]>;
}

export interface ContactMethod {
  id: string;
  kind: 'email' | 'github' | 'linkedin' | 'resume' | 'other';
  label: string;
  href: Fact<string>;
  primary: boolean;
  public: boolean;
}

export function known<T>(
  value: T,
  evidence: EvidenceReference[],
): Extract<Fact<T>, { status: 'known' }> {
  return { status: 'known', value, evidence };
}

export function unknown<T>(question: string): Extract<Fact<T>, { status: 'unknown' }> {
  return { status: 'unknown', question };
}

export function confidential<T>(
  publicSummary: string,
): Extract<Fact<T>, { status: 'confidential' }> {
  return { status: 'confidential', publicSummary };
}

export function notApplicable<T>(reason: string): Extract<Fact<T>, { status: 'not-applicable' }> {
  return { status: 'not-applicable', reason };
}

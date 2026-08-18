import type { DeliveryStatus, Fact } from '../schema';

export type CaseStudyMaturity = 'professional-sanitized' | 'prototype' | 'implemented';

export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface NarrativeSection {
  paragraphs: Fact<string>[];
  points?: Fact<string[]>;
}

export interface CaseStudyDecision {
  title: string;
  status: string;
  summary: Fact<string>;
  drivers: Fact<string[]>;
  consequences: Fact<string[]>;
}

export interface RejectedAlternative {
  title: string;
  benefit: Fact<string>;
  reason: Fact<string>;
}

export interface CaseStudyLesson {
  title: string;
  body: Fact<string>;
}

export interface DiagramNode {
  id: string;
  label: string;
  detail: string;
  status: DeliveryStatus | 'sanitized';
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DiagramEdge {
  id: string;
  path: string;
  label: string;
  labelX: number;
  labelY: number;
  dashed?: boolean;
}

export interface ArchitectureDiagramContent {
  title: string;
  description: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  mobileSteps: string[];
  boundaryNote: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  maturity: CaseStudyMaturity;
  maturityLabel: string;
  lede: Fact<string>;
  facts: CaseStudyFact[];
  executiveSummary: NarrativeSection;
  problem: NarrativeSection;
  context: NarrativeSection;
  constraints: NarrativeSection;
  architecture: NarrativeSection & { diagram: ArchitectureDiagramContent };
  decisions: CaseStudyDecision[];
  rejectedAlternatives: RejectedAlternative[];
  operationalBehavior: NarrativeSection;
  observability: NarrativeSection;
  security: NarrativeSection;
  performance: NarrativeSection;
  lessons: CaseStudyLesson[];
  futureImprovements: NarrativeSection;
  evidenceNotes: string[];
}

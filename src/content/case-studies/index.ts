import { chronicle } from './chronicle';
import { enterpriseIntegration } from './enterprise-integration';
import { resonanceFoundry } from './resonance-foundry';

export const caseStudies = [enterpriseIntegration, chronicle, resonanceFoundry] as const;

export type CaseStudySlug = (typeof caseStudies)[number]['slug'];

export function findCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

export type { CaseStudy } from './types';

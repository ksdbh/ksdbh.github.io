export const caseStudyIndex = [
  {
    slug: 'enterprise-event-driven-integration',
    title: 'Enterprise Event-Driven Integration',
    maturity: 'professional-sanitized',
    status: 'content-review',
  },
  {
    slug: 'chronicle',
    title: 'Chronicle',
    maturity: 'prototype-and-exploration',
    status: 'content-review',
  },
  {
    slug: 'resonance-foundry',
    title: 'Resonance Foundry',
    maturity: 'implemented',
    status: 'content-review',
  },
] as const;

export type CaseStudySlug = (typeof caseStudyIndex)[number]['slug'];

export function findCaseStudy(slug: string) {
  return caseStudyIndex.find((project) => project.slug === slug);
}

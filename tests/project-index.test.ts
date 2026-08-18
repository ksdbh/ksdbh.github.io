import { describe, expect, it } from 'vitest';
import { caseStudyIndex, findCaseStudy } from '@/content/projects';

describe('case study route index', () => {
  it('uses unique slugs for static routes', () => {
    const slugs = caseStudyIndex.map(({ slug }) => slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('resolves a known case study', () => {
    expect(findCaseStudy('chronicle')?.title).toBe('Chronicle');
  });
});

import { render, screen, within } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import { CaseStudyArticle } from '@/components/case-study/CaseStudyArticle';
import { caseStudies, findCaseStudy } from '@/content/case-studies';
import type { Fact } from '@/content/schema';

function countUnknownFacts(value: unknown): number {
  if (!value || typeof value !== 'object') return 0;
  if (Array.isArray(value))
    return value.reduce((total, item) => total + countUnknownFacts(item), 0);

  const record = value as Record<string, unknown>;
  return (
    (record.status === 'unknown' ? 1 : 0) +
    Object.values(record).reduce<number>((total, item) => total + countUnknownFacts(item), 0)
  );
}

function publicText(fact: Fact<string>): string {
  if (fact.status === 'known') return fact.value;
  if (fact.status === 'confidential') return fact.publicSummary;
  return '';
}

describe('flagship case-study content', () => {
  it('defines exactly three unique flagship routes with every editorial section populated', () => {
    expect(caseStudies).toHaveLength(3);
    expect(new Set(caseStudies.map(({ slug }) => slug)).size).toBe(3);

    for (const study of caseStudies) {
      expect(study.executiveSummary.paragraphs.length).toBeGreaterThan(0);
      expect(study.problem.paragraphs.length).toBeGreaterThan(0);
      expect(study.context.paragraphs.length).toBeGreaterThan(0);
      expect(study.constraints.points).toBeDefined();
      expect(study.architecture.diagram.nodes.length).toBeGreaterThan(3);
      expect(study.architecture.diagram.mobileSteps.length).toBeGreaterThan(2);
      expect(study.decisions.length).toBeGreaterThan(1);
      expect(study.rejectedAlternatives.length).toBeGreaterThan(0);
      expect(study.operationalBehavior.paragraphs.length).toBeGreaterThan(0);
      expect(study.observability.paragraphs.length).toBeGreaterThan(0);
      expect(study.security.paragraphs.length).toBeGreaterThan(0);
      expect(study.performance.paragraphs.length).toBeGreaterThan(0);
      expect(study.lessons.length).toBeGreaterThan(0);
      expect(study.futureImprovements.points).toBeDefined();
    }
  });

  it('keeps Chronicle implemented, prototype, and planned states distinct', () => {
    const chronicle = findCaseStudy('chronicle');
    expect(chronicle).toBeDefined();

    const statuses = new Set(chronicle?.architecture.diagram.nodes.map(({ status }) => status));
    expect(statuses).toEqual(new Set(['implemented', 'prototype', 'planned']));
    expect(publicText(chronicle!.operationalBehavior.paragraphs[1]!)).toMatch(
      /print TODO messages and currently return a successful exit code/i,
    );
  });

  it('preserves unresolved professional claims as evidence boundaries', () => {
    const enterprise = findCaseStudy('enterprise-event-driven-integration');
    expect(enterprise).toBeDefined();
    expect(countUnknownFacts(enterprise)).toBeGreaterThan(5);

    const published = JSON.stringify(enterprise);
    expect(published).not.toMatch(/millions?\/?day/i);
    expect(published).not.toMatch(/30%/i);
    expect(published).not.toMatch(/final production selection was/i);
  });

  it('uses one public maturity vocabulary', () => {
    expect(caseStudies.map(({ maturityLabel }) => maturityLabel)).toEqual([
      'Generalized',
      'Prototype',
      'Implemented',
    ]);
  });
});

describe('CaseStudyArticle', () => {
  it('renders the shared editorial rhythm and progressively disclosed decisions', () => {
    render(
      <main>
        <CaseStudyArticle study={caseStudies[0]} />
      </main>,
    );

    expect(
      screen.getByRole('heading', { level: 1, name: 'Enterprise Event-Driven Integration' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Executive Summary' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Architecture' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Operational Behavior' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Future Improvements' })).toBeInTheDocument();
    expect(screen.getAllByRole('group')).toHaveLength(caseStudies[0].decisions.length + 1);
  });

  it('provides an accessible diagram and an equivalent small-screen flow', () => {
    const study = caseStudies[2];
    render(
      <main>
        <CaseStudyArticle study={study} />
      </main>,
    );

    expect(screen.getByRole('img', { name: study.architecture.diagram.title })).toBeInTheDocument();
    const mobileFlow = screen.getByRole('list', {
      name: `${study.architecture.diagram.title} flow`,
    });
    expect(within(mobileFlow).getAllByRole('listitem')).toHaveLength(
      study.architecture.diagram.mobileSteps.length,
    );
  });

  it('has no automated structural accessibility violations', async () => {
    const { container } = render(
      <main>
        <CaseStudyArticle study={caseStudies[1]} />
      </main>,
    );
    const results = await axe.run(container, {
      rules: { 'color-contrast': { enabled: false } },
    });

    expect(results.violations).toEqual([]);
  });
});

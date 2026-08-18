import { render, screen, within } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';

function renderHomepage() {
  return render(
    <main>
      <HomePage />
    </main>,
  );
}

describe('HomePage', () => {
  it('establishes the positioning and primary actions immediately', () => {
    renderHomepage();

    expect(screen.getByText('Sean Hayes')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Backend • Platform • Cloud Engineer' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View selected work/i })).toHaveAttribute(
      'href',
      '#selected-work',
    );
    expect(screen.getByRole('link', { name: /View .* download résumé/i })).toHaveAttribute(
      'href',
      '/Sean_Hayes_Resume.pdf',
    );
  });

  it('presents exactly three selected-work narratives with truthful maturity labels', () => {
    renderHomepage();

    const selectedWork = screen.getByRole('region', {
      name: 'Three systems, three kinds of evidence',
    });
    const stories = within(selectedWork).getAllByRole('article');

    expect(stories).toHaveLength(3);
    expect(selectedWork).toHaveTextContent('Generalized');
    expect(selectedWork).toHaveTextContent('Prototype');
    expect(selectedWork).toHaveTextContent('Resonance Foundry');
    expect(within(selectedWork).getAllByRole('link', { name: /Read case study/i })).toHaveLength(3);
  });

  it('connects capabilities to evidence and provides a stepwise mobile flow', () => {
    renderHomepage();

    expect(
      screen.getByRole('heading', { name: 'Tools become meaningful in context' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Evidence Chronicle · EduRAG/i }).getAttribute('href'),
    ).toMatch(/^\/work\/chronicle\/?$/);

    const mobileFlow = screen.getByRole('list', { name: 'System flow steps' });
    expect(within(mobileFlow).getAllByRole('listitem')).toHaveLength(5);
  });

  it('does not publish an availability badge or unsupported scale claims', () => {
    renderHomepage();

    expect(screen.queryByText(/^Available$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/millions? of events/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/built a local Python snapshot engine/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/content-addressed storage/i)).not.toBeInTheDocument();
  });

  it('has no automated structural accessibility violations', async () => {
    const { container } = renderHomepage();
    const results = await axe.run(container, {
      rules: { 'color-contrast': { enabled: false } },
    });

    expect(results.violations).toEqual([]);
  });
});

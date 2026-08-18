import { render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import { SiteHeader } from '@/components/layout/SiteHeader';

describe('SiteHeader', () => {
  it('exposes the portfolio identity and primary routes', () => {
    render(<SiteHeader />);

    expect(screen.getByRole('link', { name: /Sean Hayes/i })).toHaveAttribute('href', '/');

    const navigation = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(navigation).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Work' }).getAttribute('href')).toMatch(/^\/work\/?$/);
    expect(screen.getByRole('link', { name: 'Lab' }).getAttribute('href')).toMatch(/^\/lab\/?$/);
    expect(screen.getByRole('link', { name: 'About' }).getAttribute('href')).toMatch(
      /^\/about\/?$/,
    );
  });

  it('has no automated accessibility violations', async () => {
    const { container } = render(<SiteHeader />);
    const results = await axe.run(container, {
      rules: { 'color-contrast': { enabled: false } },
    });
    expect(results.violations).toEqual([]);
  });
});

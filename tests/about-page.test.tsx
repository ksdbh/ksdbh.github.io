import { render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import AboutPage from '@/app/about/page';

describe('AboutPage', () => {
  it('publishes complete current context without placeholder language', () => {
    render(
      <main>
        <AboutPage />
      </main>,
    );

    expect(screen.getByText(/I’m a Full Stack Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Charlotte, North Carolina/i)).toBeInTheDocument();
    expect(screen.getByText(/I am a dad to a wonderful daughter/i)).toBeInTheDocument();
    expect(screen.getByText(/paragliding, rock climbing and hiking/i)).toBeInTheDocument();
    expect(screen.queryByText(/will connect|remaining chronology/i)).not.toBeInTheDocument();
  });

  it('has no automated structural accessibility violations', async () => {
    const { container } = render(
      <main>
        <AboutPage />
      </main>,
    );
    const results = await axe.run(container, {
      rules: { 'color-contrast': { enabled: false } },
    });

    expect(results.violations).toEqual([]);
  });
});

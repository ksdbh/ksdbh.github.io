import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="muted">{children}</div>
    </header>
  );
}

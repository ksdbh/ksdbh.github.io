import type { ReactNode } from 'react';

interface FoundationNoticeProps {
  title: string;
  children: ReactNode;
}

export function FoundationNotice({ title, children }: FoundationNoticeProps) {
  return (
    <section className="surface content-stack" aria-labelledby="foundation-notice-title">
      <h2 id="foundation-notice-title">{title}</h2>
      {children}
    </section>
  );
}

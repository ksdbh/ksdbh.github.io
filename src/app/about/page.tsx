import type { Metadata } from 'next';
import { PageIntro } from '@/components/layout/PageIntro';

export const metadata: Metadata = {
  title: 'About',
  description: 'Professional and personal context for Sean Hayes.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="I like understanding how systems behave">
        <p>
          I’m a Full Stack Engineer working primarily across backend, platform, and cloud concerns.
          I’m happiest when I can understand a system deeply enough to explain its behavior and the
          tradeoffs behind it clearly.
        </p>
      </PageIntro>
      <section className="content-stack" aria-labelledby="working-context">
        <h2 id="working-context">Working context</h2>
        <p>
          I’m based in Charlotte, North Carolina and interested in long-term backend, platform, and
          cloud opportunities. Remote and hybrid work are preferred; relocation is considered
          selectively.
        </p>
      </section>
      <section className="content-stack" aria-labelledby="outside-engineering">
        <h2 id="outside-engineering">Outside engineering</h2>
        <p>
          I am a dad to a wonderful daughter. During my off time from work my hobbies include
          paragliding, rock climbing and hiking.
        </p>
      </section>
    </>
  );
}

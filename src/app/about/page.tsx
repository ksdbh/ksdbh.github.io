import type { Metadata } from 'next';
import { PageIntro } from '@/components/layout/PageIntro';
import { FoundationNotice } from '@/components/ui/FoundationNotice';

export const metadata: Metadata = {
  title: 'About',
  description: 'Professional and personal context for Sean Hayes.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Professional context, without the corporate biography">
        <p>
          This route will connect engineering motivation, professional experience, and a concise
          personal introduction after the remaining chronology is verified.
        </p>
      </PageIntro>
      <FoundationNotice title="Content boundary">
        <p>
          Current title, target positioning, location, and personal narrative are modeled.
          Employment dates and résumé chronology remain under factual review.
        </p>
      </FoundationNotice>
    </>
  );
}

import type { Metadata } from 'next';
import { PageIntro } from '@/components/layout/PageIntro';
import { FoundationNotice } from '@/components/ui/FoundationNotice';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Interactive engineering experiments by Sean Hayes.',
  alternates: { canonical: '/lab/' },
};

export default function LabPage() {
  return (
    <>
      <PageIntro eyebrow="Laboratory" title="Experiments belong here, not everywhere">
        <p>
          Resonance Foundry will be migrated behind this route after the portfolio’s content and
          interaction boundaries are complete.
        </p>
      </PageIntro>
      <FoundationNotice title="Migration boundary">
        <p>
          Animation engines remain separate from portfolio presentation. Future adapters will load
          browser-native experiments only where they provide explanatory value.
        </p>
      </FoundationNotice>
    </>
  );
}

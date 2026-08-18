import type { Metadata } from 'next';
import { PageIntro } from '@/components/layout/PageIntro';
import { FoundationNotice } from '@/components/ui/FoundationNotice';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'The runtime boundary between Resonance Foundry and Sean Hayes’s portfolio.',
  alternates: { canonical: '/lab/' },
  robots: { index: false, follow: false },
};

export default function LabPage() {
  return (
    <>
      <PageIntro eyebrow="Laboratory boundary" title="The engineering laboratory remains separate">
        <p>
          Resonance Foundry is maintained as a separate browser Engineering Laboratory. This
          portfolio documents the decisions and operating behavior without embedding its rendering
          loops into the portfolio runtime.
        </p>
      </PageIntro>
      <FoundationNotice title="Runtime boundary">
        <p>
          Keeping the laboratory separate prevents Canvas, WebGL, Web Audio, microphone, and frame
          lifecycle concerns from becoming global portfolio behavior. Its implemented architecture
          is documented in the Resonance Foundry case study.
        </p>
      </FoundationNotice>
    </>
  );
}

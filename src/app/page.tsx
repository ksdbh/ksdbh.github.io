import Link from 'next/link';
import { PageIntro } from '@/components/layout/PageIntro';
import { FoundationNotice } from '@/components/ui/FoundationNotice';
import { siteConfig } from '@/content/site';

export default function HomePage() {
  return (
    <>
      <PageIntro eyebrow="Engineering portfolio" title={siteConfig.name}>
        <p>{siteConfig.positioning}</p>
      </PageIntro>
      <FoundationNotice title="Foundation in progress">
        <p>
          The portfolio architecture is being established before final project narratives and visual
          storytelling are introduced.
        </p>
        <div className="cluster">
          <Link href="/work/">View work structure</Link>
          <Link href="/about/">View profile structure</Link>
        </div>
      </FoundationNotice>
    </>
  );
}

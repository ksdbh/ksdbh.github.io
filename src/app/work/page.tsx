import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/layout/PageIntro';
import { caseStudyIndex } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Engineering case studies and selected work by Sean Hayes.',
  alternates: { canonical: '/work/' },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Selected work" title="Engineering decisions before technology lists">
        <p>
          These case-study routes are established now; final narratives remain blocked on factual
          and confidentiality review.
        </p>
      </PageIntro>
      <section className="content-stack" aria-labelledby="flagship-projects">
        <h2 id="flagship-projects">Flagship case studies</h2>
        {caseStudyIndex.map((project) => (
          <article className="surface" key={project.slug}>
            <p className="eyebrow">{project.status.replace('-', ' ')}</p>
            <h3>
              <Link href={`/work/${project.slug}/`}>{project.title}</Link>
            </h3>
            <p className="muted">Maturity: {project.maturity.replaceAll('-', ' ')}</p>
          </article>
        ))}
      </section>
    </>
  );
}

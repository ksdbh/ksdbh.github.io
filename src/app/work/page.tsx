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
          Three systems examined through their constraints, architecture, operating behavior, and
          the decisions that shaped them.
        </p>
      </PageIntro>
      <section className="content-stack" aria-labelledby="flagship-projects">
        <h2 id="flagship-projects">Flagship case studies</h2>
        {caseStudyIndex.map((project) => (
          <article className="surface" key={project.slug}>
            <p className="eyebrow">{project.eyebrow}</p>
            <h3>
              <Link href={`/work/${project.slug}/`}>{project.title}</Link>
            </h3>
            <p className="muted">Evidence state: {project.maturityLabel}</p>
          </article>
        ))}
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/layout/PageIntro';
import { FoundationNotice } from '@/components/ui/FoundationNotice';
import { caseStudyIndex, findCaseStudy } from '@/content/projects';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudyIndex.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = findCaseStudy((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.title}: an engineering case study by Sean Hayes.`,
    alternates: { canonical: `/work/${project.slug}/` },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = findCaseStudy((await params).slug);
  if (!project) notFound();
  return (
    <>
      <PageIntro eyebrow="Case study foundation" title={project.title}>
        <p>Maturity: {project.maturity.replaceAll('-', ' ')}</p>
      </PageIntro>
      <FoundationNotice title="Narrative review required">
        <p>
          Problem, ownership, constraints, decisions, failure modes, outcomes, and lessons will be
          rendered from the evidence-first content model after the remaining P0 questions are
          resolved.
        </p>
      </FoundationNotice>
    </>
  );
}

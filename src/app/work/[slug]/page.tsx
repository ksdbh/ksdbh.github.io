import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyArticle } from '@/components/case-study/CaseStudyArticle';
import { caseStudies, findCaseStudy } from '@/content/case-studies';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
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
  return <CaseStudyArticle study={project} />;
}

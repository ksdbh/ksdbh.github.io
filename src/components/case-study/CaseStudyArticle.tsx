import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Fact } from '@/content/schema';
import type {
  CaseStudy,
  CaseStudyDecision,
  NarrativeSection,
  RejectedAlternative,
} from '@/content/case-studies/types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import styles from './CaseStudy.module.css';

interface CaseStudyArticleProps {
  study: CaseStudy;
}

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

const sectionLinks = [
  ['summary', 'Summary'],
  ['problem', 'Problem'],
  ['context', 'Context'],
  ['constraints', 'Constraints'],
  ['architecture', 'Architecture'],
  ['decisions', 'Decisions'],
  ['alternatives', 'Alternatives'],
  ['operations', 'Operations'],
  ['observability', 'Observability'],
  ['security', 'Security'],
  ['performance', 'Performance'],
  ['lessons', 'Lessons'],
  ['future', 'Future'],
] as const;

function factValue<T>(fact: Fact<T>): T | string | null {
  if (fact.status === 'known') return fact.value;
  if (fact.status === 'confidential') return fact.publicSummary;
  return null;
}

function evidenceBoundary<T>(fact: Fact<T>): string {
  if (fact.status === 'unknown') return fact.question;
  if (fact.status === 'not-applicable') return fact.reason;
  return 'A public value is available above.';
}

function FactParagraph({ fact }: { fact: Fact<string> }) {
  const value = factValue(fact);
  if (value) return <p>{value}</p>;

  return (
    <aside className={styles.reviewNote} aria-label="Editorial evidence note">
      <strong>Evidence boundary</strong>
      <p>{evidenceBoundary(fact)}</p>
    </aside>
  );
}

function FactList({ fact }: { fact: Fact<string[]> }) {
  const value = factValue(fact);
  if (Array.isArray(value)) {
    return (
      <ul className={styles.pointList}>
        {value.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    );
  }

  return (
    <aside className={styles.reviewNote} aria-label="Editorial evidence note">
      <strong>Evidence boundary</strong>
      <p>{evidenceBoundary(fact)}</p>
    </aside>
  );
}

function Narrative({ content }: { content: NarrativeSection }) {
  return (
    <div className={styles.prose}>
      {content.paragraphs.map((paragraph, index) => (
        <FactParagraph fact={paragraph} key={`${paragraph.status}-${index}`} />
      ))}
      {content.points ? <FactList fact={content.points} /> : null}
    </div>
  );
}

function Section({ id, number, title, children }: SectionProps) {
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionTitle}>
        <span aria-hidden="true">{number}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function Decision({ decision }: { decision: CaseStudyDecision }) {
  return (
    <details className={styles.disclosure}>
      <summary>
        <span>{decision.title}</span>
        <small>{decision.status}</small>
      </summary>
      <div className={styles.disclosureBody}>
        <FactParagraph fact={decision.summary} />
        <div className={styles.comparisonGrid}>
          <div>
            <h3>Decision drivers</h3>
            <FactList fact={decision.drivers} />
          </div>
          <div>
            <h3>Consequences</h3>
            <FactList fact={decision.consequences} />
          </div>
        </div>
      </div>
    </details>
  );
}

function Alternative({ alternative }: { alternative: RejectedAlternative }) {
  return (
    <article className={styles.alternative}>
      <h3>{alternative.title}</h3>
      <dl>
        <div>
          <dt>Why it was attractive</dt>
          <dd>
            <FactParagraph fact={alternative.benefit} />
          </dd>
        </div>
        <div>
          <dt>Why it was not selected</dt>
          <dd>
            <FactParagraph fact={alternative.reason} />
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function CaseStudyArticle({ study }: CaseStudyArticleProps) {
  return (
    <article className={styles.caseStudy}>
      <header className={styles.hero}>
        <Link className={styles.backLink} href="/work/">
          ← All case studies
        </Link>
        <p className="eyebrow">{study.eyebrow}</p>
        <h1>{study.title}</h1>
        <div className={styles.lede}>
          <FactParagraph fact={study.lede} />
        </div>
        <dl className={styles.factGrid}>
          <div>
            <dt>Evidence state</dt>
            <dd>{study.maturityLabel}</dd>
          </div>
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <nav className={styles.contents} aria-label={`${study.title} sections`}>
        <p>Case study map</p>
        <ol>
          {sectionLinks.map(([id, label], index) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <Section id="summary" number="01" title="Executive Summary">
        <Narrative content={study.executiveSummary} />
      </Section>
      <Section id="problem" number="02" title="Problem">
        <Narrative content={study.problem} />
      </Section>
      <Section id="context" number="03" title="Context">
        <Narrative content={study.context} />
      </Section>
      <Section id="constraints" number="04" title="Constraints">
        <Narrative content={study.constraints} />
      </Section>
      <Section id="architecture" number="05" title="Architecture">
        <Narrative content={study.architecture} />
        <ArchitectureDiagram content={study.architecture.diagram} slug={study.slug} />
      </Section>
      <Section id="decisions" number="06" title="Engineering Decisions">
        <p className={styles.sectionPrompt}>
          Open a decision to inspect its drivers and consequences.
        </p>
        <div className={styles.disclosureList}>
          {study.decisions.map((decision) => (
            <Decision decision={decision} key={decision.title} />
          ))}
        </div>
      </Section>
      <Section id="alternatives" number="07" title="Rejected Alternatives">
        <div className={styles.alternativeList}>
          {study.rejectedAlternatives.map((alternative) => (
            <Alternative alternative={alternative} key={alternative.title} />
          ))}
        </div>
      </Section>
      <Section id="operations" number="08" title="Operational Behavior">
        <Narrative content={study.operationalBehavior} />
      </Section>
      <Section id="observability" number="09" title="Observability">
        <Narrative content={study.observability} />
      </Section>
      <Section id="security" number="10" title="Security">
        <Narrative content={study.security} />
      </Section>
      <Section id="performance" number="11" title="Performance">
        <Narrative content={study.performance} />
      </Section>
      <Section id="lessons" number="12" title="Lessons Learned">
        <div className={styles.lessonGrid}>
          {study.lessons.map((lesson, index) => (
            <article key={lesson.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{lesson.title}</h3>
              <FactParagraph fact={lesson.body} />
            </article>
          ))}
        </div>
      </Section>
      <Section id="future" number="13" title="Future Improvements">
        <Narrative content={study.futureImprovements} />
        <details className={styles.evidenceNotes}>
          <summary>Editorial and evidence notes</summary>
          <ul>
            {study.evidenceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </details>
      </Section>

      <footer className={styles.caseStudyFooter}>
        <p>Continue reviewing the engineering work.</p>
        <Link href="/work/">View all case studies →</Link>
      </footer>
    </article>
  );
}

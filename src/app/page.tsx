import type { Metadata } from 'next';
import Link from 'next/link';
import { SystemFlow } from '@/components/home/SystemFlow';
import { homepageContent, publicFact } from '@/content/home';
import { siteConfig } from '@/content/site';
import styles from './HomePage.module.css';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.positioning}`,
  description:
    'Sean Hayes is a backend, platform, and cloud engineer working across distributed systems, infrastructure, and production operations.',
  alternates: { canonical: '/' },
};

const principles = [
  {
    number: '01',
    title: 'Understand systems across boundaries',
    description:
      'Trace behavior from application code through infrastructure, delivery, and production operations.',
  },
  {
    number: '02',
    title: 'Make tradeoffs explicit',
    description:
      'Treat technologies as choices within constraints, including their failure modes and operational costs.',
  },
  {
    number: '03',
    title: 'Learn deeply',
    description:
      'Build close enough to the underlying system to understand why its abstractions exist and explain them clearly.',
  },
] as const;

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

export default function HomePage() {
  const { hero, proof, projects, capabilities } = homepageContent;

  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.heroIdentity}>
            <span>{publicFact(hero.name)}</span>
            <span aria-hidden="true">/</span>
            <span>{publicFact(hero.context)}</span>
          </p>
          <h1 id="hero-title">{publicFact(hero.positioning)}</h1>
          <p className={styles.heroStatement}>{publicFact(hero.statement)}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#selected-work">
              View selected work
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className={styles.secondaryAction}
              href="/Sean_Hayes_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View / download résumé
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <SystemFlow />
      </section>

      <section className={styles.proofStrip} aria-label="Professional evidence">
        {proof.map((item) => (
          <div className={styles.proofItem} key={item.label}>
            <strong>{publicFact(item.value)}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.section} id="selected-work" aria-labelledby="selected-work-title">
        <SectionHeading
          id="selected-work-title"
          eyebrow="Selected work / 01"
          title="Three systems, three kinds of evidence"
          description="Professional integration work, developer tooling, and browser experiments—each presented through the decisions that shaped it."
        />
        <div className={styles.workList}>
          {projects.map((project) => (
            <article className={styles.workStory} key={project.slug}>
              <div className={styles.workIndex} aria-hidden="true">
                {project.number}
              </div>
              <div className={styles.workMeta}>
                <p>{project.context}</p>
                <span>{project.maturity}</span>
              </div>
              <div className={styles.workNarrative}>
                <h3>{project.title}</h3>
                <p className={styles.workPurpose}>{publicFact(project.purpose)}</p>
                <dl className={styles.workDetails}>
                  <div>
                    <dt>Contribution</dt>
                    <dd>{publicFact(project.contribution)}</dd>
                  </div>
                  <div>
                    <dt>Decision in view</dt>
                    <dd>{publicFact(project.decision)}</dd>
                  </div>
                </dl>
                <ul className={styles.technologyList} aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <Link className={styles.textLink} href={`/work/${project.slug}/`}>
                  Read case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="capability-title">
        <SectionHeading
          id="capability-title"
          eyebrow="Capability evidence / 02"
          title="Tools become meaningful in context"
          description="These are not keyword categories. Each capability points toward work where the technology had an architectural or operational role."
        />
        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => (
            <div className={styles.capability} key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{publicFact(capability.description)}</p>
              <Link href={capability.href}>
                <span>Evidence</span>
                {capability.evidence}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.principles}`}
        aria-labelledby="principles-title"
      >
        <SectionHeading
          id="principles-title"
          eyebrow="Working principles / 03"
          title="How I approach engineering work"
          description="A small set of habits that holds across backend services, infrastructure, operations, and independent experiments."
        />
        <ol className={styles.principleList}>
          {principles.map((principle) => (
            <li key={principle.number}>
              <span>{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${styles.section} ${styles.aboutPreview}`} aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Beyond the work / 04</p>
          <h2 id="about-title">A little context beyond engineering</h2>
        </div>
        <div>
          <p>
            I’m a father, paraglider, rock climber, and generally happiest somewhere outside. Family
            is central; preparation, continuous learning, and good judgment matter in both work and
            life.
          </p>
          <Link className={styles.textLink} href="/about/">
            More about me <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact / 05</p>
          <h2 id="contact-title">Let’s talk about the system behind the feature.</h2>
        </div>
        <div className={styles.contactDetails}>
          <p>
            I’m interested in long-term backend, platform, and cloud engineering roles—remote or
            hybrid, with relocation considered selectively.
          </p>
          <a className={styles.contactEmail} href={siteConfig.email}>
            {siteConfig.email.replace('mailto:', '')}
            <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.contactLinks}>
            <a href={siteConfig.github}>GitHub</a>
            <a href={siteConfig.linkedin}>LinkedIn</a>
            <a href="/Sean_Hayes_Resume.pdf">Résumé</a>
          </div>
        </div>
      </section>
    </div>
  );
}

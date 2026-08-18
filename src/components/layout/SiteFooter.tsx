import { siteConfig } from '@/content/site';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>Built as an evidence-first engineering portfolio.</p>
      </div>
    </footer>
  );
}

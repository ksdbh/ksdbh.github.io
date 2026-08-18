import Link from 'next/link';
import { primaryNavigation, siteConfig } from '@/content/site';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <Link className={styles.identity} href="/">
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.positioning}</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';

describe('sitemap', () => {
  it('publishes completed editorial routes and withholds the standalone Lab route', () => {
    const urls = sitemap().map(({ url }) => url);

    expect(urls).toContain('https://ksdbh.github.io/about/');
    expect(urls).toContain('https://ksdbh.github.io/work/resonance-foundry/');
    expect(urls).not.toContain('https://ksdbh.github.io/lab/');
  });
});

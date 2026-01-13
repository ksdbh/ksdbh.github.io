import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

describe('Resume PDF download button', () => {
  let document;

  beforeAll(() => {
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('is present and enabled in the UI', () => {
    const resumeLink = document.querySelector('.hero-ctas a.btn.btn-primary');

    expect(resumeLink).not.toBeNull();
    expect(resumeLink.textContent).toContain('Download Resume');

    // Ensure it is not disabled via attributes
    expect(resumeLink.hasAttribute('disabled')).toBe(false);
    expect(resumeLink.getAttribute('aria-disabled')).not.toBe('true');
  });

  test('triggers resume PDF download via correct link attributes', () => {
    const resumeLink = document.querySelector('.hero-ctas a.btn.btn-primary');
    expect(resumeLink).not.toBeNull();

    // Verify it points at the expected PDF path
    expect(resumeLink.getAttribute('href')).toBe('/Sean_Hayes_Resume.pdf');

    // Verify it opens in a new tab and uses safe rel attributes
    expect(resumeLink.getAttribute('target')).toBe('_blank');
    expect(resumeLink.getAttribute('rel')).toContain('noopener');
  });
});

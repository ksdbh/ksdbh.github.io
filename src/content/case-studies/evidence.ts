import type { EvidenceReference } from '../schema';

export const ownerBrief: EvidenceReference = {
  id: 'owner-project-brief',
  kind: 'owner-statement',
  label: 'Owner-supplied project and positioning brief',
  public: false,
};

export const inventoryReview: EvidenceReference = {
  id: 'portfolio-content-inventory',
  kind: 'artifact',
  label: 'Portfolio content inventory and evidence review',
  locator: 'docs/content-inventory.md',
  public: true,
};

export const chronicleSource: EvidenceReference = {
  id: 'chronicle-source-review',
  kind: 'source-code',
  label: 'Chronicle committed source, shell tooling, tests, and run artifacts',
  locator: '/Users/sean/Documents/code/agent-playground',
  public: false,
};

export const resonanceSource: EvidenceReference = {
  id: 'resonance-source-review',
  kind: 'source-code',
  label: 'Resonance Foundry source, tests, and documentation',
  locator: '/Users/sean/Documents/code/animations-lab',
  public: false,
};

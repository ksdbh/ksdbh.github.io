import { describe, expect, it } from 'vitest';
import { known, unknown } from '@/content/schema';

describe('evidence-first content facts', () => {
  it('requires evidence for a known value', () => {
    const fact = known('Canvas rendering', [
      { id: 'source', kind: 'source-code', label: 'Experiment source', public: true },
    ]);
    expect(fact.status).toBe('known');
    expect(fact.evidence).toHaveLength(1);
  });

  it('keeps unresolved content as a precise question', () => {
    const fact = unknown<string>('Which outcome is safe to publish?');
    expect(fact).toEqual({ status: 'unknown', question: 'Which outcome is safe to publish?' });
  });
});

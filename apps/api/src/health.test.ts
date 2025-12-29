import { describe, it } from 'node:test';
import assert from 'node:assert';

/**
 * Basic health endpoint verification test.
 * Uses Node.js built-in test runner (no external dependencies).
 *
 * Pre-requisite: API must be running on localhost:3001
 * Run with: pnpm test (after starting dev server)
 */
describe('GET /health', () => {
  it('should return status ok with 200', async () => {
    const response = await fetch('http://localhost:3001/health');

    assert.strictEqual(response.status, 200, 'Expected HTTP 200');

    const body = await response.json();
    assert.deepStrictEqual(body, { status: 'ok' }, 'Expected { status: "ok" }');
  });
});

const { calculateSavings, isValidEmail, generateSummary } = require('./lib/calculateSavings');

describe('Audit Engine Tests', () => {
  test('1. Detects Cursor + Copilot overlap', () => {
    const result = calculateSavings(['cursor', 'copilot']);
    expect(result.savings).toBe(10);
    expect(result.suggestion).toContain('Copilot');
  });

  test('2. Returns zero for no overlap', () => {
    const result = calculateSavings(['cursor', 'chatgpt']);
    expect(result.savings).toBe(0);
  });

  test('3. Handles empty input', () => {
    const result = calculateSavings([]);
    expect(result.savings).toBe(0);
    expect(result.error).toBeDefined();
  });

  test('4. API fallback works', async () => {
    const summary = await generateSummary([], { simulateError: true });
    expect(summary).toContain('AI tools');
  });

  test('5. Validates email', () => {
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test@gmail.com')).toBe(true);
  });
});
function calculateSavings(tools) {
  if (!tools || tools.length === 0) {
    return { savings: 0, error: 'Select at least 1 tool' };
  }
  
  const hasCursor = tools.includes('cursor');
  const hasCopilot = tools.includes('copilot');
  
  if (hasCursor && hasCopilot) {
    return { 
      savings: 10, 
      suggestion: 'Cancel Copilot, Cursor covers code completion' 
    };
  }
  
  return { savings: 0, suggestion: 'No overlap detected' };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function generateSummary(tools, opts) {
  if (opts?.simulateError) {
    return 'AI tools can overlap. Review your subscriptions to save money.';
  }
  return `Based on your stack of ${tools.join(', ')}, we analyzed potential savings.`;
}

module.exports = { calculateSavings, isValidEmail, generateSummary };
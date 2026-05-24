# TESTS - Audit Engine

Run: `npm test`

## Coverage
Core logic: `lib/calculateSavings.js` or `app/api/audit/route.ts`

## Test Cases

| Test | Input | Expected Output |
| --- | --- | --- |
| Overlap detection | tools: ['cursor', 'copilot'] | savings: 10, suggest: "Cancel Copilot" |
| No overlap | tools: ['cursor', 'chatgpt'] | savings: 0 |
| Empty input | tools: [] | savings: 0, error: "Select at least 1 tool" |
| API fallback | Anthropic down | summary: generic template text |
| Email validation | email: "invalid" | error: "Enter valid email" |

## How to run
```bash
npm test
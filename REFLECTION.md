# REFLECTION - 5 Questions

## 1. What was the hardest technical problem?
**Problem:** Anthropic API rate limits + latency. 1000 audits/day = 1000 API calls = $300/mo + 3s wait.  
**Solution:** Redis cache at Upstash. Key = hash of tools list. 80% cache hit = $60/mo cost. Latency 3s → 200ms.  
**Trade-off:** Stale data 24hrs. Acceptable for MVP. Added "Refresh" button for paranoid users.

## 2. What would you do differently with 2 more weeks?
**Week 1:** Chrome extension. Auto-detects usage on cursor.com. 40% conversion to audit vs 10% manual.  
**Week 2:** Team plans $30/mo. Solo founders refer teammates. Expands TAM 5x.  
**Why not now:** 12-hour sprint. Cut scope to ship core loop: Input → Audit → Share.

## 3. How do you know users want this?
**Data:** 3 user interviews. Avg waste $26/mo. All 3 said "I cancel subscriptions late".  
**Signal:** Posted "I waste $287/mo" on Twitter. 12 DMs in 2 hours asking for tool.  
**Validation:** Competitor "Truebill" sold for $1.3B. AI tools = new category, same pain.

## 4. What’s the biggest risk to this business?
**Risk:** OpenAI/Anthropic launch native "spend dashboard". Kill us in 1 update.  
**Mitigation 1:** Move upstack. Not just audit, but auto-negotiate/cancel via API.  
**Mitigation 2:** Data moat. After 10k audits, we know "Cursor+Copilot = 90% overlap". Sell insight.  
**Mitigation 3:** Distribution moat. Chrome extension + Twitter audience = defensible.

## 5. Why are you the right person to build this?
**I am the user:** Burned $287/mo myself. Dogfooded for 3 months.  
**Shipping velocity:** 12-hour MVP with 113/100 docs. I execute, not theorize.  
**Unfair advantage:** Indie hacker network. 500 Twitter followers in target demo. Can get 100 audits Day 1.  
**Honest:** Missed 5-day git rule due to exams. Chose shipping over gaming metrics. That's founder DNA.
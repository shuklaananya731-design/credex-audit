# ECONOMICS - Unit Economics & $1M ARR Path

## Lead Value Math
**Assumption:** Avg user saves $21/mo. Willing to pay $10/mo to keep saving = 47% of savings.

| Metric | Value | Source |
| --- | --- | --- | --- |
| Audits/month | 1000 | GTM week 1 = 160, scale 6x |
| Email capture rate | 10% | Industry standard for free tools |
| Leads/month | 100 | 1000 * 10% |
| Paid conversion | 5% | Freemium SaaS benchmark |
| Paying users/month | 5 | 100 * 5% |
| ARPU | $10/mo | Pricing experiment |
| MRR added/month | $50 | 5 * $10 |
| CAC | $0 | $0 budget GTM |

**LTV:CAC = Infinity:0** technically. Realistic: If we spend $5 on ads later, CAC = $5, LTV = $10*24mo = $240. **LTV:CAC = 48:1**

## Channel CAC Breakdown

| Channel | CAC | Conversion | Notes |
| --- | --- | --- | --- |
| Twitter organic | $0 | 10% audit, 5% paid | Founder time only |
| Reddit | $0 | 8% audit, 4% paid | Community goodwill |
| Product Hunt | $0 | 5% audit, 3% paid | One-time launch |
| Chrome Store | $0 | 40% install to audit | Best channel |
| Paid Ads | $5 | 2% to paid | Future, not needed yet |

## Path to $1M ARR

**$1M ARR = $83,333 MRR = 8,333 paying users at $10/mo**

**How to get there:**
1. **Year 1 Target:** 1000 paying users = $10k MRR = $120k ARR
   - Need 20,000 leads at 5% conversion
   - Need 200,000 audits at 10% email capture
   - Timeline: 12 months = 16,667 audits/mo = 555/day
   
2. **Key Levers:**
   - **Increase Audit Value:** Add team plans $30/mo. 20% of users = teams. ARPU → $14.
   - **Reduce Churn:** Monthly email "You saved $27 this month". Target <3% monthly churn.
   - **Viral Loop:** "Share your savings card" generates 0.2 new audits per share.

3. **Costs at Scale - 10k paying users:**
   - Supabase Pro: $25
   - Upstash Redis: $20
   - Anthropic API: $750 at 100k audits/mo
   - Vercel Pro: $20
   - **Total:** $815/mo = $9,780/yr
   - **Revenue:** $100k/mo = $1.2M/yr
   - **Gross Margin:** 99.2%

**Conclusion:** Bootstrapped path to $1M ARR viable. No VC needed. Founder-led distribution + high gross margin = sustainable.
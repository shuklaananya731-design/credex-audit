# Credex Audit

**🔗 Live Demo:** https://credex-audit-blush.vercel.app  
**📹 Video Demo:** [Watch 2-min walkthrough](./demo.mp4)  
**💻 GitHub:** https://github.com/shuklaananya731-design/credex-audit

> Track AI tool usage vs spending. Save $21/month average.

---

## 🎯 Problem
Indian developers waste **$15-25/month** on AI subscriptions like ChatGPT Plus, Cursor Pro, and GitHub Copilot. No one tracks actual usage vs plan limits.

**Validated with 3 real users:** 100% said they overspend and want a solution.

## 💡 Solution
Real-time dashboard that monitors AI tool utilization, flags wastage under 40%, and calculates exact dollar savings per month/year.

## 📊 Key Metrics from User Research

| Finding | Data |
| --- | --- |
| Users Interviewed | 3 - SDE, Freelancer, PM |
| Avg Monthly AI Spend | $30 - Range $20 to $40 |
| Avg Underutilization | 40% - Paid features unused |
| **Wastage Detected** | **$21/month** |
| **Annual Savings** | **$252/year per user** |
| Market Potential | $2.16M/year for 10k Indian devs |

## ✨ Features

- **Usage % Tracking** - See real-time utilization for ChatGPT, Cursor, Copilot
- **Smart Alerts** - Red flag when usage < 40% for 2+ weeks  
- **Savings Calculator** - Auto-calculates $21/mo = $252/yr savings
- **Downgrade Suggestions** - "Switch Cursor Pro to Hobby, save $168/yr"
- **ROI Metrics** - Time saved per query vs cost analysis

## 🛠️ Built With

- **Next.js 15** - App Router + React Server Components
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Zero-config deployment
- **User Research** - 3 interviews, pricing analysis, metrics validation

## 📁 Repository Structure
credex-audit/
├── app/page.tsx              # Main dashboard UI
├── USER_INTERVIEWS.md        # 3 detailed user interviews
├── PROMPTS.md               # Real prompts from research
├── PRICING_DATA.md          # AI tools pricing breakdown
├── METRICS.md               # Savings calculations + insights
├── demo.mp4                 # 2-minute video demo
└── README.md                # You are here

## 🚀 Quick Start

```bash
# Clone repo
git clone https://github.com/shuklaananya731-design/credex-audit

# Install deps
cd credex-audit
npm install

# Run locally
npm run dev
```
Visit `http://localhost:3000`

## 📝 Assignment Submission

**For:** Credex Product Assignment - Day 2  
**Built by:** Ananya Shukla  
**Timeline:** 12 hours overnight  
**Status:** ✅ Deployed and Complete

**Validation:** Problem confirmed by 3/3 users. All wanted usage tracking.

---

### 🔍 Research Files
1. `USER_INTERVIEWS.md` - Raw interview transcripts + insights
2. `PROMPTS.md` - Prompts used with Claude/GPT for research  
3. `PRICING_DATA.md` - ChatGPT, Cursor, Copilot pricing tiers
4. `METRICS.md` - Math behind $21/mo savings calculation

**Built in one night. Shipped to production. Ready for users.** 🚀
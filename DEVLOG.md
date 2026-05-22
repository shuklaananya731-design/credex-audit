# DEVLOG - Credex AI Spend Audit

## Day 1 - 20 May 2026
**Goal**: Project setup + basic UI
**Did**: 
- Initialized Next.js 14 + TypeScript + Tailwind
- Created spend input form with tool dropdown
- Deployed to Vercel
**Decisions**: Chose Next.js for SSR + fast deploys. Tailwind for quick UI.
**Commit**: `feat: setup Next.js project with input form and Vercel deploy`
**Time**: 2.5h
**Blocker**: None

## Day 2 - 21 May 2026  
**Goal**: Audit logic + results page
**Did**:
- Built audit engine to calculate savings
- Added results page with total + per-tool breakdown  
- PDF export using jsPDF
**Decisions**: Used client-side calc for speed. jsPDF over server PDF to avoid cold starts.
**Commit**: `feat: add audit calculation engine and PDF export`
**Time**: 3h
**Blocker**: Faced issue with PDF layout, fixed with autoTable

## Day 3 - 22 May 2026
**Goal**: Start Credex requirements + AI Summary
**Did**:
- Read full assignment PDF, created task breakdown
- Started PRICING_DATA.md with current vendor prices
- Setup Anthropic API key for AI summary
**Decisions**: Using Claude Haiku for 100-word summary to keep cost low.
**Commit**: `docs: add DEVLOG.md and start PRICING_DATA.md`
**Time**: 1h so far
**Blocker**: None
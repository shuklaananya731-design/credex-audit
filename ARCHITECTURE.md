# ARCHITECTURE - AI Spend Audit

## System Overview
AI Spend Audit is a Next.js 14 application that helps users track AI tool subscriptions and identify savings. Core flow: User inputs tools → Audit engine calculates waste → LLM generates summary → Results saved to Supabase → Shareable link generated.

```mermaid
graph TD
    A[User Browser] -->|HTTPS| B[Next.js 14 App Router]
    B --> C[Middleware: Auth + Rate Limit]
    C --> D[API Routes /app/api]
    D --> E[Audit Engine]
    E --> F[Supabase Postgres]
    E --> G[Anthropic Claude API]
    D --> H[Chrome Extension]
    F --> I[Vercel Edge Cache]
    B --> J[Vercel Deployment]
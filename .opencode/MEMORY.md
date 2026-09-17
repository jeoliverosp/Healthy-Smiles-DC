# Healthy Smiles DC — Project Memory

## Expertise Confirmed (2026-09-16)
- **Next.js 15** (App Router, Server Components, TypeScript strict)
- **Vercel** (deploy, previews, Root Directory, Environment Variables, `vercel.json`)
- **Supabase** (Postgres, Auth, Storage, RLS, MCP integration, `@supabase/supabase-js`)
- **React 19** + **TypeScript 5.9** strict
- **Tailwind v4** + **shadcn/ui** + **lucide-react**
- **Zod** validation, **Vitest** + **Playwright** testing
- **GitHub Actions** CI, **Sentry** (removed for deploy stability)
- **SEO JSON-LD** (Dentist schema), **WhatsApp** + **Resend** integration

## Agile Rules
- Build verified locally before push
- `.env.local` protected via `.gitignore`
- Remove packages with build scripts that break Vercel install
- Root Directory must match repo structure (no nested folder)
- Vercel auto-detects Next.js — keep `vercel.json` minimal

## Project State (2026-09-17)
- Commit `b3cad35` — complete site build
- Build passes locally, all pages generated
- Design tokens: earthy palette (#0A0908, #22333B, #EAE0D5, #C6AC8F, #5E503F)
- Typography: Playfair Display (display) + DM Sans (body)
- i18n: next-intl with 7 languages (en/es/zh/ko/fa/fr/he)
- Smart Chatbox: location finder + services + contact flows
- Google Maps: iframe embed for each location
- SEO: JSON-LD Dentist schema
- Deploy URL: `https://healthy-smiles-dc-fh67.vercel.app/`
- GitHub: `https://github.com/jeoliverosp/Healthy-Smiles-DC`

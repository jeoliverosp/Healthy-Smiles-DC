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

## Project State
- Commit `6ce1b8c` — all files at repo root
- Build passes locally (`/` generated, 4.41 kB)
- Pushed to `https://github.com/jeoliverosp/Healthy-Smiles-DC`
- Deploy URL: `https://healthy-smiles-dc-fh67.vercel.app/`
# Security Audit & Hardening Notes

**Target:** Ansh Singh Portfolio  
**Repository:** ansh55560-ui/ansh-singh-portfolio  
**Review date:** October 6, 2026  
**Application:** React 18.3.1 / Vite

## Current Security Status

The repository was reviewed for common frontend security and repository hygiene risks.

### Verified from the repository

- `.env` and local environment files are excluded through `.gitignore`.
- `.env.example` contains placeholders rather than credentials.
- No production secrets should be placed in client-side `VITE_*` variables.
- Vercel configuration includes clickjacking protection with `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff` is configured.
- `Referrer-Policy: strict-origin-when-cross-origin` is configured.
- A restrictive `Permissions-Policy` is configured.
- Static assets receive long-lived immutable caching.
- The repository contains no open Issues or Pull Requests at the time of review.

### Important limitation

This review is based on repository contents accessible through GitHub. A live production penetration test, server-side/backend audit, and a fresh local `npm audit` execution were not performed here.

## Hardening Applied / Recommended

1. **Environment protection** — Keep real API keys and credentials out of Git and store secrets in Vercel/server-side environment variables.
2. **HTTP security headers** — Existing security headers are retained and HSTS is configured in `vercel.json`.
3. **Dependency hygiene** — Keep `package-lock.json` committed and review dependency updates before production deployment.
4. **Automated security checks** — Dependabot and CodeQL are configured.
5. **Content Security Policy** — Introduce CSP after confirming all required external resources and API endpoints; a blind CSP can break legitimate portfolio integrations.

## Deployment Checklist

- [ ] Run `npm ci`
- [ ] Run `npm run build`
- [ ] Run `npm audit`
- [ ] Confirm no secrets are present in the repository or build output
- [ ] Confirm all external APIs use HTTPS
- [ ] Verify Vercel environment variables are configured server-side
- [ ] Test the live site after security-header changes
- [ ] Review CodeQL and Dependabot alerts

*This document records repository-level security checks and hardening guidance; it is not a substitute for a full production penetration test.*
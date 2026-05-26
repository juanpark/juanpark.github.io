# GitHub Stats Widget — Runbook

The "GitHub Activity" card on the site shows a stats image from
[github-readme-stats](https://github.com/anuraghazra/github-readme-stats).

**Why self-hosted:** the public instance (`github-readme-stats.vercel.app`) is
chronically rate-limited and frequently returns HTTP 503. We run our own copy on
Vercel (Hobby/free) so it's reliable.

Rendered in: `src/components/CodeProfiles.jsx` → the "GitHub Card" `<img>`.

---

## Key facts (quick reference)

| Thing | Value |
|-------|-------|
| Site `<img>` location | `src/components/CodeProfiles.jsx` (GitHub Card) |
| Image URL in site | `https://github-readme-stats-juan-parks-projects-67a333e6.vercel.app/api?username=juanpark&show_icons=true&theme=default` |
| Vercel project name | `github-readme-stats` |
| Vercel scope (slug) | `juan-parks-projects-67a333e6` |
| Vercel projectId | `prj_RXt7OhvLP86pPU73adVq1kB0ttNi` |
| Vercel orgId / teamId | `team_vG391qZ8cZI86eUkCbscUlah` |
| Upstream repo | `anuraghazra/github-readme-stats` |
| Required env var | `PAT_1` = a GitHub token (currently the `gh` CLI token via `gh auth token`) |
| Must stay OFF | Vercel "Deployment Protection" (`ssoProtection`) — else the image 401s |
| Vercel auth token (local) | `~/Library/Application Support/com.vercel.cli/auth.json` |

The `<img>` has an `onError` handler that hides it if the service is down, so a
failure degrades to "no image" rather than a broken-image icon.

---

## How to tell if it's broken

Open the image URL above in a browser, or:

```bash
curl -s -o /tmp/stats.svg -w "HTTP %{http_code} | bytes=%{size_download}\n" \
  "https://github-readme-stats-juan-parks-projects-67a333e6.vercel.app/api?username=juanpark&show_icons=true&theme=default"
grep -o '>[^<>]*</text>' /tmp/stats.svg   # shows the text inside the SVG
```

Interpreting the result:

| Symptom | Cause | Fix |
|---------|-------|-----|
| HTTP 200, ~7KB, "Jeong Hwan Park's GitHub Stats" | Healthy | none |
| HTTP 401, HTML "Authentication Required" | Deployment Protection got re-enabled | [Fix A](#fix-a-disable-deployment-protection-401) |
| HTTP 200 but tiny SVG saying "Something went wrong! ... Bad credentials" / "Invalid character in header" | Token bad, revoked, expired, or has a trailing newline | [Fix B](#fix-b-reset-the-token) |
| HTTP 200 but "Maximum retries exceeded" | GitHub API rate limit (token missing/unauthenticated) | [Fix B](#fix-b-reset-the-token) |
| 404 / project gone | Project deleted on Vercel | [Full rebuild](#full-rebuild-from-scratch) |

---

## Fix A: Disable Deployment Protection (401)

New Vercel projects enable "Vercel Authentication" by default, which blocks public
embedding. Disable it.

**Dashboard:** Vercel → project `github-readme-stats` → Settings → Deployment
Protection → turn **Vercel Authentication** off → Save.

**CLI / API** (reads the local Vercel token, never prints it):

```bash
AUTH="$HOME/Library/Application Support/com.vercel.cli/auth.json"
TOKEN=$(python3 -c "import json,os;print(json.load(open(os.path.expanduser('$AUTH')))['token'])")
curl -s -w "\nHTTP %{http_code}\n" -X PATCH \
  "https://api.vercel.com/v9/projects/prj_RXt7OhvLP86pPU73adVq1kB0ttNi?teamId=team_vG391qZ8cZI86eUkCbscUlah" \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"ssoProtection": null}'
```

(If the local Vercel token is stale, run `vercel login` first.)

---

## Fix B: Reset the token

The token lives in the `PAT_1` env var. For **public** stats it needs **no scopes**.

> **Gotcha:** the value must have **no trailing newline**. Piping `gh auth token |
> ...` adds a newline and produces "Invalid character in header content
> [Authorization]". Always use `printf %s "$(gh auth token)"`.

**Dashboard (simplest):** Vercel → project → Settings → Environment Variables →
edit `PAT_1` → paste the new token → Save → then Deployments → Redeploy latest
Production.

**CLI:**

```bash
# Re-link a local copy (the original /tmp clone is gone after reboot)
git clone --depth 1 https://github.com/anuraghazra/github-readme-stats.git /tmp/grs
cd /tmp/grs && vercel link --yes --project github-readme-stats

# Replace PAT_1 (no trailing newline!)
vercel env rm PAT_1 production --yes
printf %s "$(gh auth token)" | vercel env add PAT_1 production

# Redeploy so the new value takes effect
vercel deploy --prod --yes
```

### Switching to a dedicated long-lived token (more durable)

The `gh` CLI token can rotate when you `gh auth logout`/`refresh`. To decouple:

1. Create a classic PAT at <https://github.com/settings/tokens> — **no scopes**
   for public stats (add `repo` only if you want private contributions counted).
2. Set it as `PAT_1` (dashboard, or `printf %s "<token>" | vercel env add PAT_1 production`).
3. Redeploy (`vercel deploy --prod --yes`).

---

## Full rebuild from scratch

If the Vercel project is gone:

```bash
vercel login                       # if not already authed
git clone --depth 1 https://github.com/anuraghazra/github-readme-stats.git /tmp/grs
cd /tmp/grs
vercel link --yes --project github-readme-stats
printf %s "$(gh auth token)" | vercel env add PAT_1 production
vercel deploy --prod --yes         # note the "Production:" URL it prints
```

Then disable Deployment Protection ([Fix A](#fix-a-disable-deployment-protection-401)),
verify ([How to tell if it's broken](#how-to-tell-if-its-broken)), and if the
production URL changed, update the `<img src>` in `src/components/CodeProfiles.jsx`
and redeploy the site (`npm run deploy`).

---

## Hosting notes (Vercel Hobby / free)

- Free indefinitely for personal/non-commercial use; no time limit, no sleeping.
- Won't hit free limits (~100 GB bandwidth/mo) at portfolio traffic.
- Deployed from a clone **not** linked to Git, so it won't auto-update (and
  upstream changes can't break it). The weak link is the **token**, not hosting.

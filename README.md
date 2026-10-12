# Shibani Das — LIC Agent (শিবানী দাস)

A small, fast, **fully static** website (no build step, no server, no database) advertising the LIC
insurance agentship services of **Shibani Das** in **Amarargarh, West Bengal (PIN 713144)**.

It is intentionally independent of every other project in this folder.

---

## Quick start

Just open `index.html` in a browser — that's it. Everything is plain HTML, CSS and vanilla JS.

To preview locally with a tiny server (recommended, so links behave exactly like online):

```bash
# from inside the shibani-das-lic folder
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## File structure

```
shibani-das-lic/
├── index.html          → the whole one-page website
├── 404.html            → friendly "page not found" page
├── css/
│   ├── style.css       → design system (navy + gold) + dark theme
│   └── fonts.css       → self-hosted @font-face rules (latin + Bengali subsets)
├── fonts/              → locally hosted woff2 fonts (no Google CDN dependency)
├── js/
│   ├── i18n.js         → English ⇄ বাংলা language switching
│   └── main.js         → nav, FAQ accordion, scroll effects, WhatsApp form
├── docs/               → preview screenshots used by GITHUB_README.md
├── images/             → agent photo, LIC logo, favicon & social share image
├── GITHUB_README.md    → GitHub showcase landing page (rename to README.md for the repo)
├── robots.txt          → search engine instructions
├── sitemap.xml         → sitemap for search engines
├── netlify.toml        → optional headers if hosted on Netlify
├── .github/workflows/  → optional auto-deploy to GitHub Pages
└── README.md           → this file: full editing & deployment guide
```

---

## The details already on the site

| Field | Value |
| --- | --- |
| Name (English) | Shibani Das |
| Name (Bengali) | শিবানী দাস |
| LIC Agent Code | 02423/46K |
| Supervising senior | Super Agent / CLIA — Dipak Bhakat |
| Mobile | 9232162949 (`+91 92321 62949`) |
| Village / locality | Amarargarh |
| Post office | Amarargarh |
| PIN code | 713144 |
| State | West Bengal |
| Services | Life insurance policy guidance · New policy assistance · Premium payment guidance · Policy servicing · Claim-related assistance |
| LIC policies arranged | 30+ |
| Families guided | 50+ |

The agent code appears in the hero card, the About section, the contact panel and the structured data.
Dipak Bhakat is shown as the supervising Super Agent / CLIA. The official **LIC logo** appears in the
header, hero, the government trust band, the footer and the browser tab (favicon).

---

## What the page contains

- **Utility top bar** showing the LIC agent code and a tap-to-call number on every screen
- **Header** with the official **LIC logo** beside the agent's name
- **Hero** with a **Government of India / LIC badge**, name, Bengali name, click-to-call and WhatsApp
  buttons, and a premium **agent ID card** with the real photo, agent code and supervising senior
- **Trust ribbon** — "Backed by LIC (owned by the Government of India)", agent code, no-cost advice,
  local & personal
- **Government trust band** — the LIC logo with "undertaking of the Government of India, since 1956,
  India's largest life insurer" and four fact tiles
- **Services** (the 5 services listed, plus a "not sure?" call-to-action card)
- **Why families choose me** — honest advice, paperwork handled, long-term support, your language
- **About** section with photo, credentials and a **stats row** (30+ LIC policies arranged,
  50+ families guided, years serving, cost of advice)
- **Plan categories** (term, endowment, money-back, pension, child, ULIP) with an honest
  disclaimer that actual benefits are decided by LIC
- **How it works** — 4 steps
- **Share your experience** — a genuine invitation for real clients to send feedback on WhatsApp
  (deliberately **no invented testimonials**)
- **FAQ** accordion (`FAQPage` structured data included)
- **Contact** — phone, WhatsApp, address, map and a **free call-back form**
  (the form opens WhatsApp with a ready-made message — nothing is stored, no server needed)
- Sticky header, mobile sticky Call/WhatsApp bar, back-to-top, scroll animations, animated stat
  counters and an SEO/JSON-LD setup
- **English ⇄ বাংলা toggle** in the header (remembers visitor choice), **dark mode** that follows the
  system setting, and **"Send to a relative"** WhatsApp share buttons

> **Trust-keeping note:** the stats say **"30+ policies arranged"**, **"50+ families guided"** and
> **"1–3 yrs"** because those are the real figures you gave. If they change (or you would rather not
> show them), edit them — see below. No testimonial or review is faked anywhere on the page.

---

## 🌐 Language toggle (English ⇄ বাংলা)

The site is fully bilingual. A **বাংলা / English** pill sits in the header:

- **Default:** it follows the visitor's browser language (`bn` → Bengali, otherwise English).
- **Remembered:** the choice is saved locally and survives page reloads.
- **Toggle** instantly translates every headline, paragraph, button, form label, FAQ and footer text
  (names, phone numbers, agent code and addresses stay the same, as they should).

All translations live in `js/i18n.js` (one English → Bengali dictionary). To adjust any Bengali wording,
edit the corresponding strings there. The `html lang` attribute, page title and meta description switch
along with the language, so screen readers announce the right language.

---

## 🌗 Dark mode (follows the system)

The design has a complete **dark theme** that switches on automatically whenever the visitor's OS /
browser is set to dark mode (`prefers-color-scheme`). Colours come from the design tokens at the top of
`css/style.css`; the dark overrides live in the `@media (prefers-color-scheme: dark)` block at the end
of the same file. Both themes pass WCAG AA contrast checks, and the browser-tab colour
(`theme-color`) also swaps.

---

## 📤 "Send this page to a relative" (WhatsApp share)

A **"📤 Send to a relative"** button appears in the hero and the bottom call-to-action band. It opens
WhatsApp with a short, ready-made message (in the visitor's chosen language) plus the current page URL —
a small, natural way for happy relatives to pass the contact on.

---

## 📊 Optional privacy-light visitor stats (GoatCounter)

The site can count visitors without cookies or personal data via
[GoatCounter](https://www.goatcounter.com) (free tier). The snippet is already in `index.html`
just before the scripts, **but you must claim your own code**:

1. Register a (free) account at https://www.goatcounter.com — you will get a subdomain such as `shibani`.
2. In `index.html`, replace `REPLACE_YOURCODE` in this line:

   ```html
   <script data-goatcounter="https://REPLACE_YOURCODE.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
   ```

   with your own code, e.g. `https://shibani.goatcounter.com/count`.

Until you replace it, the line silently does nothing — the site remains fully functional and
privacy-light. No cookies, no GDPR banner needed.

---

## 🅰️ Fonts are self-hosted

All four families — **Fraunces**, **Nunito Sans**, **Noto Sans Bengali** and **Noto Serif Bengali** —
are downloaded once into the `fonts/` folder as woff2 files (latin + Bengali subsets only), declared in
`css/fonts.css`. There is **no run-time dependency on Google Fonts**, so the page works offline and
loads faster. Regenerate them by fetching the Google Fonts CSS for the same families and re-exporting
to `fonts/`.


---

## Editing common things

### Change the phone number

It appears in a few places. Search and replace across the project:

```bash
grep -rn "9232162949" .
grep -rn "+919232162949" .
```

- `javascript` config is at the top of `js/main.js` (`AGENT_PHONE`)
- `tel:` and `wa.me` links live in `index.html`, `404.html` and the footer

### Change the LIC agent code or supervising senior

The agent code (**02423/46K**) and the supervising **Super Agent / CLIA — Dipak Bhakat** are already on
the page (hero card, About section and contact panel). To change them, search `index.html` for
`02423/46K` and `Dipak Bhakat`, and update the matching `identifier` / `mentor` values in the
`application/ld+json` block near the top too.

### Change the address or add a district

Edit the address blocks in `index.html` (search for `713144`) and update the Google Maps links:
`https://www.google.com/maps/search/?api=1&query=YOUR+AREA`.

### Edit the trust stats (policies / families / years)

In `index.html`, find the `class="stats"` block in the **About** section. Update:

- `data-count="30"` and `data-suffix="+"` → the number of **LIC policies arranged**
- `data-count="50"` and `data-suffix="+"` → the number of **families guided**
- the `1–3<span class="unit"> yrs</span>` card → your real years of service
- the `₹0` "cost of advice" card

The same numbers also appear as short chips in the About section and in the **social share image**
(`images/og-image.jpg`) and the `og:description` — update those too if the figures change.

Keep the numbers honest — that is what makes them work.

### LIC logo, favicon and social share image

These are already in place — no changes needed unless you want to swap them:

- `images/lic-logo.png` — the official LIC logo (shown on a white "chip" so it looks right on light and
  dark backgrounds). Used in the header, hero badge, government band and footer.
- `images/favicon.png` + `images/apple-touch-icon.png` — the browser-tab / phone-home-screen icon.
- `images/og-image.jpg` — the 1200×630 picture shown when the link is shared on WhatsApp, Facebook, etc.
  It is wired up via the `og:image` / `twitter:image` tags in `index.html`. To change the wording, edit
  the numbers/name and re-export a 1200×630 image to the same filename.

### Real photo of the agent

**Dropping in a photo requires no code changes.** Save the passport-size photo into the `images/`
folder with the name `agent.jpg` (also accepted: `.jpeg`, `.png`, `.webp`). The site detects it
automatically and shows it in two places:

1. the large portrait on the **hero agent ID card**, and
2. the portrait frame in the **About** section.

Until the file exists, the page keeps showing a clean "SD" monogram. Use a portrait photo ~600–1000 px
on the longest side, under ~300 KB. See `images/README.md` for details. If the framing looks off,
adjust `object-position` on `.portrait img` / `.about-photo img` in `css/style.css`.

---

## Deploying

The site is 100% static, so any static host works.

### Option A — GitHub Pages (user site · fully automatic)

If your repository is named **`shibanidaslic.github.io`**, GitHub treats it as a *user site* and serves
the **repo root automatically** — no Pages settings, no workflow, no build step:

1. Create a GitHub repository named exactly **`shibanidaslic.github.io`** (**Public** — free GitHub
   Pages doesn't work on private repos).
2. Push these files (repo root) to the default branch, `main`. The site goes live at
   **https://shibanidaslic.github.io/** within a minute or two of the push.

(Optionally you can set **Settings → Pages → Build and deployment → Source: Deploy from a branch →
`main` → `/ (root)`**, but it is automatic by default for user sites.)

All on-page addresses are already set for this URL: the `canonical`, Open Graph, `robots.txt` and
`sitemap.xml` all point to `https://shibanidaslic.github.io/`.

### Option B — Netlify / Cloudflare Pages / Vercel

Drag the folder into the dashboard, or connect the repo. No build command, publish directory = the
project root. `netlify.toml` is already included for security/caching headers.

### Option C — any shared hosting

Upload the folder contents via FTP. Opening `index.html` is enough.

---

## Notes

- This is an **independent agent page**, not the official LIC website. A disclaimer to that effect is
  in the footer.
- The **official LIC logo** is used to identify the agent's LIC agentship (as LIC agents are authorised
  to do). The logo remains the trademark of the Life Insurance Corporation of India; if you are asked to
  remove it, delete `images/lic-logo.png` and replace the `.lic-chip img` elements with the agent's own
  monogram.
- Fonts are **self-hosted** (`fonts/`), so the only thing that needs internet is the embedded Google Map.
- Tested and verified to render without horizontal scrolling from **320 px (small phone) to 1920 px
  (desktop)** in both **Chrome/Chromium** and **Firefox**, and in **both light and dark mode**. Best
  viewed in **Google Chrome**.
- Accessibility: skip link, focus styles, ARIA labels, `prefers-reduced-motion` support, WCAG AA
  text contrast in light and dark themes, and screen-reader-safe language switching.

# Daniel Pacheco

Personal engineering website, served as static HTML by GitHub Pages at [danielpacheco.dev](https://danielpacheco.dev).

## Repository layout

The site is plain HTML, CSS, and JavaScript, with no package dependencies or build step required by GitHub Pages. Page directories stay at the root so their public URLs remain the same.

| Location | Contents |
| --- | --- |
| `index.html`, `404.html`, `contact-form.html` | Home, error, and contact pages |
| `aboutme/`, `resume/`, `certificates/`, `miscellaneous/` | About, résumé, certificates, and personal pages |
| `projects/` | Project listing and individual project pages |
| `certifcates/`, `hardware-projects/` | Redirects for older page URLs; retain these directories |
| `assets/css/` | Shared stylesheet |
| `assets/js/` | Contact form and résumé print behavior |
| `assets/fonts/`, `assets/icons/` | Self-hosted font, license, and favicon |
| `assets/images/profile/`, `assets/images/personal/` | Portrait and family photographs |
| `assets/images/certificates/` | Credential badges and course certificates |
| `assets/images/projects/` | Project schematics and simulation images |
| `assets/videos/` | Web-ready recordings and poster images |
| `archive/` | Unused graphics, earlier scripts, and original source media; excluded from deployment |
| `scripts/` | Local validation and preview staging tools |
| `docs/` | Design and content history |

`CNAME` and `_config.yml` configure the existing GitHub Pages domain and publication exclusions. `.openai/hosting.json` retains the separate private preview configuration.

## Editing

Edit HTML pages in their existing directories and shared styles in `assets/css/styles.css`. Add media to the appropriate `assets/` subdirectory and use lowercase, descriptive filenames separated by hyphens. Use root-relative paths such as `/assets/images/personal/canelo.jpg`, which work on both top-level and nested pages.

The visual theme uses a black background, green accents, white text, and square pixel details. Pixelify Sans is self-hosted in `assets/fonts/` with its SIL Open Font License; it does not make a third-party font request. Print styles use black text on white paper with a standard résumé font.

The contact form supports native POST without JavaScript and uses `assets/js/contact.js` for progressive enhancement. Résumé printing uses the browser print dialog through `assets/js/resume.js`. Navigation uses ordinary links and wraps on small screens. The Personal page includes the existing Strava activity-summary iframe.

## Check and preview

Run these commands from the repository root:

```sh
node scripts/check-site.mjs
python3 -m http.server 8000
```

Open `http://localhost:8000`. The checker validates local page links, fragments, images, stylesheets, scripts, video references, fonts, and redirect targets. It does not send contact messages or test third-party services.

## Private preview

`node scripts/stage-site.mjs` assembles the public pages and referenced assets into `dist/` for the existing Sites project. Validate that output with `node scripts/check-site.mjs dist`. Authored pages and `assets/` remain the source of truth; do not edit generated `dist/` files. The staging directory is ignored by Git, and archives are excluded from both staging and GitHub Pages.

See `docs/redesign-notes.md` for earlier design and content decisions and `archive/README.md` for retained historical files.

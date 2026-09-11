# Daniel Pacheco

Personal engineering website, served as static HTML by GitHub Pages at [danielpacheco.dev](https://danielpacheco.dev).

## Editing

Edit the root HTML pages and `styles.css` directly. The site has no package dependencies. Navigation uses ordinary links and wraps on small screens.

- `index.html`: biography, PCB and FPGA projects, experience, current study.
- `projects/`: project descriptions and implementation notes.
- `aboutme/`, `resume/`, `contact-form.html`: background, printable résumé, contact form.
- `certificates/`, `miscellaneous/`: training and personal material.
- `assets/contact.js`: progressive enhancement for the existing Formspree endpoint.
- `assets/resume.js`: browser print action.

The contact form supports native POST without JavaScript. Résumé printing uses the browser print dialog. Existing redirect URLs and media are retained.

## Private preview

`node scripts/stage-site.mjs` assembles the public pages and referenced assets into `dist/` for the existing Sites project. Authored root files remain the source of truth. The generated staging directory is ignored by Git.

See `docs/redesign-notes.md` for reference sites and content decisions. The GitHub pull request can be reviewed before merging into `main`.

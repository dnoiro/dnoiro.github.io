# Daniel Pacheco — engineering portfolio

A static, responsive portfolio for GitHub Pages at **danielpacheco.dev**. Pages are ordinary HTML; there are no package dependencies or build commands. The existing custom domain and contact-form service are retained.

## Content

- `index.html`: introduction, three featured projects, evidence-linked skills, background.
- `projects/`: project index and source-backed embedded C, assembly, and C++ case studies.
- `aboutme/`: professional background, education, current learning.
- `resume/`: readable résumé with print / save-as-PDF styling.
- `contact-form.html`: existing Formspree form with native HTML fallback and accessible status feedback.
- `certificates/`: supporting course records. The legacy `/certifcates/` URL forwards here.
- `miscellaneous/`: personal material moved out of the recruiting path.
- `styles.css`: shared visual system, responsive layout, and print rules.

## Editing

Edit the HTML directly. Navigation and footer markup are repeated in each page; keep these consistent when changing site-wide links. Use root-relative paths for local assets. No JavaScript is required to read pages or navigate. The contact form submits normally without JavaScript; JavaScript adds in-page feedback. The résumé can always be printed through the browser menu.

Project claims should stay tied to linked source and artifacts. Do not promote the PYNQ-Z2 resource collection as an original completed RTL project, expose private repository material, or add unmeasured performance/test claims. Preserve source links and label coursework, concepts, and current learning accurately.

## Validation and design rationale

See `docs/redesign-notes.md` for the research mapping, content decisions, and validation record. The proposed redesign is intended for review before merging into the branch that publishes GitHub Pages.

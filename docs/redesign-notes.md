# Portfolio redesign notes

## Design basis

The user-provided [Engineering Portfolio Research](https://chatgpt.com/s/t_6a9b38c847988191aa60e772d8b4b377), including its linked university-engineering-portfolio-research document, guided the redesign.

| Research recommendation | Implementation |
| --- | --- |
| Make identity and engineering focus apparent immediately | Name-led homepage, concise role statement, current context, project and résumé actions |
| Prioritize a few well-supported projects | Public embedded C, assembly/C integration, and C++ repositories lead the homepage |
| Show engineering reasoning and evidence | Individual case studies with problem, implementation, available verification evidence, next steps, and artifacts |
| Tie skills to work | Capability groups link to relevant case studies; current FPGA study is labeled separately |
| Keep professional context easy to reach | Consistent navigation, experience and education, readable résumé, contact page |
| Keep certificates and personal details secondary | Footer links to certificate collections and personal interests |
| Use purposeful visuals and accessible navigation | Source-flow diagram, existing launch footage and photos, keyboard focus, skip links, mobile layouts, reduced-motion support |

## Factual and content decisions

- Embedded C, assembly, and C++ source links were inspected through GitHub. Source availability is distinguished from hardware verification or passing tests.
- The PYNQ-Z2 repository identifies itself as a resource collection; it is included as learning material only.
- Existing MATLAB links pointed at a private repository. Descriptions remain in the archive, but private reports are not copied into the public website.
- Broken assembly source URLs now point directly to the public repository, preserving case-sensitive paths and Lab 5's `55` filename.
- The rocket video remains a team-project artifact without invented personal subsystem ownership.
- The duplicated Xcelium badge that linked to an Altium credential was removed; the separately supplied Xcelium link remains.
- Professional background is summarized from the user's established context. No salary, GPA, employer infrastructure identifiers, private contact details, or internal project artifacts are added.
- No email address or LinkedIn URL was available in the repository; none is guessed. The existing contact form and GitHub profile provide contact routes.
- The résumé is an HTML summary with print/PDF styling, not a claimed copy of a previously uploaded résumé.
- Existing `/projects/`, `/aboutme/`, `/contact-form.html`, and `/miscellaneous/` routes are preserved. `/certifcates/` redirects to the corrected `/certificates/` route.

## Validation

- Checked all 13 HTML pages for balanced structure, exactly one H1, unique IDs, viewport/description metadata, image alt attributes, and form labels.
- Resolved 292 local link/asset references, including fragment targets; no missing references.
- Confirmed JavaScript syntax for the contact and résumé scripts.
- Exercised contact success, service rejection, network error, and timeout with mocked responses: successful sends reset the form; failures preserve input; all paths restore the button.
- Exercised the résumé print action with a mocked print function.
- `git diff --check` passed.
- No build is required for the authored static HTML. Browser visual QA was not performed, and no live contact messages were submitted.

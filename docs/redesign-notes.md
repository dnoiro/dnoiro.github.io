# Portfolio design and content notes

## September 2026 revision

The requested direction is a simple student or researcher website, with greater attention to wording. The revision removes slogans, oversized display text, decorative diagrams, project cards, promotional section titles, and the large contact footer. A narrow white page, regular text links, modest headings, and a small existing portrait keep the focus on the content.

## References inspected

- [Chiling Gabriela Han](https://chilinghan.github.io/) — site identifies a Stanford computer science and electrical engineering undergraduate. Short factual introduction, specific research and project descriptions, and direct code links.
- [Ihyun Nam](https://ihyunnam.github.io/) — site identifies a Stanford computer science PhD student. Ordinary section names, precise interests, and concise entries for academic work.
- [Shresth Verma](https://vermashresth.github.io/) — site identifies a Harvard PhD student. Factual role and research introduction, previous experience in paragraphs, and structured publication entries.
- [Andrew Kao](https://andrew-kao.github.io/) — site identifies a Harvard economics PhD student. Minimal navigation and clear separation of completed and ongoing work.

These references informed organization and tone. The implementation and wording are original; no university affiliation, credentials, biography, or publication record is borrowed.

## Wording decisions

- Name the actual projects: microcontroller peripheral labs, x86 assembly and C integration, and C++ command-line utilities.
- Describe current employment, education, and technical interests directly.
- Keep Verilog and FPGA implementation under current study.
- Replace generic discussions of "the problem" with concrete implementation notes.
- Retain coursework context and source links without repeating disclaimers about unperformed tests.
- Do not claim measured timing, performance improvements, comprehensive input validation, security properties, or test results.
- Keep the SPI lab separate from the final microcontroller program.
- Describe Lab 5's global input/output and Lab 6's stack argument and EAX return accurately.
- Preserve contact submission, résumé printing, certificate galleries, personal photographs, existing routes, and redirects.

## Source checks

Implementation descriptions were checked against `micro-final/finalcode.c`, `micro-final/lab9.c`, the Lab 5 and Lab 6 assembly and C drivers in `assemblylabs`, and `utility_line_capstone_1/main.cpp` and `statistical_calculator.cpp`.

Local link and asset references, HTML headings and identifiers, contact form attributes, and JavaScript syntax are checked before saving. No live contact submission or browser visual testing is performed.

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
- Label Verilog and FPGA work as independent study, describing completed labs where supported by the current résumé.
- Replace generic discussions of "the problem" with concrete implementation notes.
- Retain coursework context and source links without repeating disclaimers about unperformed tests.
- Do not claim measured timing, performance improvements, comprehensive input validation, security properties, or test results beyond documented evidence.
- Keep the SPI lab separate from the final microcontroller program.
- Describe Lab 5's global input/output and Lab 6's stack argument and EAX return accurately.
- Preserve contact submission, résumé printing, certificate galleries, personal photographs, existing routes, and redirects.

## Source checks

Implementation descriptions were checked against `micro-final/finalcode.c`, `micro-final/lab9.c`, the Lab 5 and Lab 6 assembly and C drivers in `assemblylabs`, and `utility_line_capstone_1/main.cpp` and `statistical_calculator.cpp`.

Local link and asset references, HTML headings and identifiers, contact form attributes, and JavaScript syntax are checked before saving. No live contact submission or browser visual testing is performed.


## PCB and FPGA content refresh — September 11, 2026

Preserve the approved simple layout. Lead with the Aeronix-sponsored Senior Design II PCB work, then independent FPGA labs and the recreated Altium MixedSim course exercise. Keep embedded C and other software coursework available on the projects page.

The refresh uses the latest repository content, the supplied Hardware Engineer résumé, the September 2 main résumé, and the September 4 entry-level FPGA résumé. Older master and graduate-application résumés were reviewed for context. The recent FPGA résumé supplies the specific comparator testbench and multiplexer board exercises; earlier custom AXI peripheral claims are not carried forward. Preserve the removal of the forked PYNQ repository links. PYNQ-Z2 is named only as the board used for study.

PCB descriptions identify assigned circuits and the laboratory-assistant/senior-design context. No fabrication, production release, signal-integrity measurement, or board bring-up result is added. MixedSim remains a recreated course exercise with simulated results. Training titles follow the existing credential records; no completed Expert-level program credential is claimed.

The public résumé uses professional background and project details without copying private phone, address, or internal infrastructure details from the source documents.

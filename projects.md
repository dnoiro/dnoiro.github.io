---
layout: null
permalink: /projects/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Selected software, signal processing, power systems, aerospace, and low-level programming work by Daniel Pacheco.">
    <meta name="theme-color" content="#141414">
    <title>Projects &amp; Labs — Daniel Pacheco</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Esteban&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
</head>
<body id="top" class="projects-page">
    <a class="skip-link" href="#work">Skip to projects</a>

    <header class="project-header">
        <a class="project-wordmark" href="/" aria-label="Daniel Pacheco, home">
            <span class="project-wordmark-mark" aria-hidden="true">DP</span>
            <span>Daniel Pacheco</span>
        </a>
        <nav class="project-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#labs">Labs</a>
            <a href="https://github.com/dnoiro" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
    </header>

    <main id="work" class="project-shell">
        <section class="projects-hero" aria-labelledby="projects-title">
            <div class="projects-hero-copy">
                <p class="project-kicker"><span aria-hidden="true"></span> Selected engineering work</p>
                <h1 id="projects-title">From low-level code to real-world systems.</h1>
                <p class="projects-intro">A selection of software, signal processing, power systems, and aerospace work—built to turn engineering theory into things that can be tested, measured, and improved.</p>
                <a class="text-link" href="#featured">Explore selected work <span aria-hidden="true">↓</span></a>
            </div>
            <dl class="project-stats" aria-label="Portfolio at a glance">
                <div>
                    <dt>06</dt>
                    <dd>Assembly labs</dd>
                </div>
                <div>
                    <dt>03</dt>
                    <dd>MATLAB studies</dd>
                </div>
                <div>
                    <dt>05</dt>
                    <dd>C++ modules</dd>
                </div>
            </dl>
        </section>

        <section id="featured" class="project-section" aria-labelledby="featured-title">
            <div class="section-heading">
                <p class="section-index">01 / Selected work</p>
                <h2 id="featured-title">Featured projects</h2>
            </div>

            <article class="featured-project featured-project-primary">
                <div class="project-number" aria-hidden="true">01</div>
                <div class="featured-copy">
                    <div class="project-meta">
                        <span>C++</span>
                        <span>Software design</span>
                        <span>Capstone</span>
                    </div>
                    <h3>Multi-function utility suite</h3>
                    <p>A menu-driven command-line application that brings five tools into one dependable interface: a calculator, Caesar cipher, statistics engine, password generator, and safe exit flow.</p>
                    <ul class="project-details">
                        <li>Separated features into focused source and header modules</li>
                        <li>Added resilient type and range validation at every prompt</li>
                        <li>Applied STL containers, modular arithmetic, and modern random generation</li>
                    </ul>
                    <a class="project-cta" href="https://github.com/dnoiro/utility_line_capstone_1" target="_blank" rel="noreferrer">
                        View repository <span aria-hidden="true">↗</span>
                    </a>
                </div>
                <div class="terminal-card" role="img" aria-label="Illustration of the utility program menu">
                    <div class="terminal-bar"><span></span><span></span><span></span><p>utility_suite.cpp</p></div>
                    <pre><code><span class="terminal-muted">// select a utility</span>
<span class="terminal-prompt">$</span> ./utility_suite

  <span class="terminal-number">01</span>  Calculator
  <span class="terminal-number">02</span>  Caesar cipher
  <span class="terminal-number">03</span>  Statistics
  <span class="terminal-number">04</span>  Password generator
  <span class="terminal-number">05</span>  Exit

<span class="terminal-success">Ready for input_</span></code></pre>
                </div>
            </article>

            <div class="featured-grid">
                <article class="featured-project featured-project-compact">
                    <div class="project-number" aria-hidden="true">02</div>
                    <div class="project-meta">
                        <span>Aerospace</span>
                        <span>Team project</span>
                    </div>
                    <h3>Space Flight Design</h3>
                    <p>A multidisciplinary rocket program designed to capture temperature, pressure, humidity, and other atmospheric measurements across changing altitude.</p>
                    <div class="video-frame">
                        <video controls preload="metadata" poster="/videos/rocketlaunch-poster.jpg" aria-label="Space Flight Design rocket launch">
                            <source src="/videos/rocketlaunch.mp4" type="video/mp4">
                            <source src="/videos/rocketlaunch.mov" type="video/quicktime">
                            Your browser does not support embedded video. <a href="/videos/rocketlaunch.mp4">Download the launch video.</a>
                        </video>
                        <span class="video-label">Launch footage · 00:57</span>
                    </div>
                </article>

                <article class="featured-project featured-project-compact power-project">
                    <div class="project-number" aria-hidden="true">03</div>
                    <div class="project-meta">
                        <span>MATLAB</span>
                        <span>Power systems</span>
                    </div>
                    <h3>Transmission network graph model</h3>
                    <p>A power-grid monitoring concept that maps PMU data into a transmission network graph and applies discrete particle swarm optimization to improve topology awareness.</p>
                    <div class="network-visual" aria-hidden="true">
                        <svg viewBox="0 0 520 220" role="img">
                            <g class="network-lines">
                                <path d="M38 168 138 79 257 145 365 51 480 104"/>
                                <path d="M38 168 174 188 257 145 424 184 480 104"/>
                                <path d="M138 79 221 42 365 51 424 184"/>
                            </g>
                            <g class="network-nodes">
                                <circle cx="38" cy="168" r="8"/><circle cx="138" cy="79" r="8"/>
                                <circle cx="174" cy="188" r="8"/><circle cx="221" cy="42" r="8"/>
                                <circle cx="257" cy="145" r="11"/><circle cx="365" cy="51" r="8"/>
                                <circle cx="424" cy="184" r="8"/><circle cx="480" cy="104" r="8"/>
                            </g>
                        </svg>
                        <div class="network-legend"><span></span> PMU topology map</div>
                    </div>
                </article>
            </div>
        </section>

        <section class="project-section studies-section" aria-labelledby="studies-title">
            <div class="section-heading">
                <p class="section-index">02 / Signal studies</p>
                <h2 id="studies-title">MATLAB notebooks</h2>
                <p>Focused investigations in system response, frequency behavior, and signal transformation.</p>
            </div>

            <div class="study-list">
                <article class="study-row">
                    <div class="study-number">01</div>
                    <div>
                        <h3>System response &amp; stability</h3>
                        <p>Compared transfer-function and zero-pole-gain models through impulse, step, Bode, and pole-zero analysis, including settling time, rise time, and overshoot.</p>
                        <div class="project-meta"><span>Control systems</span><span>System modeling</span></div>
                    </div>
                    <a class="round-link" href="https://github.com/dnoiro/Matlab-Projects/blob/main/matlab6.pdf" target="_blank" rel="noreferrer" aria-label="Open System response and stability PDF">↗</a>
                </article>

                <article class="study-row">
                    <div class="study-number">02</div>
                    <div>
                        <h3>Frequency response &amp; roll-off</h3>
                        <p>Solved for system gain, plotted Bode magnitude, located −6 dB and −40 dB frequencies, and calculated roll-off in dB per octave.</p>
                        <div class="project-meta"><span>Bode analysis</span><span>Transfer functions</span></div>
                    </div>
                    <a class="round-link" href="https://github.com/dnoiro/Matlab-Projects/blob/main/matlab5.pdf" target="_blank" rel="noreferrer" aria-label="Open Frequency response and roll-off PDF">↗</a>
                </article>

                <article class="study-row">
                    <div class="study-number">03</div>
                    <div>
                        <h3>Signals &amp; Fourier transforms</h3>
                        <p>Studied Fourier magnitude, noisy unipolar signals, convolution, power spectra, and weighted average frequency across multiple signal types.</p>
                        <div class="project-meta"><span>FFT</span><span>Convolution</span><span>Noise</span></div>
                    </div>
                    <a class="round-link" href="https://github.com/dnoiro/Matlab-Projects/blob/main/matlab4.pdf" target="_blank" rel="noreferrer" aria-label="Open Signals and Fourier transforms PDF">↗</a>
                </article>
            </div>
        </section>

        <section id="labs" class="project-section labs-section" aria-labelledby="labs-title">
            <div class="section-heading">
                <p class="section-index">03 / Low-level programming</p>
                <h2 id="labs-title">x86 assembly lab series</h2>
                <p>Six progressive labs moving from environment setup and addressing modes to stack frames, recursion, and function interfaces.</p>
            </div>

            <div class="lab-grid">
                <article class="lab-card">
                    <p class="lab-label">LAB 01</p>
                    <h3>Build &amp; debug</h3>
                    <p>Cross-platform assembly and C workflows across Windows and Linux.</p>
                    <a href="https://danielpacheco.dev/assemblylabs/Lab1/dpachec_273_001_1.s">View source <span aria-hidden="true">↗</span></a>
                </article>
                <article class="lab-card">
                    <p class="lab-label">LAB 02</p>
                    <h3>Registers &amp; data</h3>
                    <p>Global variables, direct and immediate addressing, and arithmetic operations.</p>
                    <a href="https://danielpacheco.dev/assemblylabs/Lab2/dpachec_273_001_2.s">View source <span aria-hidden="true">↗</span></a>
                </article>
                <article class="lab-card">
                    <p class="lab-label">LAB 03</p>
                    <h3>Flags &amp; control flow</h3>
                    <p>Comparisons, conditional jumps, labels, and translating compound logic.</p>
                    <a href="https://danielpacheco.dev/assemblylabs/Lab3/dpachec_273_001_3.s">View source <span aria-hidden="true">↗</span></a>
                </article>
                <article class="lab-card">
                    <p class="lab-label">LAB 04</p>
                    <h3>Addressing modes</h3>
                    <p>Indexed and indirect addressing applied to arrays, pointers, and structures.</p>
                    <a href="https://danielpacheco.dev/assemblylabs/Lab4/dpachec_273_001_4.s">View source <span aria-hidden="true">↗</span></a>
                </article>
                <article class="lab-card">
                    <p class="lab-label">LAB 05</p>
                    <h3>Stack &amp; recursion</h3>
                    <p>Subroutines, stack frames, local variables, prologues, and epilogues.</p>
                    <a href="https://danielpacheco.dev/assemblylabs/Lab5/dpachec_273_001_55.s">View source <span aria-hidden="true">↗</span></a>
                </article>
                <article class="lab-card">
                    <p class="lab-label">LAB 06</p>
                    <h3>Function interfaces</h3>
                    <p>Passing arguments, handling return values, and recursive function calls.</p>
                    <a href="https://danielpacheco.dev/assemblylabs/Lab6/dpachec_273_001_6.s">View source <span aria-hidden="true">↗</span></a>
                </article>
            </div>
        </section>

    </main>

    <footer class="project-footer">
        <p>Daniel Pacheco <span aria-hidden="true">·</span> Engineer &amp; lifelong learner</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
</body>
</html>

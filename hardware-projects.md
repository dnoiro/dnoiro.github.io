<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hardware Projects | Daniel Pacheco</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Esteban&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background-color: #141414;
            color: white;
            font-family: "Esteban", serif;
            margin: 0;
            padding: 32px 20px 60px;
        }

        .page {
            max-width: 1100px;
            margin: 0 auto;
        }

        .page h1,
        .page h2,
        .page p {
            text-align: center;
        }

        .project-section {
            margin-top: 40px;
            padding: 24px;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 18px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .media-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin: 28px 0;
        }

        .media-row img,
        video {
            display: block;
            width: min(100%, 420px);
            height: auto;
            border-radius: 14px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
        }

        video {
            width: min(100%, 860px);
            margin: 0 auto;
        }

        .back-link {
            display: inline-block;
            margin-top: 28px;
            color: white;
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.35);
            padding: 10px 16px;
            border-radius: 999px;
        }

        .back-link:hover {
            background: rgba(255, 255, 255, 0.08);
        }
    </style>
</head>
<body>
    <main class="page">
        <h1>Hardware Projects</h1>
        <p>Welcome to my hardware projects portfolio, where I showcase my hands-on experience with embedded systems, circuit design, and electronic engineering projects developed throughout my electrical engineering career.</p>

        <section class="project-section">
            <h2>Creating a 2to1 Multiplexor</h2>
            <p>This project highlights the design and implementation of a 2-to-1 multiplexor in hardware. The multiplexor uses a select line to choose between two input signals and route the selected input to a single output. Through this build, I practiced digital logic design, circuit verification, and hands-on hardware debugging.</p>

            <div class="media-row">
                <img src="/Screenshot 2026-03-18 224645.png" alt="First project photo for the 2-to-1 multiplexor build">
                <img src="/IMG_5798.jpg" alt="Second project photo for the 2-to-1 multiplexor build">
            </div>

            <video controls preload="metadata">
                <source src="/videos/rocketlaunch.mov" type="video/quicktime">
                Your browser does not support the video tag.
            </video>
        </section>

        <p>
            <a class="back-link" href="/">← Back to homepage</a>
        </p>
    </main>
</body>
</html>

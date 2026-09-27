# Archived website files

These files are retained for reference and are not used by the current website. GitHub Pages and the private preview staging script exclude this directory.

| Location | Contents |
| --- | --- |
| `images/` | Older decorative GIFs, backgrounds, the IRONMAN logo, and March 2026 screenshots |
| `scripts/site.js` | Earlier collapsible-menu behavior; current navigation uses ordinary links |
| `videos/rocketlaunch.mov` | Original launch recording; the current website uses `assets/videos/rocket-launch.mp4` |

The September 2026 organization preserved these files byte for byte. Original paths are available in Git history. The identical extra copy of `Intro_to_git.jpg` was consolidated into `assets/images/certificates/intro-to-git.jpg`. Two unused placeholder files were removed: `cert-images/test.txt` (a blank line) and `videos/temp.txt` (`hi`).

Move a file into the appropriate `assets/` directory before using it on a public page, then run `node scripts/check-site.mjs`.

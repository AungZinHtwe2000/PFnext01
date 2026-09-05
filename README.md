# AZH Portfolio — Season One edition

This is a dependency-free static portfolio. Open `index.html` with a local web server, or deploy the folder to Netlify, Vercel, GitHub Pages, Cloudflare Pages or any static host.

## Edit the homepage

- Project cards, carousel covers, experience and education: `js/data.js`
- Homepage structure and copy: `index.html`
- Active homepage and companion case-study theme: `css/portfolio-v5.css`
- Homepage interactions and rendering: `js/portfolio-v5.js`
- Dynamic case-study foundation: `css/portfolio-v3.css`

The homepage is structured as one short TV season: Pilot, Selected Work, Recruiter Shortcut, Behind the Scenes, Journey and Finale. Project pages use the same softer visual language while retaining the full dynamic case-study system.

## Replace carousel covers

Each project in `WORK` has a `coverImage` value. Replace the referenced image inside `assets/legacy/...` or point `coverImage` to a new WebP/JPG file. The project episode carousel updates automatically.

Experience and education are separate arrays in `js/data.js`; both render into the accessible tab section without editing homepage markup.

## Edit project detail pages

All project case studies live in **one file:** `js/projects.js`. Homepage card content and impact summaries live in `js/data.js`.

Each project contains:

- Hero content and metadata
- Tags and accent color
- An ordered `sections` array
- A reusable section `type`

Available section types:

- `copy` — two-column narrative
- `bullets` — numbered findings or challenges
- `stats` — impact and ownership metrics
- `process` — four-step method
- `gallery` — clickable image grid and lightbox
- `beforeAfter` — draggable comparison slider
- `quote` — reflection or takeaway

To add a project, duplicate a project object inside `window.PROJECTS`, give it a unique `slug`, and add a matching card to `WORK` in `js/data.js`. Point the card link to:

`pages/project.html?project=your-slug`

Reorder section objects to change the story. Remove an object to hide that section. No case-study HTML needs to be duplicated.

## Preview locally

From the `PFnext` folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Accessibility and performance notes

- Motion respects `prefers-reduced-motion`.
- Case-study navigation updates as the reader scrolls.
- Images below the fold use lazy loading.
- All interactive images use native buttons/dialogs and keyboard-accessible controls.
- Recovered case-study images are production-friendly WebP files.

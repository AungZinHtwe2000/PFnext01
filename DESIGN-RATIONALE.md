# Portfolio V5 — Season One design rationale

This iteration reduces the previous neo-brutalist composition into a clearer, warmer and more recruiter-friendly story. The site now behaves like a short TV season: each section is an episode, projects are the main season, and navigation works as an episode guide with viewing progress.

## Patterns researched

- **Alex Chiu:** clear expertise positioning, case-study headlines that explain the design decision, and strong systems thinking.  
  https://mchiu.co.uk/
- **Joe Pendlebury:** quantified or concrete outcomes appear immediately, before process documentation.  
  https://www.joependlebury.com/
- **Sydney Rasmussen:** direct strategic positioning, explicit ownership, outcome-led project titles, and clear evidence of collaboration.  
  https://sydneyrasmussen.framer.website/
- **Interaction Design Foundation:** hook and results first, followed by relevant research, iteration, outcomes, and reflection.  
  https://ixdf.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio
- **Product Design Portfolios:** current top examples consistently emphasize strategic rationale, impact stats, design systems, motion used with purpose, and strong project headlines.  
  https://www.productdesignportfolios.com/portfolios/content/case-studies

## What changed

- Replaced the previous chapter/episode homepage rather than adding overrides.
- Introduced a direct value proposition: complex products → clear experiences.
- Moved the shipped SkyNet product to the first project position.
- Rewrote project headlines around the problem and result, not only the product name.
- Added role, contribution, outcome, status and time context to every work showcase.
- Added an impact-first strip at the beginning of every dynamic case study.
- Reduced long process explanations in favor of scannable evidence and optional depth.
- Added a concise approach section to communicate judgment, collaboration and systems thinking.
- Kept playful interactions limited to the loader, rotating design principle and purposeful hover states.
- Rebuilt the navigation for mobile with a full-screen, keyboard-friendly menu.
- Created a new independent stylesheet (`portfolio-v3.css`) so legacy CSS cannot hide the redesign.
- Converted active large PNG imagery to WebP; the SkyNet cover drops from roughly 8.1 MB to under 100 KB.
- Recovered real TrailFlix, Pristine Global and D-Learn artifacts from the previous portfolio and rebuilt each as an accurate, structured case study.
- Added a replaceable-cover project carousel with touch scrolling, scroll snapping and button controls.
- Combined Experience and Education into a responsive, keyboard-accessible tab section.
- Shifted display typography to Archivo Black and introduced flat high-energy color blocks, hard shadows, dividers and inline SVG vectors—without texture or grain.
- Added Pristine Global’s live product link while keeping privacy-sensitive screens framed at a high level.
- Removed the duplicated full project grid and separate carousel; one horizontal episode rail now carries the entire work showcase.
- Replaced the hard, high-density color system with generous cream space, warm pastels, softer outlines and a limited set of purposeful doodles.
- Reframed navigation as Season 01 with episode codes, a mobile episode guide, viewing progress and TV-player cues.
- Added a recruiter shortcut that recommends the right case study for complex-product ownership, research thinking, sprint execution or playful systems.
- Combined biography, process and personal context into one compact Behind-the-Scenes episode.
- Added a surprise-project control, playable hero timecode and copy-email interaction without adding visual clutter.
- Moved the homepage to `portfolio-v5.css` and `portfolio-v5.js`; case studies inherit a quieter V5 reading theme on top of the dynamic foundation.

## Editing model

- Homepage project and experience content: `js/data.js`
- Dynamic case-study content: `js/projects.js`
- Homepage behavior: `js/portfolio-v5.js`
- Case-study behavior: `js/project-page.js`
- Active homepage and companion theme: `css/portfolio-v5.css`
- Case-study foundation: `css/portfolio-v3.css`

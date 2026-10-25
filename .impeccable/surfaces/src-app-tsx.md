---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["src/components"]
---

# Surface brief: lawraa.github.io (all routes)

Scope: the whole personal site (Home, Projects, Publications, Bouldering, Drawing). Visitor mode: Experience (portfolio), audience split evenly between industry hiring and research readers.

Job: within one viewport the visitor knows who Lawrance is, sees real work, and can reach the resume or email. Proof comes only from the data files; no invented claims.

Constraints: polished classic structure (brand commitment in PRODUCT.md), a small 3-4 color palette, light theme only (scene: recruiters and professors reading on laptops in daylight offices and labs; the dark toggle is retired).

Chosen direction: "Forest & Tomato", picked by the user in round 5 (safer register) from the HTML sketch `.impeccable/mocks/decision/s-garden.html`.

## Direction contract

THESIS: A classic engineer portfolio (name, bio, portrait, selected work, experience, contact) whose character comes from a disciplined botanical four-color palette and a confident grotesque display face. It refuses the gray template it replaces: mono eyebrow labels over headings, shadowed gray cards, icon-tile skill grids, dot timelines, Inter.

OWN-WORLD: Sage-gray ground #eef1ec with white image and panel surfaces; forest #1f4d3a for headings, primary buttons and the one dark panel per page; tomato #bf3a24 for links, active nav underline and hover; butter #f3d36b as a highlighter mark under key phrases and as one tag color; ink #1a1d1b body, #525a55 secondary. Bricolage Grotesque for display, Hanken Grotesk for text. Pill buttons and pill tags; 16-24px radius images; hairline #cfd6cf rules instead of card shadows.

STORY: The visitor reads one paragraph that says what Lawrance builds, sees three real projects with their images, scans experience and publications as clean ruled lists, and leaves with the resume PDF or an email.

FIRST VIEWPORT: 1160px column. Header: forest wordmark left, five text links right with a tomato underline on the active one. Hero grid 1fr / 340px: left a 76px forest name over two lines, role line, bio with butter highlighter on one phrase and tomato links, then pill buttons (See projects, Resume PDF) plus Email / GitHub / Scholar / LinkedIn text links. Right: 340x400 rounded portrait with a forest "Now" card beneath it. "Selected work" heading and the top of a 3-up project image row appear above the fold at 1440x900.

SIGNATURE: the butter highlighter marks draw in left to right once on load (the single authored motion moment, exponential ease-out, content visible by default and under reduced motion); project images lift slightly on hover.

FORM: grounded direction 1 of 3 in a user-requested safer round; seed:6346ee05f5e5fa37

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

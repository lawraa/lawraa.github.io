---
name: Lawrance Chen
description: Personal portfolio of an ML and robotics engineer - a classic structure in a botanical four-color world.
colors:
  sage: "#eef1ec"
  paper: "#ffffff"
  ink: "#1a1d1b"
  mute: "#525a55"
  line: "#cfd6cf"
  forest: "#1f4d3a"
  forest-deep: "#173a2c"
  forest-tint: "#dce7df"
  tomato: "#bf3a24"
  butter: "#f3d36b"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    letterSpacing: "-0.02em"
  title-item:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.375
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  tag:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "24px"
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "13px"
    lineHeight: 1.625
rounded:
  focus: "6px"
  media-sm: "12px"
  media: "16px"
  panel: "24px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "40px"
  grid-gap: "24px"
  row: "16px"
  section: "96px"
  container: "1160px"
  header: "72px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-outline-hover:
    backgroundColor: "{colors.forest-tint}"
  button-butter:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-butter-hover:
    backgroundColor: "{colors.paper}"
  tag-plain:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.mute}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
  tag-butter:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
  tag-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
  tag-mint:
    backgroundColor: "{colors.forest-tint}"
    textColor: "{colors.forest}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
  filter-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.mute}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  filter-pill-active:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
  media-tile:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.media}"
  panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "40px"
  now-card:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.forest-tint}"
    rounded: "{rounded.media}"
    padding: "16px 20px"
  footer:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.forest-tint}"
    padding: "80px 40px"
---

# Design System: Lawrance Chen

## Overview

**Creative North Star: "The Botanical Lab Bench"**

A classic engineer portfolio - name, bio, portrait, selected work, ruled lists of experience and papers, a contact close - whose character comes entirely from a disciplined four-ink palette and a confident grotesque display face. The structure is deliberately familiar; the craft lives in color restraint, generous whitespace, hairline rules and a single moment of authored motion. Pages read like a well-kept lab notebook pressed between sage pages: quiet ground, forest headings, a tomato pen for anything clickable, and a butter highlighter for the one phrase that matters.

Density is calm and editorial. One 1160px column, light theme only, white surfaces reserved for images and reading panels. Separation comes from 1px rules and whitespace rather than boxes and shadows. The system explicitly replaces a gray template look: no mono eyebrow labels over headings, no shadowed gray cards, no icon-tile skill grids, no dot timelines.

**Key Characteristics:**
- Sage ground, white image surfaces, forest headings, tomato interaction, butter emphasis.
- Bricolage Grotesque bold headings at tight negative tracking; Hanken Grotesk for everything read.
- Pills for everything pressed or tagged; 16-24px radii for images and panels.
- Flat at rest; hairline rules organize lists; a soft forest-tinted lift only on hover.
- One authored motion: the highlighter stroke drawing in once on load.

## Colors

A botanical four-ink palette on a pale sage ground: forest for structure, tomato for action, butter for emphasis, and neutrals tuned slightly green.

### Primary
- **Forest** (forest): every page and section heading, the wordmark, primary filled buttons, the active filter pill, outline-button strokes, secondary text links, and the two dark surfaces (the home "Now" card and the closing footer).
- **Deep Forest** (forest-deep): hover state of filled forest buttons and the 95% lightbox scrim. Never a resting color.
- **Forest Mist** (forest-tint): hover wash behind outline buttons and the mobile menu button, the "mint" tag tone, body text on forest surfaces, map and photo placeholder fill.

### Secondary
- **Tomato** (tomato): the interaction color. Inline links (underlined), "All projects" style arrow links, hover color for titles and forest text links, the active nav underline and active mobile-menu item, the focus ring, and the text caret.

### Tertiary
- **Butter** (butter): the highlighter stroke under one key phrase, text selection, the venue/"Ongoing" tag tone, the footer's email button, and the "Now" lead-in word on the forest card.

### Neutral
- **Sage Ground** (sage): page background and sticky header fill.
- **Paper** (paper): image wells, the case-study and chart panels, BibTeX blocks, plain tags, and text on forest fills.
- **Ink** (ink): headings-adjacent body emphasis, list-row titles, active nav text.
- **Moss Gray** (mute): long-form body copy, metadata, dates, secondary lines (about 6:1 on sage).
- **Hairline** (line): 1px rules between list rows and articles, plain-tag rings, the scrolled header border, scrollbar thumb.

### Named Rules
**The Four Inks Rule.** Sage ground plus forest, tomato and butter, with green-leaning neutrals. No fifth hue enters the UI; data marks reuse the same inks.

**The Tomato Means Touch Rule.** Tomato appears only on things that respond: links, hover, the active nav underline, focus and caret. Never use it for decoration or headings.

**The Reserved Forest Rule.** Solid forest fills are limited to primary buttons, the active filter pill, the forest tag, one compact dark card, and the footer. Never flood a content section with forest.

## Typography

**Display Font:** Bricolage Grotesque (with ui-sans-serif, system-ui fallback), weights 500-800 loaded, 700 used.
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui fallback), 400/500/600 and 400 italic.
**Label/Mono Font:** system mono stack, only for BibTeX.

**Character:** A chunky, slightly quirky grotesque for headings set tight and bold against a clean, friendly text grotesque; confident without shouting.

### Hierarchy
- **Display** (700, clamp 2.75-4.75rem, 0.98, -0.035em): the home hero name only, in forest.
- **Headline** (700, 3rem mobile / 3.75rem desktop, 1.02, -0.03em): the page title on every inner route, in forest, followed by an 18px mute intro capped at 62ch.
- **Title** (700, 30px mobile / 34px desktop, -0.02em): section headings ("Selected work", "Experience"), in forest. Inner pages use 30px.
- **Item title** (700, 24px mobile / 28px desktop, 1.15, -0.015em): project and publication article headings.
- **Body** (400, 17px, 1.6; long-form 16px at 1.7 capped at 70-72ch): mute for prose, ink for emphasis. Lede lines run 18-20px weight 500.
- **Strong body** (600, 18px, snug): card titles, gallery captions, list-row titles in Hanken, never Bricolage.
- **Label** (600, 15px): buttons, nav (500), metadata rows, sub-headings inside sections ("Industry", "Research labs"), in sentence case.
- **Tag** (600, 13px, 24px line box): pill tags.

### Named Rules
**The Two Voices Rule.** Bricolage sets page, section and article headings, the wordmark, the mobile menu and case-study row labels. Anything inside a card or list row is Hanken semibold.

**The Sentence Case Rule.** No uppercase, no letter-spaced labels, no small text placed above a heading. Headings stand alone; context goes in the line beneath them.

**The Tabular Dates Rule.** Dates and counts use tabular numerals and right-align in list rows on desktop.

## Layout

A single centered column (container 1160px) with 20px gutters on mobile and 40px from 640px. The header is sticky, 72px tall, sage-filled, and gains a hairline bottom border only once the page scrolls. Sections are separated by 96px of bottom space, not by dividers.

The home hero is a two-column grid: flexible text left, a fixed portrait column right (300px at 768px, 340px at 1024px, 56-72px gap), stacking on mobile. Project and publication articles use a 300px media column beside text from 768px. Image grids run 1, 2 then 3 columns (24px column gap, 40px row gap); experience splits into two columns at 1024px. The resume uses a 220px sticky sidebar beside content at 1024px. Inner pages open with 56-80px top padding before the page title.

Lists are ruled, not boxed: a top hairline, then each row closed by a bottom hairline with 16-24px vertical padding, text left and dates right. Measures stay readable: 62-64ch for intros and bio, 70-78ch for long-form.

## Elevation & Depth

Flat by default. Depth comes from tone (white surfaces on sage, forest surfaces for the dark moments) and from 1px hairline rules. Shadows exist only as a hover response on media and on the floating map popup, always tinted forest rather than black.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 14px 28px -12px rgba(23, 58, 44, 0.35)` with `translateY(-4px)`): project, paper, drawing and climbing images on hover, 0.35s exponential ease-out. Disabled under reduced motion.
- **Float** (`box-shadow: 0 10px 24px -10px rgba(23, 58, 44, 0.4)`): the map popup only.

### Named Rules
**The Hairline Not Shadow Rule.** Cards and list rows never carry a resting shadow or a border box; group with a 1px hairline rule or a white well on sage.

## Shapes

Soft geometry with two families. Everything pressed or labeled is a full pill: buttons, tags, filter chips, icon buttons. Everything shown is a softly rounded rectangle: images and media wells at 16px, gallery figures and the map popup at 12px, large reading panels (case study, radar chart) and the hero portrait at 24px. The focus outline is 2px tomato with a 3px offset and 6px corners. Rules are straight 1px hairlines; there are no decorative borders, outlines on cards, or offset shapes. Resume bullets are a short 10x2px forest dash rather than a dot.

## Components

### Buttons
Confident, rounded and quiet: filled forest for the one main action, an outline sibling for the second.
- **Shape:** full pill.
- **Primary:** forest fill, white 15px semibold text, 12px x 20px padding (8px x 16px in dense article action rows), trailing 16-18px line icon with 8px gap.
- **Hover / Focus:** fill darkens to deep forest via color transition; global 2px tomato focus ring.
- **Outline:** transparent with an inset 1.5px forest ring and forest text; hover washes forest mist. Used for "Resume PDF" and "Read case study" (with a chevron that rotates 180deg when open).
- **On forest (footer):** butter fill with ink text (hover turns white), paired with a white-text outline using a 60% forest-mist ring and a 10% white hover wash.
- **Text actions:** forest semibold 15px with optional icon, hover to tomato. Arrow links ("All 13 projects") are tomato with an underline on hover.

### Chips (Tags and Filters)
- **Tag:** 13px semibold pill, 10px horizontal padding. Tones: plain (white, mute text, inset hairline ring) for topics and grades; butter for venues and "Ongoing"; forest and mint for featured-project fields.
- **Filter pill:** 14px semibold, 6px x 14px. Unselected is a plain tag that darkens text and rings forest on hover; selected is solid forest with white text. Counts sit inside at 70% opacity in tabular numerals.

### Cards / Containers
- **Corner Style:** 16px media wells, 24px panels.
- **Background:** paper on sage; forest for the Now card and footer.
- **Shadow Strategy:** none at rest; Lift on hover for media only (see Elevation).
- **Border:** none; rows and articles are separated by hairlines instead.
- **Internal Padding:** 24px mobile / 40px desktop for panels; project tiles have no padding, only image then text stacked below.

### Navigation
- **Desktop:** forest Bricolage wordmark (20px bold) left; six 15px medium text links right with 28px gaps. Default mute; hover ink with a hairline underline; active ink with a 2px tomato underline.
- **Mobile:** below 768px a 22px stroked hamburger in forest on a pill hover wash opens a full-width list of 24px Bricolage semibold links separated by hairlines, forest by default and tomato when active.

### Ruled List Row
The site's list grammar for experience, publications, resume entries and service: hairline-bounded rows, a semibold title over a 15px mute meta line, tabular dates right-aligned on desktop, and an optional butter tag at the trailing edge.

### Project Tile
White 16:10 (home) or 4:3 (articles) image well with 16px corners and the Lift hover, followed by an 18px semibold Hanken title that turns tomato on group hover, a mute 15px subtitle, and one tag.

### Highlighter Mark
A butter band behind ink text at 42% of the line height, sitting at 88% down the glyph box, with clone decoration so it wraps cleanly. When motion is allowed it draws left to right once (0.9s, 0.35s delay, exponential ease-out); otherwise it is simply present. Used on one phrase per page intro or bio.

### Inline Link
Tomato text with a 1px underline offset 3px; on hover the underline thickens to 2px.

### Now Card
A compact forest panel (16px corners, 16px x 20px padding) under the hero portrait: 15px forest-mist text led inline by a butter semibold word.

### Footer
A full-bleed forest close on every page: a white 36-48px Bricolage headline capped at 24ch, an 18px forest-mist line, the butter email pill and copy-email outline, then a 15% white hairline over copyright and white social links with icons that hover to butter.

### Lightbox
A 95% deep-forest scrim with the image on a white 16px-cornered well, a forest-mist caption, and a round close button.

## Do's and Don'ts

### Do:
- **Do** keep the page on sage and put images and reading panels on white wells with 16-24px corners.
- **Do** use tomato only for interaction: links, hover, active nav underline, focus ring.
- **Do** separate list content with 1px hairline rules and 16-24px row padding.
- **Do** set page, section and article headings in Bricolage Grotesque 700 forest with negative tracking, and everything inside cards in Hanken Grotesk.
- **Do** make every button, tag and filter a full pill.
- **Do** reserve butter for the highlighter, selection, venue tags and the footer email action.
- **Do** honor reduced motion: the highlighter appears static and the lift is removed.
- **Do** keep the site light-only.

### Don't:
- **Don't** add mono or uppercase eyebrow labels above headings.
- **Don't** give cards a resting drop shadow or a gray fill; shadows are hover-only and forest-tinted.
- **Don't** build skill sections as icon tiles; use plain columns of text.
- **Don't** draw timelines with dots and connecting lines; use ruled rows.
- **Don't** introduce a fifth hue or a dark theme.
- **Don't** use more than one highlighter phrase per page section, or add other entrance animations.

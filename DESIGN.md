---
name: Björlanda Bygg AB
description: A neighbourly builder's site that shows finished work first, in falu-red and brand blue on cool limewash white.
colors:
  limewash-ground: "#f2f5f9"
  paper: "#ffffff"
  ink-navy: "#0e1a36"
  muted-slate: "#475570"
  hairline: "#d6dde8"
  brand-blue: "#1356d9"
  blue-deep: "#0a2f96"
  blue-wash: "#dbe6fb"
  falu-red: "#a62f1c"
  falu-red-pressed: "#8a2615"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 90"
  headline:
    fontFamily: "Bricolage Grotesque, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Trebuchet MS, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  field: "0.75rem"
  frame: "1.25rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max-width: "76rem"
  mosaic-gap: "clamp(0.6rem, 1.4vw, 1.1rem)"
  section: "clamp(3rem, 7vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.falu-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.falu-red-pressed}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.paper}"
  phone-pill:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.1rem"
  phone-pill-hover:
    backgroundColor: "{colors.blue-deep}"
  tile-caption:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.8rem"
  field:
    backgroundColor: "{colors.limewash-ground}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.field}"
    padding: "0.8rem 0.95rem"
    height: "3rem"
  address-card:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.frame}"
---

# Design System: Björlanda Bygg AB

## Overview

**Creative North Star: "The Neighbour's Roofline"**

A builder's site that shows finished work first and speaks like a neighbour. The palette is falu red and brand blue on cool limewash white; warmth comes from the real photographs and the rounded, friendly Bricolage Grotesque display, not from cream or beige. The roof-pitch notch of the logo is echoed once in the hero photo frame, and everything else stays calm, rounded and plain.

The system is flat and light. Blue is committed, not sprinkled: one drenched services band carries the full brand blue, and the same blue returns in the phone pill and the contact address card. Red is the single action color. Density is generous: large type, wide section padding, a 12-column mosaic of photographs leading the page.

**Key Characteristics:**
- Real photographs in rounded frames carry the page; type and color stay quiet around them.
- Blue is drenched in one band, red is reserved for the primary action and the active-nav underline.
- Pill-shaped controls, 1.25rem photo frames, one gable-clipped hero frame.
- Flat surfaces separated by tone and hairlines; no shadows at rest.
- Bilingual SV/EN, Swedish first.

## Colors

A cool limewash ground with navy ink, one committed blue and one falu red.

### Primary
- **Brand Blue** (#1356d9): the logo's blue. Fills the drenched services band and the contact address card, the phone pill, text selection, focus outline, and the hero headline emphasis.
- **Deep Blue** (#0a2f96): hover state for blue fills; text color for the big phone number, "Fler bilder" link, status text and the active nav label.

### Secondary
- **Falu Red** (#a62f1c): the single action color. Primary button fill, active-nav underline, invalid-field border, error status, hover color of the big phone number. Pressed/hover shade is #8a2615.

### Neutral
- **Limewash Ground** (#f2f5f9): page background and input fill.
- **Paper** (#ffffff): header, form panel, photo caption pills.
- **Ink Navy** (#0e1a36): body text, ghost button, selected language toggle, footer background.
- **Muted Slate** (#475570): lede and secondary paragraphs, unselected language toggle.
- **Hairline** (#d6dde8): header rule, form border, field border.
- **Blue Wash** (#dbe6fb): nav hover fill, photo placeholder behind images, focus halo on fields.

### Named Rules
**The Drenched Band Rule.** Blue is a surface, not an accent: it fills one full-bleed band (and one card) at full strength. Elsewhere it appears only as small controls and text. Never tint many sections lightly blue.

**The One Action Red Rule.** Falu red marks the primary action and the current page. A second red element on the same screen needs a reason.

## Typography

**Display Font:** Bricolage Grotesque (with Trebuchet MS, system-ui)
**Body Font:** Hanken Grotesk (with system-ui, Segoe UI)

**Character:** Bricolage brings a slightly hand-made, narrowed warmth (wdth 90 on the h1) to headlines and big numbers; Hanken stays plain and legible for reading and controls.

### Hierarchy
- **Display** (700, clamp 2.5rem to 5.25rem, 1.04): home h1 only, width axis 90, tracking -0.025em.
- **Headline** (700, clamp 2rem to 3.25rem, 1.04): section h2s; the contact card h2 drops to 1.6rem.
- **Title** (600, clamp 1.6rem to 2.5rem, 1.15): service-area list items in the blue band; the big phone number uses weight 800 up to 4.75rem with tabular figures.
- **Body** (400, 1.0625rem, 1.6): paragraphs capped at 68ch; lede runs clamp 1.15 to 1.4rem in Muted Slate, 34ch.
- **Label** (700, 0.85 to 1.05rem): buttons, nav (600), field labels (0.95rem), language toggle (0.04em tracking), captions.

### Named Rules
**The Two Voices Rule.** Bricolage speaks (headlines, service names, the phone number); Hanken works (everything you click or read at length). Do not swap them.

## Layout

A single centered container, 76rem max plus a fluid gutter of clamp(1rem, 4vw, 3rem). The hero is a 7fr/5fr two-column grid with a vertically centered pair; the portfolio is a 12-column mosaic (roof 7 cols by 2 rows, two 4:3 tiles on the right, then 5/7 split for the van and silver tiles) with a gap of clamp(0.6rem, 1.4vw, 1.1rem). The contact page repeats the 7fr/5fr split (form left, address card right). The services band uses two equal columns. Section vertical padding is fluid, clamp(3rem, 7vw, 6rem). Breakpoints: 52rem collapses hero, contact and the header nav to one column; 48rem collapses the call strip; 40rem collapses the mosaic and areas to a single column with 4:3 tiles. The header is sticky.

## Elevation & Depth

Flat. Depth is conveyed by tone (white header and form on limewash ground, blue band, navy footer) and 1px hairlines. The only shadow-like effects are state responses: a 3px Blue Wash halo on a focused field and an inset 3px red underline on the current nav item. The lightbox dims the page with a navy 86% backdrop.

### Named Rules
**The Flat-At-Rest Rule.** Nothing carries a drop shadow at rest. Depth comes from tone and hairline; state may add a ring.

## Shapes

Soft and rounded, with one pitched exception. Photo frames, form panel and address card use 1.25rem (20px); inputs use 0.75rem; every button, nav link, pill, caption and language toggle is fully round (999px). The hero photo is clipped to a gable silhouette (polygon 0 17%, 50% 0, 100% 17%, 100% 100%, 0 100%), a roof-pitch echo of the logo's roofline. Gallery tiles reveal with a top-down clip-path wipe on scroll.

### Named Rules
**The One Gable Rule.** The roof-pitch notch is used once, on the hero frame. Every other frame is a plain rounded rectangle.

## Components

### Buttons
- **Shape:** full pill (999px), min-height 3rem, 2px border, Hanken 700 at 1.05rem, arrow glyph slides 4px on hover.
- **Primary:** Falu Red fill, white text, padding 0.95rem 1.5rem; hover deepens to #8a2615.
- **Ghost:** transparent with 2px Ink Navy border; hover fills navy with white text.
- **Press:** translateY(1px) on active; transitions use cubic-bezier(0.16, 1, 0.3, 1).

### Phone pill
Brand Blue pill in the header with tabular figures; hover to Deep Blue. The call strip echoes it as an oversized Bricolage number in Deep Blue.

### Navigation
Header on white with a hairline rule, logo left, nav links as 999px-hover pills (Blue Wash on hover), current page in Deep Blue with a 3px red inset underline. SV/EN toggle is a pill with a navy selected state. On narrow screens the nav drops to its own full-width row.

### Photo tiles
Rounded 1.25rem, Blue Wash placeholder, image zooms 1.04 over 0.9s on hover, white pill caption at bottom-left. Click opens a native dialog lightbox with a white pill Close button.

### Services band
Full-bleed Brand Blue with white text; two columns, each headed by a white-underlined small Bricolage heading, items in large Bricolage 600 separated by 28% white hairlines.

### Inputs / Fields
Limewash fill, 1.5px Hairline border, 0.75rem radius, 3rem min-height. Hover darkens border to #9fb0cc; focus turns border Brand Blue, fill white, adds a 3px Blue Wash ring; invalid border is Falu Red. Labels are bold, stacked above.

### Address card
Brand Blue panel, 1.25rem radius, white text, small #cfdcff key labels over larger values.

## Do's and Don'ts

### Do:
- **Do** lead pages with real photographs in 1.25rem rounded frames.
- **Do** keep blue drenched: full Brand Blue surfaces with white text, focus outlines turning white on them.
- **Do** make every clickable control a 999px pill with at least 3rem touch height (2.25rem for the language toggle).
- **Do** use Falu Red only for the primary action, current-page mark and error state.
- **Do** keep a visible 3px Brand Blue focus outline with 3px offset on every interactive element.
- **Do** honor prefers-reduced-motion by removing the reveal wipe and hover transforms.

### Don't:
- **Don't** open with a hero followed by three icon cards; this is the contractor template the site refuses.
- **Don't** warm the ground toward cream; warmth comes from photos and type.
- **Don't** add drop shadows at rest.
- **Don't** reuse the gable clip on other frames.
- **Don't** invent testimonials, prices, certifications or stock imagery; photographs must be real.

**Not canonized (build defects or drift):** hard-coded off-token values (#8a2615, #9fb0cc, #e6eeff, #cfdcff, #c8d2e6) are recorded only as the shades the build uses, not as new tokens; the dead `.band::before` roof-notch rule (display: none) and the glyph arrows (↓ →) in button and link copy are carried by the build and not made house style.

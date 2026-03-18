# Hero Redesign — Insomnia Icon Set

**Date:** 2026-03-18
**Status:** Approved

---

## Goal

Elevate the hero from a personal demo to an official product page that invites anyone to download and use the icon set. Tone: clean + technically credible.

---

## Background Treatment

- Retain the existing `BreathingDotsHero` breathing-dots CSS animation (no changes to the animation logic or dot grid).
- The dot `.grid` currently fills `position: absolute; inset: 0` with no explicit z-index (defaults to `auto`/0 in stacking context).
- Add a centered radial vignette overlay div inside `.hero`, rendered after the grid in DOM order:
  - `position: absolute; inset: 0; z-index: 1`
  - `background: radial-gradient(ellipse 65% 60% at center, rgba(0,0,0,0.7) 0%, transparent 100%)`
  - Renders above the dot grid, below the content stack (`z-index: 2`).
  - Creates a dark stage in the center for text legibility while keeping the dots vivid at the edges.

---

## Content Stack

All content centered, `max-width: 480px`, `z-index: 2`.

| Layer | Copy | Style |
|---|---|---|
| Eyebrow | `OPEN ICON SET · FREE TO USE` | 11px uppercase, letter-spacing 0.2em, color #666 (intentional muted style, not a legibility requirement) |
| Headline | `Insomnia` | clamp(56px, 10vw, 96px), font-weight 700, white |
| Descriptor | `163 animated icons built on a 5×5 dot grid.` | 17px, color #999, margin-top 12px |
| Use-case pills | Apps · Dashboards · Motion · Design Systems · Creative | Small pill tags, border 1px solid #333, background rgba(255,255,255,0.04), text #666, border-radius 100px, padding 4px 12px, gap 8px, flex-wrap |
| Primary CTA | `↓ Download Icons` | Solid white button, black text, border-radius 6px, padding 12px 28px, href `#` for now. Hover: opacity 0.85. Focus: 2px offset outline. |
| Secondary CTA | `Browse icons` | Text link (no arrow), color #555, font-size 13px. Scrolls to icon grid section below. Hover: color #888. |

---

## Files to Change

| File | Change |
|---|---|
| `app/insomnia/BreathingDotsHero.tsx` | Add vignette div; replace content stack with new eyebrow, updated headline, descriptor, pills, and CTA buttons |
| `app/insomnia/BreathingDotsHero.module.css` | Add styles: `.vignette`, `.eyebrow`, updated `.title`, `.descriptor` (new class, `.subtitle` kept intact to avoid breaking anything but goes unused), `.pills`, `.pill`, `.ctaGroup`, `.ctaPrimary`, `.ctaSecondary` |

---

## Out of Scope

- No changes to the dot animation logic or CSS keyframes.
- No download functionality wired up (button renders, href can be `#` for now).
- No changes to `InsomniaPreviewRoot`, color picker, or icon grid below the hero.

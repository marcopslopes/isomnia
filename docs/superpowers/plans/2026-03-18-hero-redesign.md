# Hero Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the `BreathingDotsHero` component to feel like an official product page — adding a vignette background, richer copy, use-case pills, and a download CTA.

**Architecture:** Two-file change only — the `.tsx` component and its `.module.css`. The dot animation logic is untouched. A vignette `<div>` is inserted between the dot grid and the content layer. The content stack gains eyebrow, pills, and CTA elements with new CSS classes.

**Tech Stack:** Next.js 15, React 18, TypeScript, CSS Modules

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `app/insomnia/BreathingDotsHero.tsx` | Modify | Add vignette div; update content stack JSX |
| `app/insomnia/BreathingDotsHero.module.css` | Modify | Add new CSS classes for vignette, eyebrow, descriptor, pills, CTAs |

---

### Task 1: Add vignette overlay and update content stack in TSX

**Files:**
- Modify: `app/insomnia/BreathingDotsHero.tsx`

- [ ] **Step 1: Open the file and read current structure**

  Verify the current JSX renders: `<section.hero>` → `<div.grid>` (dots) → `<div.content>` (title + subtitle).

- [ ] **Step 2: Add the vignette div between grid and content**

  Insert a `<div className={styles.vignette} aria-hidden="true" />` after the closing `</div>` of `.grid` and before `<div className={styles.content}>`.

- [ ] **Step 3: Replace the content stack**

  Replace the existing `.content` div contents with the new stack:

  ```tsx
  <div className={styles.content}>
    <p className={styles.eyebrow}>Open Icon Set · Free to Use</p>
    <h1 className={styles.title}>Insomnia</h1>
    <p className={styles.descriptor}>
      163 animated icons built on a 5×5 dot grid.
    </p>
    <div className={styles.pills} role="list">
      {['Apps', 'Dashboards', 'Motion', 'Design Systems', 'Creative'].map((label) => (
        <span key={label} className={styles.pill} role="listitem">
          {label}
        </span>
      ))}
    </div>
    <div className={styles.ctaGroup}>
      <a href="#" className={styles.ctaPrimary} download>
        ↓ Download Icons
      </a>
      <a href="#icons" className={styles.ctaSecondary}>
        Browse icons
      </a>
    </div>
  </div>
  ```

- [ ] **Step 4: Verify the file compiles — check dev server terminal for errors**

  Expected: no TypeScript or Next.js compilation errors in the terminal running `npm run dev`.

- [ ] **Step 5: Commit**

  ```bash
  cd /Users/marcodasilva/Desktop/Portfolio/Apps/Insomnia
  git add app/insomnia/BreathingDotsHero.tsx
  git commit -m "feat: update hero content stack with eyebrow, pills, and CTA"
  ```

---

### Task 2: Add CSS for vignette, eyebrow, descriptor, pills, and CTAs

**Files:**
- Modify: `app/insomnia/BreathingDotsHero.module.css`

- [ ] **Step 1: Add `.vignette` class**

  Append to the CSS file:

  ```css
  .vignette {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: radial-gradient(ellipse 65% 60% at center, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    pointer-events: none;
  }
  ```

- [ ] **Step 2: Update `.content` — confirm z-index and add max-width**

  The existing `.content` rule already has `z-index: 2`. Add `max-width: 480px` to it:

  ```css
  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 40px 24px;
    max-width: 480px;
  }
  ```

  > **Note:** Do NOT remove the existing `.subtitle` CSS rule — leave it in place even though it is no longer used in JSX.

- [ ] **Step 3: Add `.eyebrow` class**

  ```css
  .eyebrow {
    margin: 0 0 16px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #666;
  }
  ```

- [ ] **Step 4: Update `.title` for new headline size**

  Replace the existing `.title` rule:

  ```css
  .title {
    margin: 0 0 12px;
    font-size: clamp(56px, 10vw, 96px);
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #ffffff;
    text-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
  }
  ```

- [ ] **Step 5: Add `.descriptor` class**

  ```css
  .descriptor {
    margin: 12px 0 28px;  /* 12px top matches the spec; gap from .title is explicit here */
    font-size: 17px;
    color: #999;
    line-height: 1.5;
  }
  ```

- [ ] **Step 6: Add `.pills` and `.pill` classes**

  ```css
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 36px;
  }

  .pill {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #666;
    border: 1px solid #333;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 100px;
    padding: 4px 12px;
  }
  ```

- [ ] **Step 7: Add `.ctaGroup`, `.ctaPrimary`, `.ctaSecondary` classes**

  ```css
  .ctaGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .ctaPrimary {
    display: inline-block;
    padding: 12px 28px;
    background: #ffffff;
    color: #000000;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    border-radius: 6px;
    text-decoration: none;
    transition: opacity 0.15s ease;
  }

  .ctaPrimary:hover {
    opacity: 0.85;
  }

  .ctaPrimary:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  .ctaSecondary {
    font-size: 13px;
    color: #555;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .ctaSecondary:hover {
    color: #888;
  }
  ```

- [ ] **Step 8: Verify in browser at http://localhost:3001**

  Check:
  - Vignette darkens the center, dots visible at edges
  - "Insomnia" headline is large and bold
  - Pills render in a row, wrap on narrow screens
  - Download button is white with black text; hover dims it
  - "Browse icons" is a subtle text link below the button

- [ ] **Step 9: Commit**

  ```bash
  cd /Users/marcodasilva/Desktop/Portfolio/Apps/Insomnia
  git add app/insomnia/BreathingDotsHero.module.css
  git commit -m "feat: add hero vignette, eyebrow, pills, and CTA styles"
  ```

---

## Done

The hero now presents as a product page. The download button is a placeholder (`href="#"`); wiring to an actual file is out of scope for this plan.

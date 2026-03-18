'use client';

import { useMemo } from 'react';
import styles from './BreathingDotsHero.module.css';

const COLS = 24;
const ROWS = 14;
const CENTER_X = (COLS - 1) / 2;
const CENTER_Y = (ROWS - 1) / 2;

/**
 * Hero with breathing-dots effect. Uses CSS animation (radial wave) so it
 * works without Three.js. The full GitHub tutorial version lives in
 * BreathingDotsCanvas + BreathingDotsScene for use when R3F/React version is aligned.
 */
export function BreathingDotsHero() {
  const dots = useMemo(() => {
    return Array.from({ length: COLS * ROWS }, (_, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const dx = col - CENTER_X;
      const dy = row - CENTER_Y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return Math.round(distance * 2);
    });
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div
        className={styles.grid}
        style={
          {
            '--cols': COLS,
            '--rows': ROWS,
          } as React.CSSProperties
        }
      >
        {dots.map((delayIndex, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const isA = (row + col) % 2 === 0;
          return (
            <span
              key={i}
              className={`${styles.dot} ${isA ? styles.dotA : styles.dotB}`}
              style={{ '--i': delayIndex } as React.CSSProperties}
            />
          );
        })}
      </div>
      <div className={styles.vignette} aria-hidden="true" />
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
    </section>
  );
}

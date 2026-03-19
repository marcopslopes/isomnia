'use client';

import Image from 'next/image';
import heroImg from '../images/insomnia.png';
import styles from './BreathingDotsHero.module.css';

export function BreathingDotsHero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.bgImage} aria-hidden="true">
        <Image src={heroImg} alt="" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Open Icon Set · Free to Use</p>
        <h1 className={styles.title}>
          Ins<em>omnia</em>
        </h1>
        <p className={styles.descriptor}>
          163 animated icons built on a <em>5×5 dot grid.</em>
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
            <span>↓ Download Icons</span>
          </a>
          <a href="#icons" className={styles.ctaSecondary}>
            Browse icons
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { DotGrid } from './DotMatrixAnimations';
import type { AnimationName } from './DotMatrixAnimations';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import styles from './UseCasesSection.module.css';

const USE_CASES: {
  title: string;
  description: string;
  icons: AnimationName[];
}[] = [
  {
    title: 'Apps & Mobile',
    description: 'Navigation, states, and actions for every screen.',
    icons: ['notification', 'toggle', 'lock', 'menu', 'search', 'home'],
  },
  {
    title: 'Dashboards & Web',
    description: 'Signal, status, and data icons for complex UIs.',
    icons: ['graph', 'signal', 'progress', 'window', 'sidebar', 'wifi'],
  },
  {
    title: 'Motion & Animation',
    description: 'Every icon is animated. Frame by frame, dot by dot.',
    icons: ['pulse', 'wave', 'loading', 'spiral', 'confetti', 'burst'],
  },
  {
    title: 'Design Systems',
    description: 'Consistent 5×5 grid. Drop-in ready for any design system.',
    icons: ['settings', 'layers', 'code', 'chip', 'wand', 'brain'],
  },
];

export function UseCasesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>163 Icons · 5×5 Grid</p>
          <h2 className={styles.heading}>
            Use them anywhere<br />you <em>build.</em>
          </h2>
          <p className={styles.subtext}>
            Hand-crafted on a 5×5 dot grid. Pick one or take them all —
            free to use in apps, dashboards, motion projects, and design systems.
          </p>
        </div>

        <div className={styles.grid}>
          {USE_CASES.map((useCase) => (
            <div key={useCase.title} className={styles.card}>
              <GlowingEffect
                spread={40}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className={styles.cardInner}>
                <div className={styles.cardVisual}>
                  {useCase.icons.map((name) => (
                    <DotGrid
                      key={name}
                      animation={name}
                      size={40}
                      speed={200}
                      color="rgba(255,255,255,0.7)"
                    />
                  ))}
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>{useCase.title}</p>
                  <p className={styles.cardDesc}>{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

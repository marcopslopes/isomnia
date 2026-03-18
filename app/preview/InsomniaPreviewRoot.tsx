'use client';

import { useState } from 'react';
import { BreathingDotsHero } from '@/app/insomnia/BreathingDotsHero';
import { UseCasesSection } from '@/app/insomnia/UseCasesSection';
import { DotsPreviewClient } from './DotsPreviewClient';
import {
  type InsomniaColorVariant,
  INSOMNIA_COLOR_VARIANTS,
} from './insomniaColors';
import styles from '@/app/insomnia/DotMatrixAnimations.module.css';
import rootStyles from './InsomniaPreviewRoot.module.css';

export function InsomniaPreviewRoot() {
  const [variant, setVariant] = useState<InsomniaColorVariant>('white');
  const theme = INSOMNIA_COLOR_VARIANTS[variant];

  return (
    <main
      className={styles.previewPage}
      style={
        {
          paddingTop: 52,
          '--insomnia-dot-a': theme.dotA,
          '--insomnia-dot-b': theme.dotB,
          '--insomnia-dot-a-dim': theme.dimA,
          '--insomnia-dot-b-dim': theme.dimB,
          '--insomnia-glow-a': theme.glowA,
          '--insomnia-glow-b': theme.glowB,
          '--insomnia-glow': theme.glowA,
        } as React.CSSProperties
      }
    >
      <div className={rootStyles.colorBar}>
        <span className={rootStyles.colorBarLabel}>Color</span>
        <div className={rootStyles.colorSwatches} role="tablist" aria-label="Dot color variant">
          {(Object.keys(INSOMNIA_COLOR_VARIANTS) as InsomniaColorVariant[]).map(
            (v) => {
              const t = INSOMNIA_COLOR_VARIANTS[v];
              return (
                <button
                  key={v}
                  type="button"
                  role="tab"
                  aria-selected={v === variant}
                  aria-label={t.label}
                  className={t.isMixed ? rootStyles.swatchMixed : rootStyles.swatch}
                  data-active={v === variant}
                  style={
                    t.isMixed
                      ? ({ '--swatch-a': t.dotA, '--swatch-b': t.dotB } as React.CSSProperties)
                      : ({ '--swatch-color': t.dotA } as React.CSSProperties)
                  }
                  onClick={() => setVariant(v)}
                />
              );
            }
          )}
        </div>
        <span className={rootStyles.colorBarValue}>{theme.label}</span>
      </div>
      <BreathingDotsHero />
      <UseCasesSection />
      <DotsPreviewClient
        dotColor={!theme.isMixed ? theme.dotA : undefined}
        dotColorA={theme.isMixed ? theme.dotA : undefined}
        dotColorB={theme.isMixed ? theme.dotB : undefined}
      />
    </main>
  );
}

'use client';

import { useCallback } from 'react';
import type { AnimationName } from './DotMatrixAnimations';
import { DotGrid, getSvgForAnimation } from './DotMatrixAnimations';
import styles from './IconDetailModal.module.css';

const REACT_SNIPPET = (name: string) =>
  `<DotGrid animation="${name}" size={24} />`;

type Props = {
  name: AnimationName | null;
  onClose: () => void;
  /** Single dot color (e.g. from preview theme). */
  dotColor?: string;
  /** Two colors for checkerboard (use with dotColorB). */
  dotColorA?: string;
  dotColorB?: string;
};

export function IconDetailModal({
  name,
  onClose,
  dotColor,
  dotColorA,
  dotColorB,
}: Props) {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const copyCode = useCallback(() => {
    if (!name) return;
    navigator.clipboard.writeText(REACT_SNIPPET(name));
  }, [name]);

  const downloadSvg = useCallback(() => {
    if (!name) return;
    const svg = getSvgForAnimation(name, 64);
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }, [name]);

  if (name === null) return null;

  return (
    <>
      <div
        className={styles.backdrop}
        onClick={handleBackdropClick}
        aria-hidden
      />
      <div className={styles.modal} role="dialog" aria-labelledby="icon-modal-name">
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 2l12 12M14 2L2 14" />
          </svg>
        </button>
        <div className={styles.content}>
          <div className={styles.preview}>
            <div className={styles.previewIcon}>
              <DotGrid
                animation={name}
                size={48}
                color={dotColorA != null && dotColorB != null ? undefined : dotColor}
                colorA={dotColorA}
                colorB={dotColorB}
              />
            </div>
            <p className={styles.metaLabel}>Name</p>
            <p id="icon-modal-name" className={styles.name}>{name}</p>
            <p className={styles.metaLabel}>SVG</p>
            <div className={styles.actions}>
              <button type="button" className={styles.btn} onClick={downloadSvg}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 12V2M8 2L4 6M8 2l4 4" />
                  <path d="M2 14h12" />
                </svg>
                Download
              </button>
              <button
                type="button"
                className={styles.btn}
                onClick={() => {
                  navigator.clipboard.writeText(getSvgForAnimation(name, 64));
                }}
              >
                Copy SVG
              </button>
            </div>
          </div>
          <div className={styles.section}>
            <p className={styles.sectionTitle}>React</p>
            <div className={styles.codeBlock}>
              <code>{REACT_SNIPPET(name)}</code>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={copyCode}
                aria-label="Copy code"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="5" width="9" height="9" rx="1" />
                  <path d="M3 11V3a2 2 0 012-2h8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

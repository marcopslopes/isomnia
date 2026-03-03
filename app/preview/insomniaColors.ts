/**
 * Color variants for the Insomnia preview. Used for hero dots and showcase grid.
 * Single-color variants use dotA = dotB (same for dim/glow). Mixed variants use two colors
 * in a checkerboard pattern.
 */
export type InsomniaColorVariant =
  | 'white'
  | 'cyan'
  | 'magenta'
  | 'green'
  | 'cyan-magenta'
  | 'cyan-green'
  | 'magenta-green';

export type InsomniaVariantTheme = {
  label: string;
  dotA: string;
  dotB: string;
  dimA: string;
  dimB: string;
  glowA: string;
  glowB: string;
  /** True when two distinct colors (for swatch display). */
  isMixed: boolean;
};

export const INSOMNIA_COLOR_VARIANTS: Record<
  InsomniaColorVariant,
  InsomniaVariantTheme
> = {
  white: {
    label: 'White',
    dotA: '#ffffff',
    dotB: '#ffffff',
    dimA: 'rgba(255, 255, 255, 0.2)',
    dimB: 'rgba(255, 255, 255, 0.2)',
    glowA: 'rgba(255, 255, 255, 0.25)',
    glowB: 'rgba(255, 255, 255, 0.25)',
    isMixed: false,
  },
  cyan: {
    label: 'Neon cyan',
    dotA: '#22d3ee',
    dotB: '#22d3ee',
    dimA: 'rgba(34, 211, 238, 0.25)',
    dimB: 'rgba(34, 211, 238, 0.25)',
    glowA: 'rgba(34, 211, 238, 0.5)',
    glowB: 'rgba(34, 211, 238, 0.5)',
    isMixed: false,
  },
  magenta: {
    label: 'Neon magenta',
    dotA: '#e879f9',
    dotB: '#e879f9',
    dimA: 'rgba(232, 121, 249, 0.25)',
    dimB: 'rgba(232, 121, 249, 0.25)',
    glowA: 'rgba(232, 121, 249, 0.5)',
    glowB: 'rgba(232, 121, 249, 0.5)',
    isMixed: false,
  },
  green: {
    label: 'Neon green',
    dotA: '#4ade80',
    dotB: '#4ade80',
    dimA: 'rgba(74, 222, 128, 0.25)',
    dimB: 'rgba(74, 222, 128, 0.25)',
    glowA: 'rgba(74, 222, 128, 0.5)',
    glowB: 'rgba(74, 222, 128, 0.5)',
    isMixed: false,
  },
  'cyan-magenta': {
    label: 'Cyan + Magenta',
    dotA: '#22d3ee',
    dotB: '#e879f9',
    dimA: 'rgba(34, 211, 238, 0.25)',
    dimB: 'rgba(232, 121, 249, 0.25)',
    glowA: 'rgba(34, 211, 238, 0.5)',
    glowB: 'rgba(232, 121, 249, 0.5)',
    isMixed: true,
  },
  'cyan-green': {
    label: 'Cyan + Green',
    dotA: '#22d3ee',
    dotB: '#4ade80',
    dimA: 'rgba(34, 211, 238, 0.25)',
    dimB: 'rgba(74, 222, 128, 0.25)',
    glowA: 'rgba(34, 211, 238, 0.5)',
    glowB: 'rgba(74, 222, 128, 0.5)',
    isMixed: true,
  },
  'magenta-green': {
    label: 'Magenta + Green',
    dotA: '#e879f9',
    dotB: '#4ade80',
    dimA: 'rgba(232, 121, 249, 0.25)',
    dimB: 'rgba(74, 222, 128, 0.25)',
    glowA: 'rgba(232, 121, 249, 0.5)',
    glowB: 'rgba(74, 222, 128, 0.5)',
    isMixed: true,
  },
};

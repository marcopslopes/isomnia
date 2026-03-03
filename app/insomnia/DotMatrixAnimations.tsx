'use client';

import { useState, useEffect } from 'react';
import styles from './DotMatrixAnimations.module.css';

export type AnimationName =
  | 'confetti'
  | 'arrow'
  | 'windmill'
  | 'logo'
  | 'graph'
  | 'glitter'
  | 'burst'
  | 'snake'
  | 'pulse'
  | 'spiral'
  | 'rain'
  | 'wave'
  | 'heart'
  | 'clock'
  | 'orbit'
  | 'scan'
  | 'checker'
  | 'stairs'
  | 'cross'
  | 'dna'
  | 'wifi'
  | 'signal'
  | 'eye'
  | 'play'
  | 'loading'
  | 'target'
  | 'flame'
  | 'lightning'
  | 'sparkle'
  | 'hourglass'
  | 'crown'
  | 'lock'
  | 'toggle'
  | 'checkbox'
  | 'menu'
  | 'upload'
  | 'download'
  | 'search'
  | 'progress'
  | 'type'
  | 'expand'
  | 'slider'
  | 'notification'
  | 'window'
  | 'sort'
  | 'sidebar'
  | 'chevronRight'
  | 'chevronLeft'
  | 'chevronDown'
  | 'chevronUp'
  | 'arrowElbow'
  | 'arrowSplit'
  | 'arrowRefresh'
  | 'arrowSwap'
  | 'arrowUndo'
  | 'arrowBounce'
  | 'shapeSquare'
  | 'shapeTriangle'
  | 'shapeCircle'
  | 'shapeDiamond'
  | 'shapePentagon'
  | 'shapeHexagon'
  | 'shapeStar'
  | 'shapeHeart'
  | 'shapeCrescent'
  | 'shapeCross'
  | 'letterA'
  | 'letterB'
  | 'letterC'
  | 'letterD'
  | 'letterE'
  | 'letterF'
  | 'letterG'
  | 'letterH'
  | 'letterI'
  | 'letterJ'
  | 'letterK'
  | 'letterL'
  | 'letterM'
  | 'letterN'
  | 'letterO'
  | 'letterP'
  | 'letterQ'
  | 'letterR'
  | 'letterS'
  | 'letterT'
  | 'letterU'
  | 'letterV'
  | 'letterW'
  | 'letterX'
  | 'letterY'
  | 'letterZ'
  | 'number0'
  | 'number1'
  | 'number2'
  | 'number3'
  | 'number4'
  | 'number5'
  | 'number6'
  | 'number7'
  | 'number8'
  | 'number9'
  | 'star'
  | 'check'
  | 'close'
  | 'plus'
  | 'minus'
  | 'question'
  | 'exclamation'
  | 'at'
  | 'hash'
  | 'refresh'
  | 'settings'
  | 'home'
  | 'save'
  | 'share'
  | 'link'
  | 'trash'
  | 'pause'
  | 'stop'
  | 'record'
  | 'skipNext'
  | 'skipPrev'
  | 'mail'
  | 'send'
  | 'user'
  | 'location'
  | 'calendar'
  | 'brain'
  | 'chip'
  | 'robot'
  | 'lightbulb'
  | 'wand'
  | 'neural'
  | 'code'
  | 'layers'
  | 'infinity'
  | 'loop'
  | 'constellation'
  | 'vortex'
  | 'bloom'
  | 'ripple'
  | 'maze'
  | 'atom'
  | 'sun'
  | 'moon'
  | 'cloud'
  | 'snowflake'
  | 'leaf'
  | 'flower'
  | 'note'
  | 'volume'
  | 'mute'
  | 'mic'
  | 'phone'
  | 'camera'
  | 'folder'
  | 'file'
  | 'pencil'
  | 'scissors'
  | 'wrench'
  | 'shield'
  | 'warning';

export const ANIMATION_NAMES: AnimationName[] = [
  'confetti',
  'arrow',
  'windmill',
  'logo',
  'graph',
  'glitter',
  'burst',
  'snake',
  'pulse',
  'spiral',
  'rain',
  'wave',
  'heart',
  'clock',
  'orbit',
  'scan',
  'checker',
  'stairs',
  'cross',
  'dna',
  'wifi',
  'signal',
  'eye',
  'play',
  'loading',
  'target',
  'flame',
  'lightning',
  'sparkle',
  'hourglass',
  'crown',
  'lock',
  'toggle',
  'checkbox',
  'menu',
  'upload',
  'download',
  'search',
  'progress',
  'type',
  'expand',
  'slider',
  'notification',
  'window',
  'sort',
  'sidebar',
  'chevronRight',
  'chevronLeft',
  'chevronDown',
  'chevronUp',
  'arrowElbow',
  'arrowSplit',
  'arrowRefresh',
  'arrowSwap',
  'arrowUndo',
  'arrowBounce',
  'shapeSquare',
  'shapeTriangle',
  'shapeCircle',
  'shapeDiamond',
  'shapePentagon',
  'shapeHexagon',
  'shapeStar',
  'shapeHeart',
  'shapeCrescent',
  'shapeCross',
  'letterA',
  'letterB',
  'letterC',
  'letterD',
  'letterE',
  'letterF',
  'letterG',
  'letterH',
  'letterI',
  'letterJ',
  'letterK',
  'letterL',
  'letterM',
  'letterN',
  'letterO',
  'letterP',
  'letterQ',
  'letterR',
  'letterS',
  'letterT',
  'letterU',
  'letterV',
  'letterW',
  'letterX',
  'letterY',
  'letterZ',
  'number0',
  'number1',
  'number2',
  'number3',
  'number4',
  'number5',
  'number6',
  'number7',
  'number8',
  'number9',
  'star',
  'check',
  'close',
  'plus',
  'minus',
  'question',
  'exclamation',
  'at',
  'hash',
  'refresh',
  'settings',
  'home',
  'save',
  'share',
  'link',
  'trash',
  'pause',
  'stop',
  'record',
  'skipNext',
  'skipPrev',
  'mail',
  'send',
  'user',
  'location',
  'calendar',
  'brain',
  'chip',
  'robot',
  'lightbulb',
  'wand',
  'neural',
  'code',
  'layers',
  'infinity',
  'loop',
  'constellation',
  'vortex',
  'bloom',
  'ripple',
  'maze',
  'atom',
  'sun',
  'moon',
  'cloud',
  'snowflake',
  'leaf',
  'flower',
  'note',
  'volume',
  'mute',
  'mic',
  'phone',
  'camera',
  'folder',
  'file',
  'pencil',
  'scissors',
  'wrench',
  'shield',
  'warning',
];

export type ShowcaseTheme =
  | 'patterns'
  | 'symbols'
  | 'ui'
  | 'arrows'
  | 'shapes'
  | 'letters'
  | 'numbers'
  | 'media'
  | 'communication'
  | 'places'
  | 'ai'
  | 'abstract'
  | 'nature'
  | 'music'
  | 'tech'
  | 'tools'
  | 'status';

export const SHOWCASE_THEMES: { theme: ShowcaseTheme; title: string; names: AnimationName[] }[] = [
  {
    theme: 'patterns',
    title: 'Patterns',
    names: [
      'confetti', 'arrow', 'windmill', 'logo', 'graph', 'glitter', 'burst', 'snake',
      'pulse', 'spiral', 'rain', 'wave', 'heart', 'clock', 'orbit', 'scan',
      'checker', 'stairs', 'cross', 'dna',
    ],
  },
  {
    theme: 'symbols',
    title: 'Symbols',
    names: [
      'wifi', 'signal', 'eye', 'play', 'loading', 'target', 'flame', 'lightning',
      'sparkle', 'hourglass', 'crown', 'lock',
      'star', 'check', 'close', 'plus', 'minus', 'question', 'exclamation', 'at', 'hash',
    ],
  },
  {
    theme: 'ui',
    title: 'UI',
    names: [
      'toggle', 'checkbox', 'menu', 'upload', 'download', 'search', 'progress',
      'type', 'expand', 'slider', 'notification', 'window', 'sort', 'sidebar',
      'refresh', 'settings', 'home', 'save', 'share', 'link', 'trash',
    ],
  },
  {
    theme: 'arrows',
    title: 'Arrows',
    names: [
      'chevronRight', 'chevronLeft', 'chevronDown', 'chevronUp',
      'arrowElbow', 'arrowSplit', 'arrowRefresh', 'arrowSwap', 'arrowUndo', 'arrowBounce',
    ],
  },
  {
    theme: 'shapes',
    title: 'Shapes',
    names: [
      'shapeSquare', 'shapeTriangle', 'shapeCircle', 'shapeDiamond',
      'shapePentagon', 'shapeHexagon', 'shapeStar', 'shapeHeart', 'shapeCrescent', 'shapeCross',
    ],
  },
  {
    theme: 'letters',
    title: 'Letters',
    names: [
      'letterA', 'letterB', 'letterC', 'letterD', 'letterE', 'letterF', 'letterG',
      'letterH', 'letterI', 'letterJ', 'letterK', 'letterL', 'letterM', 'letterN',
      'letterO', 'letterP', 'letterQ', 'letterR', 'letterS', 'letterT', 'letterU',
      'letterV', 'letterW', 'letterX', 'letterY', 'letterZ',
    ],
  },
  {
    theme: 'numbers',
    title: 'Numbers',
    names: ['number0', 'number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9'],
  },
  {
    theme: 'media',
    title: 'Media',
    names: ['pause', 'stop', 'record', 'skipNext', 'skipPrev'],
  },
  {
    theme: 'communication',
    title: 'Communication',
    names: ['mail', 'send'],
  },
  {
    theme: 'places',
    title: 'Places & People',
    names: ['user', 'location', 'calendar'],
  },
  {
    theme: 'ai',
    title: 'AI',
    names: ['brain', 'chip', 'robot', 'lightbulb', 'wand', 'neural', 'code', 'layers'],
  },
  {
    theme: 'abstract',
    title: 'Abstract',
    names: ['infinity', 'loop', 'constellation', 'vortex', 'bloom', 'ripple', 'maze', 'atom'],
  },
  {
    theme: 'nature',
    title: 'Nature',
    names: ['sun', 'moon', 'cloud', 'snowflake', 'leaf', 'flower'],
  },
  {
    theme: 'music',
    title: 'Music & Sound',
    names: ['note', 'volume', 'mute', 'mic'],
  },
  {
    theme: 'tech',
    title: 'Tech & Files',
    names: ['phone', 'camera', 'folder', 'file'],
  },
  {
    theme: 'tools',
    title: 'Tools',
    names: ['pencil', 'scissors', 'wrench'],
  },
  {
    theme: 'status',
    title: 'Status & Safety',
    names: ['shield', 'warning'],
  },
];

const G = 5;
const CENTER = 2;

/* ── Frame helpers ─────────────────────────────── */

function mkGrid(): number[][] {
  return Array.from({ length: G }, () => Array(G).fill(0));
}

function setDot(g: number[][], r: number, c: number): void {
  if (r >= 0 && r < G && c >= 0 && c < G) g[r][c] = 1;
}

function toStr(g: number[][]): string {
  return g.flat().join('');
}

function mirror(frames: string[]): string[] {
  return [...frames, ...frames.slice(0, -1).reverse()];
}

/* ── Animation generators ──────────────────────── */

function genConfetti(): string[] {
  const fwd: string[] = [];
  for (let d = 0; d <= 4; d++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++)
        if (Math.abs(r - CENTER) + Math.abs(c - CENTER) <= d) g[r][c] = 1;
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genArrow(): string[] {
  const shape: [number, number][] = [
    [0, 4],
    [1, 3],
    [1, 4],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 3],
    [3, 4],
    [4, 4],
  ];

  const frames: string[] = [];

  for (let reveal = 0; reveal <= 4; reveal++) {
    const g = mkGrid();
    for (const [r, c] of shape) if (c <= reveal) setDot(g, r, c);
    frames.push(toStr(g));
  }

  frames.push(frames[frames.length - 1]);

  for (let hide = 0; hide <= 4; hide++) {
    const g = mkGrid();
    for (const [r, c] of shape) if (c > hide) setDot(g, r, c);
    frames.push(toStr(g));
  }

  return frames;
}

function genWindmill(): string[] {
  const dirs: [number, number][] = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  return dirs.map(([dr, dc]) => {
    const g = mkGrid();
    setDot(g, CENTER, CENTER);
    for (let i = 1; i <= 2; i++) {
      setDot(g, CENTER + dr * i, CENTER + dc * i);
      setDot(g, CENTER - dr * i, CENTER - dc * i);
    }
    const [pr, pc] = [dc, -dr];
    setDot(g, CENTER + dr * 2 + pr, CENTER + dc * 2 + pc);
    setDot(g, CENTER - dr * 2 - pr, CENTER - dc * 2 - pc);
    return toStr(g);
  });
}

function genLogo(): string[] {
  const fwd: string[] = [];

  let g = mkGrid();
  setDot(g, CENTER, CENTER);
  fwd.push(toStr(g));

  g = mkGrid();
  for (const [r, c] of [
    [2, 2],
    [1, 2],
    [3, 2],
    [2, 1],
    [2, 3],
  ] as [number, number][])
    setDot(g, r, c);
  fwd.push(toStr(g));

  g = mkGrid();
  for (let r = 1; r <= 3; r++)
    for (let c = 1; c <= 3; c++)
      if (r === 1 || r === 3 || c === 1 || c === 3) setDot(g, r, c);
  fwd.push(toStr(g));

  g = mkGrid();
  for (let r = 0; r < G; r++)
    for (let c = 0; c < G; c++)
      if (r === 0 || r === 4 || c === 0 || c === 4) setDot(g, r, c);
  setDot(g, CENTER, CENTER);
  fwd.push(toStr(g));

  g = mkGrid();
  for (let r = 0; r < G; r++) for (let c = 0; c < G; c++) g[r][c] = 1;
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genGraph(): string[] {
  const frames: string[] = [];
  for (let f = 0; f < 10; f++) {
    const g = mkGrid();
    for (let col = 0; col < G; col++) {
      const h = Math.round(
        1 + 3 * (0.5 + 0.5 * Math.sin(f * 0.7 + col * 1.3))
      );
      for (let row = G - h; row < G; row++) setDot(g, row, col);
    }
    frames.push(toStr(g));
  }
  return frames;
}

function genGlitter(): string[] {
  const frames: string[] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  for (let f = 0; f < 14; f++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++) if (rand() > 0.6) g[r][c] = 1;
    frames.push(toStr(g));
  }
  return frames;
}

function genBurst(): string[] {
  const frames: string[] = [];

  for (let d = 0; d <= 2; d++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++)
        if (Math.max(Math.abs(r - CENTER), Math.abs(c - CENTER)) <= d)
          g[r][c] = 1;
    frames.push(toStr(g));
  }

  frames.push(frames[frames.length - 1]);

  for (let d = 0; d <= 2; d++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++) {
        const dist = Math.max(Math.abs(r - CENTER), Math.abs(c - CENTER));
        if (dist === d) g[r][c] = 1;
      }
    frames.push(toStr(g));
  }

  frames.push(toStr(mkGrid()));
  return frames;
}

function genSnake(): string[] {
  const path: [number, number][] = [];
  for (let r = 0; r < G; r++) {
    if (r % 2 === 0) {
      for (let c = 0; c < G; c++) path.push([r, c]);
    } else {
      for (let c = G - 1; c >= 0; c--) path.push([r, c]);
    }
  }

  const frames: string[] = [];
  const tail = 5;

  for (let head = 0; head < path.length + tail; head++) {
    const g = mkGrid();
    for (
      let i = Math.max(0, head - tail + 1);
      i <= Math.min(head, path.length - 1);
      i++
    ) {
      const [r, c] = path[i];
      setDot(g, r, c);
    }
    frames.push(toStr(g));
  }

  return frames;
}

function genPulse(): string[] {
  const frames: string[] = [];
  for (let d = 0; d <= 2; d++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++)
        if (Math.max(Math.abs(r - CENTER), Math.abs(c - CENTER)) === d)
          g[r][c] = 1;
    frames.push(toStr(g));
  }
  frames.push(toStr(mkGrid()));
  return frames;
}

function genSpiral(): string[] {
  const path: [number, number][] = [];
  let top = 0,
    bottom = G - 1,
    left = 0,
    right = G - 1;
  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) path.push([top, c]);
    top++;
    for (let r = top; r <= bottom; r++) path.push([r, right]);
    right--;
    if (top <= bottom)
      for (let c = right; c >= left; c--) path.push([bottom, c]);
    bottom--;
    if (left <= right)
      for (let r = bottom; r >= top; r--) path.push([r, left]);
    left++;
  }
  const frames: string[] = [];
  const tail = 5;
  for (let head = 0; head < path.length + tail; head++) {
    const g = mkGrid();
    for (
      let i = Math.max(0, head - tail + 1);
      i <= Math.min(head, path.length - 1);
      i++
    ) {
      const [r, c] = path[i];
      setDot(g, r, c);
    }
    frames.push(toStr(g));
  }
  return frames;
}

function genRain(): string[] {
  const frames: string[] = [];
  const offsets = [0, 3, 1, 4, 2];
  for (let f = 0; f < 8; f++) {
    const g = mkGrid();
    for (let col = 0; col < G; col++) {
      const dropRow = (f + offsets[col]) % (G + 2);
      setDot(g, dropRow, col);
      setDot(g, dropRow - 1, col);
    }
    frames.push(toStr(g));
  }
  return frames;
}

function genWave(): string[] {
  const frames: string[] = [];
  for (let f = 0; f < 12; f++) {
    const g = mkGrid();
    for (let col = 0; col < G; col++) {
      const row = Math.round(2 + 1.8 * Math.sin(f * 0.5 + col * 1.2));
      setDot(g, row, col);
    }
    frames.push(toStr(g));
  }
  return frames;
}

function genHeart(): string[] {
  const shape: [number, number][] = [
    [0, 1],
    [0, 3],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [4, 2],
  ];
  const fwd: string[] = [];
  const stages = [
    [[2, 2]],
    [
      [2, 2],
      [3, 2],
      [1, 2],
    ],
    [
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 2],
    ],
    [
      [0, 1],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ],
    shape,
  ];
  for (const dots of stages) {
    const g = mkGrid();
    for (const [r, c] of dots) setDot(g, r, c);
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genClock(): string[] {
  const tips: [number, number][] = [
    [0, 2],
    [0, 4],
    [2, 4],
    [4, 4],
    [4, 2],
    [4, 0],
    [2, 0],
    [0, 0],
  ];
  const mids: [number, number][] = [
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 3],
    [3, 2],
    [3, 1],
    [2, 1],
    [1, 1],
  ];
  return tips.map(([tr, tc], i) => {
    const [mr, mc] = mids[i];
    const g = mkGrid();
    setDot(g, CENTER, CENTER);
    setDot(g, mr, mc);
    setDot(g, tr, tc);
    return toStr(g);
  });
}

function genOrbit(): string[] {
  const ring: [number, number][] = [
    [0, 2],
    [0, 4],
    [2, 4],
    [4, 4],
    [4, 2],
    [4, 0],
    [2, 0],
    [0, 0],
  ];
  return ring.map((_, i) => {
    const g = mkGrid();
    setDot(g, CENTER, CENTER);
    const [r1, c1] = ring[i % ring.length];
    const [r2, c2] = ring[(i + 4) % ring.length];
    setDot(g, r1, c1);
    setDot(g, r2, c2);
    return toStr(g);
  });
}

function genScan(): string[] {
  const fwd: string[] = [];
  for (let row = 0; row < G; row++) {
    const g = mkGrid();
    for (let c = 0; c < G; c++) setDot(g, row, c);
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genChecker(): string[] {
  const frames: string[] = [];
  for (let phase = 0; phase < 2; phase++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++)
        if ((r + c + phase) % 2 === 0) g[r][c] = 1;
    frames.push(toStr(g));
  }
  return frames;
}

function genStairs(): string[] {
  const fwd: string[] = [];
  for (let d = 0; d <= G * 2 - 2; d++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++)
      for (let c = 0; c < G; c++) if (r + c <= d) g[r][c] = 1;
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genCross(): string[] {
  const frames: string[] = [];
  const plus = () => {
    const g = mkGrid();
    for (let i = 0; i < G; i++) {
      setDot(g, CENTER, i);
      setDot(g, i, CENTER);
    }
    return toStr(g);
  };
  const x = () => {
    const g = mkGrid();
    for (let i = 0; i < G; i++) {
      setDot(g, i, i);
      setDot(g, i, G - 1 - i);
    }
    return toStr(g);
  };
  const both = () => {
    const g = mkGrid();
    for (let i = 0; i < G; i++) {
      setDot(g, CENTER, i);
      setDot(g, i, CENTER);
      setDot(g, i, i);
      setDot(g, i, G - 1 - i);
    }
    return toStr(g);
  };
  frames.push(plus(), both(), x(), both());
  return frames;
}

function genDna(): string[] {
  const frames: string[] = [];
  for (let f = 0; f < 12; f++) {
    const g = mkGrid();
    for (let r = 0; r < G; r++) {
      const c1 = Math.round(2 + 1.5 * Math.sin(r * 1.3 + f * 0.5));
      const c2 = Math.round(2 + 1.5 * Math.sin(r * 1.3 + f * 0.5 + Math.PI));
      setDot(g, r, c1);
      setDot(g, r, c2);
      const minC = Math.min(c1, c2);
      const maxC = Math.max(c1, c2);
      if (r % 2 === 0)
        for (let c = minC; c <= maxC; c++) setDot(g, r, c);
    }
    frames.push(toStr(g));
  }
  return frames;
}

function genWifi(): string[] {
  const fwd: string[] = [];
  let g = mkGrid();
  setDot(g, 4, 2);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 4, 2);
  setDot(g, 2, 2);
  setDot(g, 3, 1);
  setDot(g, 3, 3);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 4, 2);
  setDot(g, 2, 2);
  setDot(g, 3, 1);
  setDot(g, 3, 3);
  setDot(g, 0, 1);
  setDot(g, 0, 2);
  setDot(g, 0, 3);
  setDot(g, 1, 0);
  setDot(g, 1, 4);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genSignal(): string[] {
  const heights = [1, 2, 3, 4, 5];
  const fwd: string[] = [];
  fwd.push(toStr(mkGrid()));
  for (let bars = 1; bars <= G; bars++) {
    const g = mkGrid();
    for (let col = 0; col < bars; col++) {
      const h = heights[col];
      for (let row = G - h; row < G; row++) setDot(g, row, col);
    }
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genEye(): string[] {
  const frames: string[] = [];

  let g = mkGrid();
  for (let c = 0; c < G; c++) setDot(g, 2, c);
  frames.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) setDot(g, 2, c);
  setDot(g, 1, 1);
  setDot(g, 1, 2);
  setDot(g, 1, 3);
  setDot(g, 3, 1);
  setDot(g, 3, 2);
  setDot(g, 3, 3);
  frames.push(toStr(g));

  g = mkGrid();
  setDot(g, 0, 2);
  setDot(g, 1, 1);
  setDot(g, 1, 3);
  setDot(g, 2, 0);
  setDot(g, 2, 2);
  setDot(g, 2, 4);
  setDot(g, 3, 1);
  setDot(g, 3, 3);
  setDot(g, 4, 2);
  frames.push(toStr(g));

  frames.push(frames[2]);
  frames.push(frames[2]);

  frames.push(frames[1]);
  frames.push(frames[0]);
  frames.push(frames[0]);

  return frames;
}

function genPlay(): string[] {
  const shape: [number, number][] = [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 1],
    [4, 0],
  ];
  const fwd: string[] = [];
  for (let reveal = 0; reveal <= 2; reveal++) {
    const g = mkGrid();
    for (const [r, c] of shape) if (c <= reveal) setDot(g, r, c);
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genLoading(): string[] {
  const ring: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 3],
    [4, 2],
    [4, 1],
    [3, 0],
    [2, 0],
    [1, 0],
  ];
  return ring.map((_, i) => {
    const g = mkGrid();
    for (let t = 0; t < 3; t++) {
      const [r, c] = ring[(i + t) % ring.length];
      setDot(g, r, c);
    }
    return toStr(g);
  });
}

function genTarget(): string[] {
  const fwd: string[] = [];

  let g = mkGrid();
  setDot(g, 0, 0);
  setDot(g, 0, 1);
  setDot(g, 1, 0);
  setDot(g, 0, 3);
  setDot(g, 0, 4);
  setDot(g, 1, 4);
  setDot(g, 3, 0);
  setDot(g, 4, 0);
  setDot(g, 4, 1);
  setDot(g, 3, 4);
  setDot(g, 4, 3);
  setDot(g, 4, 4);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 1, 1);
  setDot(g, 1, 2);
  setDot(g, 1, 3);
  setDot(g, 2, 1);
  setDot(g, 2, 3);
  setDot(g, 3, 1);
  setDot(g, 3, 2);
  setDot(g, 3, 3);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 2, 2);
  setDot(g, 0, 2);
  setDot(g, 1, 2);
  setDot(g, 3, 2);
  setDot(g, 4, 2);
  setDot(g, 2, 0);
  setDot(g, 2, 1);
  setDot(g, 2, 3);
  setDot(g, 2, 4);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 2, 2);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genFlame(): string[] {
  const shapes: [number, number][][] = [
    [
      [0, 2],
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
    [
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
    [
      [0, 3],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
    [
      [0, 2],
      [0, 3],
      [1, 2],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
  ];
  return shapes.map((dots) => {
    const g = mkGrid();
    for (const [r, c] of dots) setDot(g, r, c);
    return toStr(g);
  });
}

function genLightning(): string[] {
  const bolt: [number, number][] = [
    [0, 2],
    [0, 3],
    [1, 2],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [4, 0],
    [4, 1],
  ];
  const on = (() => {
    const g = mkGrid();
    for (const [r, c] of bolt) setDot(g, r, c);
    return toStr(g);
  })();
  const off = toStr(mkGrid());
  return [off, on, on, off, off, on, off, off, off];
}

function genSparkle(): string[] {
  const fwd: string[] = [];

  let g = mkGrid();
  setDot(g, 2, 2);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 2, 2);
  setDot(g, 1, 2);
  setDot(g, 3, 2);
  setDot(g, 2, 1);
  setDot(g, 2, 3);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 2, 2);
  setDot(g, 0, 2);
  setDot(g, 4, 2);
  setDot(g, 2, 0);
  setDot(g, 2, 4);
  setDot(g, 1, 1);
  setDot(g, 1, 3);
  setDot(g, 3, 1);
  setDot(g, 3, 3);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 2, 2);
  setDot(g, 0, 2);
  setDot(g, 4, 2);
  setDot(g, 2, 0);
  setDot(g, 2, 4);
  setDot(g, 0, 0);
  setDot(g, 0, 4);
  setDot(g, 4, 0);
  setDot(g, 4, 4);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genHourglass(): string[] {
  const topSand: [number, number][][] = [
    [
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    [
      [1, 2],
      [1, 3],
    ],
    [[1, 3]],
    [],
  ];
  const bottomSand: [number, number][][] = [
    [],
    [[3, 1]],
    [
      [3, 1],
      [3, 2],
    ],
    [
      [3, 1],
      [3, 2],
      [3, 3],
    ],
  ];
  const frames: string[] = [];
  for (let i = 0; i < topSand.length; i++) {
    const g = mkGrid();
    for (let c = 0; c < G; c++) {
      setDot(g, 0, c);
      setDot(g, 4, c);
    }
    setDot(g, 2, 2);
    for (const [r, c] of topSand[i]) setDot(g, r, c);
    for (const [r, c] of bottomSand[i]) setDot(g, r, c);
    frames.push(toStr(g));
  }
  return mirror(frames);
}

function genCrown(): string[] {
  const fwd: string[] = [];

  let g = mkGrid();
  for (let c = 0; c < G; c++) setDot(g, 4, c);
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 3, c);
    setDot(g, 4, c);
  }
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 2, c);
    setDot(g, 3, c);
    setDot(g, 4, c);
  }
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 2, c);
    setDot(g, 3, c);
    setDot(g, 4, c);
  }
  setDot(g, 1, 0);
  setDot(g, 1, 2);
  setDot(g, 1, 4);
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 2, c);
    setDot(g, 3, c);
    setDot(g, 4, c);
  }
  setDot(g, 1, 0);
  setDot(g, 1, 2);
  setDot(g, 1, 4);
  setDot(g, 0, 0);
  setDot(g, 0, 2);
  setDot(g, 0, 4);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genLock(): string[] {
  const body = (g: number[][]) => {
    for (let c = 0; c < G; c++) {
      setDot(g, 2, c);
      setDot(g, 4, c);
    }
    setDot(g, 3, 0);
    setDot(g, 3, 2);
    setDot(g, 3, 4);
  };
  const frames: string[] = [];

  let g = mkGrid();
  body(g);
  setDot(g, 0, 1);
  setDot(g, 0, 2);
  setDot(g, 0, 3);
  setDot(g, 1, 1);
  setDot(g, 1, 3);
  frames.push(toStr(g));
  frames.push(toStr(g));

  g = mkGrid();
  body(g);
  setDot(g, 0, 3);
  setDot(g, 0, 4);
  setDot(g, 1, 1);
  setDot(g, 1, 4);
  frames.push(toStr(g));

  g = mkGrid();
  body(g);
  frames.push(toStr(g));
  frames.push(toStr(g));
  frames.push(toStr(g));

  frames.push(frames[2]);

  return frames;
}

function genToggle(): string[] {
  const fwd: string[] = [];
  for (let pos = 0; pos < G; pos++) {
    const g = mkGrid();
    for (let c = 0; c < G; c++) setDot(g, 2, c);
    setDot(g, 1, pos);
    setDot(g, 3, pos);
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genCheckbox(): string[] {
  const frames: string[] = [];
  const box = (): number[][] => {
    const g = mkGrid();
    for (let c = 0; c < G; c++) {
      setDot(g, 0, c);
      setDot(g, 4, c);
    }
    for (let r = 1; r < G - 1; r++) {
      setDot(g, r, 0);
      setDot(g, r, 4);
    }
    return g;
  };

  frames.push(toStr(box()));
  frames.push(toStr(box()));

  let g = box();
  setDot(g, 3, 1);
  frames.push(toStr(g));

  g = box();
  setDot(g, 3, 1);
  setDot(g, 2, 2);
  frames.push(toStr(g));

  g = box();
  setDot(g, 3, 1);
  setDot(g, 2, 2);
  setDot(g, 1, 3);
  frames.push(toStr(g));

  frames.push(frames[4]);
  frames.push(frames[4]);
  frames.push(frames[4]);

  frames.push(frames[3]);
  frames.push(frames[2]);
  frames.push(frames[0]);

  return frames;
}

function genMenuIcon(): string[] {
  const frames: string[] = [];

  let g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 0, c);
    setDot(g, 2, c);
    setDot(g, 4, c);
  }
  frames.push(toStr(g));
  frames.push(toStr(g));

  g = mkGrid();
  for (let c = 1; c < G - 1; c++) {
    setDot(g, 1, c);
    setDot(g, 2, c);
    setDot(g, 3, c);
  }
  frames.push(toStr(g));

  g = mkGrid();
  for (let i = 0; i < G; i++) {
    setDot(g, i, i);
    setDot(g, i, G - 1 - i);
  }
  frames.push(toStr(g));
  frames.push(toStr(g));
  frames.push(toStr(g));

  frames.push(frames[2]);

  return frames;
}

function genUpload(): string[] {
  const shape: [number, number][] = [
    [0, 2],
    [1, 1],
    [1, 3],
    [2, 2],
    [3, 2],
  ];
  const frames: string[] = [];
  for (let shift = 4; shift >= -4; shift--) {
    const g = mkGrid();
    for (const [r, c] of shape) setDot(g, r + shift, c);
    frames.push(toStr(g));
  }
  return frames;
}

function genDownload(): string[] {
  const shape: [number, number][] = [
    [0, 2],
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
  ];
  const frames: string[] = [];
  for (let shift = -4; shift <= 4; shift++) {
    const g = mkGrid();
    for (const [r, c] of shape) setDot(g, r + shift, c);
    frames.push(toStr(g));
  }
  return frames;
}

function genSearch(): string[] {
  const fwd: string[] = [];
  const lens = (g: number[][]) => {
    setDot(g, 0, 1);
    setDot(g, 0, 2);
    setDot(g, 1, 0);
    setDot(g, 1, 3);
    setDot(g, 2, 1);
    setDot(g, 2, 2);
  };
  const handle = (g: number[][]) => {
    setDot(g, 3, 3);
    setDot(g, 4, 4);
  };

  let g = mkGrid();
  handle(g);
  fwd.push(toStr(g));

  g = mkGrid();
  lens(g);
  handle(g);
  fwd.push(toStr(g));

  g = mkGrid();
  lens(g);
  handle(g);
  setDot(g, 1, 1);
  setDot(g, 1, 2);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genProgress(): string[] {
  const frames: string[] = [];
  frames.push(toStr(mkGrid()));
  for (let fill = 1; fill <= G; fill++) {
    const g = mkGrid();
    for (let c = 0; c < fill; c++) {
      setDot(g, 1, c);
      setDot(g, 2, c);
      setDot(g, 3, c);
    }
    frames.push(toStr(g));
  }
  frames.push(frames[frames.length - 1]);
  frames.push(toStr(mkGrid()));
  frames.push(toStr(mkGrid()));
  return frames;
}

function genTypeAnim(): string[] {
  const frames: string[] = [];
  for (let typed = 0; typed <= G; typed++) {
    const g = mkGrid();
    for (let c = 0; c < typed; c++) setDot(g, 2, c);
    if (typed < G) {
      setDot(g, 1, typed);
      setDot(g, 2, typed);
      setDot(g, 3, typed);
    }
    frames.push(toStr(g));
    const g2 = mkGrid();
    for (let c = 0; c < typed; c++) setDot(g2, 2, c);
    frames.push(toStr(g2));
  }
  return frames;
}

function genExpand(): string[] {
  const fwd: string[] = [];

  let g = mkGrid();
  setDot(g, 2, 2);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 1, 1);
  setDot(g, 1, 3);
  setDot(g, 3, 1);
  setDot(g, 3, 3);
  fwd.push(toStr(g));

  g = mkGrid();
  setDot(g, 0, 0);
  setDot(g, 0, 1);
  setDot(g, 1, 0);
  setDot(g, 0, 3);
  setDot(g, 0, 4);
  setDot(g, 1, 4);
  setDot(g, 3, 0);
  setDot(g, 4, 0);
  setDot(g, 4, 1);
  setDot(g, 3, 4);
  setDot(g, 4, 3);
  setDot(g, 4, 4);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genSlider(): string[] {
  const fwd: string[] = [];
  for (let pos = 0; pos < G; pos++) {
    const g = mkGrid();
    for (let c = 0; c < G; c++) setDot(g, 2, c);
    setDot(g, 1, pos);
    setDot(g, 3, pos);
    for (let c = 0; c < pos; c++) {
      setDot(g, 1, c);
      setDot(g, 3, c);
    }
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

function genNotification(): string[] {
  const circle = (g: number[][]) => {
    setDot(g, 0, 1);
    setDot(g, 0, 2);
    setDot(g, 0, 3);
    setDot(g, 1, 0);
    setDot(g, 1, 4);
    setDot(g, 2, 0);
    setDot(g, 2, 4);
    setDot(g, 3, 0);
    setDot(g, 3, 4);
    setDot(g, 4, 1);
    setDot(g, 4, 2);
    setDot(g, 4, 3);
  };
  const frames: string[] = [];

  let g = mkGrid();
  circle(g);
  frames.push(toStr(g));
  frames.push(toStr(g));

  g = mkGrid();
  circle(g);
  setDot(g, 0, 4);
  frames.push(toStr(g));
  frames.push(toStr(g));
  frames.push(toStr(g));

  frames.push(frames[0]);
  frames.push(frames[2]);
  frames.push(frames[0]);

  return frames;
}

function genWindow(): string[] {
  const fwd: string[] = [];

  fwd.push(toStr(mkGrid()));

  let g = mkGrid();
  for (let c = 0; c < G; c++) setDot(g, 0, c);
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) setDot(g, 0, c);
  for (let r = 1; r <= 2; r++) {
    setDot(g, r, 0);
    setDot(g, r, 4);
  }
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 0, c);
    setDot(g, 4, c);
  }
  for (let r = 1; r <= 3; r++) {
    setDot(g, r, 0);
    setDot(g, r, 4);
  }
  fwd.push(toStr(g));

  g = mkGrid();
  for (let c = 0; c < G; c++) {
    setDot(g, 0, c);
    setDot(g, 4, c);
  }
  for (let r = 1; r <= 3; r++) {
    setDot(g, r, 0);
    setDot(g, r, 4);
  }
  setDot(g, 1, 1);
  setDot(g, 1, 2);
  setDot(g, 1, 3);
  setDot(g, 2, 1);
  setDot(g, 2, 2);
  setDot(g, 3, 1);
  setDot(g, 3, 2);
  setDot(g, 3, 3);
  fwd.push(toStr(g));

  return mirror(fwd);
}

function genSort(): string[] {
  const up = (() => {
    const g = mkGrid();
    setDot(g, 0, 2);
    setDot(g, 1, 1);
    setDot(g, 1, 2);
    setDot(g, 1, 3);
    setDot(g, 2, 2);
    setDot(g, 3, 2);
    return toStr(g);
  })();
  const down = (() => {
    const g = mkGrid();
    setDot(g, 1, 2);
    setDot(g, 2, 2);
    setDot(g, 3, 1);
    setDot(g, 3, 2);
    setDot(g, 3, 3);
    setDot(g, 4, 2);
    return toStr(g);
  })();
  const mid = (() => {
    const g = mkGrid();
    for (let c = 0; c < G; c++) setDot(g, 2, c);
    return toStr(g);
  })();
  return [up, up, mid, down, down, mid];
}

function genSidebar(): string[] {
  const content = (g: number[][]) => {
    setDot(g, 0, 3);
    setDot(g, 0, 4);
    setDot(g, 1, 3);
    setDot(g, 2, 3);
    setDot(g, 2, 4);
    setDot(g, 3, 3);
    setDot(g, 4, 3);
    setDot(g, 4, 4);
  };
  const fwd: string[] = [];
  for (let width = 0; width <= 2; width++) {
    const g = mkGrid();
    content(g);
    for (let r = 0; r < G; r++)
      for (let c = 0; c < width; c++) setDot(g, r, c);
    fwd.push(toStr(g));
  }
  fwd.push(fwd[fwd.length - 1]);
  return mirror(fwd);
}

function buildFromTip(stages: [number, number][][]): string[] {
  const fwd: string[] = [];
  const all: [number, number][] = [];
  for (const stage of stages) {
    all.push(...stage);
    const g = mkGrid();
    for (const [r, c] of all) setDot(g, r, c);
    fwd.push(toStr(g));
  }
  return mirror(fwd);
}

/* →  Right arrow: draws shaft from left, finishes at tip */
function genChevronRight(): string[] {
  return buildFromTip([
    [[2, 0], [2, 1]],
    [[2, 2]],
    [[2, 3]],
    [[0, 4], [4, 4]],
    [[1, 3], [3, 3]],
    [[2, 4]],
  ]);
}

/* ←  Left arrow: draws shaft from right, finishes at tip */
function genChevronLeft(): string[] {
  return buildFromTip([
    [[2, 4], [2, 3]],
    [[2, 2]],
    [[2, 1]],
    [[0, 0], [4, 0]],
    [[1, 1], [3, 1]],
    [[2, 0]],
  ]);
}

/* ↓  Down arrow: draws shaft from top, finishes at tip */
function genChevronDown(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 2]],
    [[2, 2]],
    [[3, 1], [3, 3]],
    [[4, 2]],
  ]);
}

/* ↑  Up arrow: draws shaft from bottom, finishes at tip */
function genChevronUp(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[3, 2]],
    [[2, 2]],
    [[1, 1], [1, 3]],
    [[0, 2]],
  ]);
}

/* ↳  Elbow: draws from tail down, turns right to tip */
function genArrowElbow(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[1, 1]],
    [[2, 1]],
    [[3, 1], [3, 2]],
    [[3, 3]],
    [[2, 4], [4, 4]],
    [[3, 4]],
  ]);
}

/* ⇅  Split: center expands into up + down arrow tips */
function genArrowSplit(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[1, 2], [3, 2]],
    [[0, 2], [4, 2]],
    [
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
    ],
  ]);
}

/* ↘  Down-right: shaft from top-left, tip at bottom-right */
function genArrowRefresh(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 1]],
    [[2, 2]],
    [[3, 3]],
    [[4, 3], [3, 4]],
    [[4, 4]],
  ]);
}

/* ↙  Down-left: shaft from top-right, tip at bottom-left */
function genArrowSwap(): string[] {
  return buildFromTip([
    [[0, 4]],
    [[1, 3]],
    [[2, 2]],
    [[3, 1]],
    [[4, 1], [3, 0]],
    [[4, 0]],
  ]);
}

/* ↗  Up-right: shaft from bottom-left, tip at top-right */
function genArrowUndo(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 1]],
    [[2, 2]],
    [[1, 3]],
    [[0, 3], [1, 4]],
    [[0, 4]],
  ]);
}

/* ↖  Up-left: shaft from bottom-right, tip at top-left */
function genArrowBounce(): string[] {
  return buildFromTip([
    [[4, 4]],
    [[3, 3]],
    [[2, 2]],
    [[1, 1]],
    [[0, 1], [1, 0]],
    [[0, 0]],
  ]);
}

/* ── Geometric shapes ─────────────────────────── */

function genShapeSquare(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 4], [2, 4], [3, 4]],
    [[4, 4], [4, 3], [4, 2], [4, 1], [4, 0]],
    [[3, 0], [2, 0], [1, 0]],
  ]);
}

function genShapeTriangle(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[4, 1], [4, 2], [4, 3], [4, 4]],
    [[3, 0], [3, 4]],
    [[2, 0], [2, 4]],
    [[1, 1], [1, 3]],
    [[0, 2]],
  ]);
}

function genShapeCircle(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[0, 1], [0, 3]],
    [[1, 4], [2, 4]],
    [[3, 4], [4, 3]],
    [[4, 2], [4, 1]],
    [[3, 0], [2, 0]],
    [[1, 0]],
  ]);
}

function genShapeDiamond(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 3], [2, 4]],
    [[3, 3], [4, 2]],
    [[3, 1], [2, 0]],
    [[1, 1]],
  ]);
}

function genShapePentagon(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[0, 1], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genShapeHexagon(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 0]],
    [[2, 0]],
    [[3, 2]],
    [[2, 4]],
    [[1, 4]],
  ]);
}

function genShapeStar(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 0], [1, 4]],
    [[2, 2]],
    [[3, 0], [3, 4]],
    [[4, 2]],
  ]);
}

function genShapeHeart(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[3, 1], [3, 3]],
    [[2, 0], [2, 4]],
    [[1, 0], [1, 4]],
    [[0, 1], [0, 3]],
  ]);
}

function genShapeCrescent(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 2]],
    [[3, 2]],
    [[2, 2]],
    [[1, 2]],
  ]);
}

function genShapeCross(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [1, 2], [3, 2], [4, 2]],
    [[2, 0], [2, 1], [2, 3], [2, 4]],
  ]);
}

/* ── Letter shapes (A–Z) ─────────────────────── */

function genLetterA(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0]],
    [[2, 0]],
    [[2, 1], [2, 2], [2, 3], [2, 4]],
    [[3, 4], [4, 4]],
    [[1, 1], [1, 3]],
    [[0, 2]],
  ]);
}

function genLetterB(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[0, 1], [0, 2]],
    [[1, 3]],
    [[2, 1], [2, 2]],
    [[3, 3]],
    [[4, 1], [4, 2]],
  ]);
}

function genLetterC(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3], [0, 4]],
    [[1, 0]],
    [[2, 0]],
    [[3, 0]],
    [[4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genLetterD(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[0, 1], [0, 2]],
    [[1, 3]],
    [[2, 4]],
    [[3, 3]],
    [[4, 1], [4, 2]],
  ]);
}

function genLetterE(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[4, 1], [4, 2], [4, 3], [4, 4]],
    [[2, 1], [2, 2]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
  ]);
}

function genLetterF(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[2, 1], [2, 2]],
  ]);
}

function genLetterG(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0]],
    [[2, 0]],
    [[3, 0], [3, 4]],
    [[2, 3], [2, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genLetterH(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[2, 1], [2, 2], [2, 3], [2, 4]],
    [[1, 4], [0, 4]],
    [[3, 4], [4, 4]],
  ]);
}

function genLetterI(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[4, 0], [4, 1], [4, 3], [4, 4]],
    [[3, 2], [2, 2]],
    [[1, 2]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
  ]);
}

function genLetterJ(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3], [0, 4]],
    [[1, 3], [2, 3]],
    [[3, 0], [3, 3]],
    [[4, 1], [4, 2]],
  ]);
}

function genLetterK(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[2, 1]],
    [[1, 2], [0, 3]],
    [[3, 2], [4, 3]],
  ]);
}

function genLetterL(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 0], [2, 0]],
    [[3, 0], [4, 0]],
    [[4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genLetterM(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [4, 4]],
    [[2, 0], [3, 4]],
    [[1, 0], [2, 4]],
    [[0, 0], [1, 4]],
    [[0, 4]],
    [[1, 1], [1, 3]],
    [[2, 2]],
  ]);
}

function genLetterN(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[1, 1]],
    [[2, 2]],
    [[3, 3]],
    [[0, 4], [1, 4]],
    [[2, 4], [3, 4], [4, 4]],
  ]);
}

function genLetterO(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[4, 1], [4, 3]],
    [[3, 0], [3, 4]],
    [[2, 0], [2, 4]],
    [[1, 0], [1, 4]],
    [[0, 1], [0, 2], [0, 3]],
  ]);
}

function genLetterP(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[0, 1], [0, 2]],
    [[1, 3]],
    [[2, 1], [2, 2]],
  ]);
}

function genLetterQ(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 3]],
    [[4, 1], [4, 2]],
    [[4, 4]],
  ]);
}

function genLetterR(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[0, 1], [0, 2]],
    [[1, 3]],
    [[2, 1], [2, 2]],
    [[3, 2]],
    [[4, 3]],
  ]);
}

function genLetterS(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3], [0, 4]],
    [[1, 0]],
    [[2, 1], [2, 2], [2, 3]],
    [[3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3]],
  ]);
}

function genLetterT(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[0, 0], [0, 1], [0, 3], [0, 4]],
    [[1, 2], [2, 2]],
    [[3, 2], [4, 2]],
  ]);
}

function genLetterU(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 0], [2, 0]],
    [[3, 0]],
    [[4, 1], [4, 2], [4, 3]],
    [[3, 4]],
    [[2, 4], [1, 4], [0, 4]],
  ]);
}

function genLetterV(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 4]],
    [[1, 0], [1, 4]],
    [[2, 1], [2, 3]],
    [[3, 1], [3, 3]],
    [[4, 2]],
  ]);
}

function genLetterW(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 0], [0, 4]],
    [[2, 0], [1, 4]],
    [[3, 0], [2, 4]],
    [[3, 1], [3, 3], [3, 4]],
    [[4, 1], [4, 3]],
    [[2, 2]],
  ]);
}

function genLetterX(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 4]],
    [[1, 1], [1, 3]],
    [[2, 2]],
    [[3, 1], [3, 3]],
    [[4, 0], [4, 4]],
  ]);
}

function genLetterY(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 4]],
    [[1, 1], [1, 3]],
    [[2, 2]],
    [[3, 2]],
    [[4, 2]],
  ]);
}

function genLetterZ(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 3]],
    [[2, 2]],
    [[3, 1]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

/* ── Numbers (0–9) ─────────────────────────────── */

function genNumber0(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[4, 1], [4, 3]],
    [[3, 0], [3, 4]],
    [[2, 0], [2, 4]],
    [[1, 0], [1, 4]],
    [[0, 1], [0, 2], [0, 3]],
  ]);
}

function genNumber1(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[3, 2], [2, 2]],
    [[1, 2]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
  ]);
}

function genNumber2(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3], [0, 4]],
    [[1, 0], [1, 4]],
    [[2, 3]],
    [[3, 2]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genNumber3(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3], [0, 4]],
    [[1, 0], [1, 4]],
    [[2, 1], [2, 2], [2, 3]],
    [[3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3]],
  ]);
}

function genNumber4(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0]],
    [[1, 0], [0, 0]],
    [[1, 1], [1, 2], [1, 3], [1, 4]],
    [[2, 4], [3, 4], [4, 4]],
  ]);
}

function genNumber5(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 0]],
    [[2, 0], [2, 1], [2, 2], [2, 3]],
    [[3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3]],
  ]);
}

function genNumber6(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[2, 1], [2, 3]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
    [[1, 0]],
    [[0, 1], [0, 2], [0, 3]],
  ]);
}

function genNumber7(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 4]],
    [[2, 3]],
    [[3, 2]],
    [[4, 1], [4, 0]],
  ]);
}

function genNumber8(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[1, 1], [1, 3]],
    [[2, 0], [2, 4]],
    [[0, 1], [0, 2], [0, 3]],
    [[1, 0], [1, 4]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genNumber9(): string[] {
  return buildFromTip([
    [[3, 2]],
    [[2, 1], [2, 3]],
    [[1, 0], [1, 4]],
    [[0, 1], [0, 2], [0, 3]],
    [[2, 4], [3, 4]],
    [[4, 2], [4, 3]],
  ]);
}

/* ── Extra symbols ─────────────────────────────── */

function genStar(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 2]],
  ]);
}

function genCheck(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 1]],
    [[2, 2]],
    [[1, 3]],
    [[0, 2], [0, 4]],
  ]);
}

function genClose(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 1]],
    [[2, 2]],
    [[3, 1], [1, 3]],
    [[4, 0], [0, 4]],
    [[3, 3], [4, 4]],
  ]);
}

function genPlus(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [1, 2], [3, 2], [4, 2]],
    [[2, 0], [2, 1], [2, 3], [2, 4]],
  ]);
}

function genMinus(): string[] {
  return buildFromTip([
    [[2, 0]],
    [[2, 1], [2, 2], [2, 3], [2, 4]],
  ]);
}

function genQuestion(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 3]],
    [[3, 2]],
    [[4, 2]],
  ]);
}

function genExclamation(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 2], [2, 2]],
    [[3, 2]],
    [[4, 2]],
  ]);
}

function genAt(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 1], [0, 2], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 3], [3, 4]],
    [[4, 1], [4, 2]],
  ]);
}

function genHash(): string[] {
  return buildFromTip([
    [[1, 0]],
    [[1, 1], [1, 2], [1, 3], [1, 4]],
    [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4]],
    [[0, 1], [2, 1], [4, 1]],
    [[0, 3], [2, 3], [4, 3]],
  ]);
}

/* ── UI actions ───────────────────────────────── */

function genRefresh(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [1, 1], [1, 3]],
    [[2, 0], [2, 4]],
    [[3, 1], [3, 3]],
    [[4, 2]],
  ]);
}

function genSettings(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [4, 2], [2, 0], [2, 4]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
  ]);
}

function genHome(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 1], [1, 2], [1, 3]],
    [[2, 2]],
    [[3, 0], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genSave(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 0], [2, 0], [3, 0], [4, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[2, 2], [3, 2], [4, 2]],
  ]);
}

function genShare(): string[] {
  return buildFromTip([
    [[2, 0]],
    [[0, 2], [1, 1], [1, 2]],
    [[2, 1], [2, 2], [2, 3], [2, 4]],
    [[3, 2], [4, 1], [4, 3]],
  ]);
}

function genLink(): string[] {
  return buildFromTip([
    [[2, 0]],
    [[1, 0], [1, 1]],
    [[0, 2]],
    [[1, 3], [1, 4]],
    [[2, 4]],
    [[3, 4], [3, 3]],
    [[4, 2]],
    [[3, 0], [3, 1]],
  ]);
}

function genTrash(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

/* ── Media ───────────────────────────────────── */

function genPause(): string[] {
  return buildFromTip([
    [[1, 0]],
    [[2, 0], [3, 0], [4, 0]],
    [[1, 4], [2, 4], [3, 4], [4, 4]],
  ]);
}

function genStop(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 0], [2, 0], [3, 0]],
    [[1, 4], [2, 4], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genRecord(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
    [[0, 2], [2, 0], [2, 4], [4, 2]],
  ]);
}

function genSkipNext(): string[] {
  return buildFromTip([
    [[1, 0]],
    [[2, 0], [3, 0], [4, 0]],
    [[1, 2], [2, 2], [3, 2], [4, 2]],
    [[1, 4], [2, 4], [3, 4], [4, 4]],
    [[2, 1], [3, 1], [4, 1]],
    [[2, 3], [3, 3], [4, 3]],
  ]);
}

function genSkipPrev(): string[] {
  return buildFromTip([
    [[4, 0]],
    [[3, 0], [2, 0], [1, 0]],
    [[4, 2], [3, 2], [2, 2], [1, 2]],
    [[4, 4], [3, 4], [2, 4], [1, 4]],
    [[3, 1], [2, 1], [1, 1]],
    [[3, 3], [2, 3], [1, 3]],
  ]);
}

/* ── Communication ───────────────────────────── */

function genMail(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 4], [2, 3]],
    [[3, 4], [4, 3]],
    [[4, 0], [4, 1], [4, 2]],
  ]);
}

function genSend(): string[] {
  return buildFromTip([
    [[0, 4]],
    [[1, 3], [2, 2]],
    [[3, 1], [4, 0]],
    [[2, 3], [3, 2]],
    [[1, 2], [2, 1]],
  ]);
}

/* ── Places & people ──────────────────────────── */

function genUser(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[4, 1], [4, 3]],
    [[3, 0], [3, 4]],
    [[2, 2]],
    [[1, 1], [1, 2], [1, 3]],
    [[0, 2]],
  ]);
}

function genLocation(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 1], [1, 2], [1, 3]],
    [[2, 2]],
    [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4]],
    [[4, 2]],
  ]);
}

function genCalendar(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

/* ── AI symbols ───────────────────────────────── */

function genBrain(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[0, 1], [0, 3]],
    [[1, 0], [1, 2], [1, 4]],
    [[2, 1], [2, 3]],
    [[3, 0], [3, 2], [3, 4]],
    [[4, 1], [4, 3]],
  ]);
}

function genChip(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genRobot(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 1], [1, 3]],
    [[2, 2]],
    [[3, 1], [3, 2], [3, 3]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genLightbulb(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 1], [1, 2], [1, 3]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
    [[3, 1], [3, 2], [3, 3]],
    [[4, 2]],
    [[3, 0], [3, 4]],
  ]);
}

function genWand(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[3, 2], [2, 2]],
    [[1, 2]],
    [[0, 2]],
    [[0, 1], [0, 3], [1, 0], [1, 4]],
  ]);
}

function genNeural(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [2, 0], [2, 4], [4, 2]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
  ]);
}

function genCode(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 0], [1, 1]],
    [[3, 1], [4, 0]],
    [[0, 4], [1, 3]],
    [[3, 3], [4, 4]],
  ]);
}

function genLayers(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 1], [1, 2], [1, 3]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
    [[3, 1], [3, 2], [3, 3]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

/* ── Abstract ─────────────────────────────────── */

function genInfinity(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2]],
    [[1, 0], [1, 4]],
    [[2, 1], [2, 3]],
    [[3, 0], [3, 4]],
    [[4, 2]],
  ]);
}

function genLoop(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
    [[3, 3], [2, 3]],
  ]);
}

function genConstellation(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 0], [0, 4]],
    [[1, 2]],
    [[4, 0], [4, 4]],
    [[2, 0], [2, 4]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
  ]);
}

function genVortex(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[2, 3]],
    [[1, 3], [1, 2]],
    [[1, 1], [2, 1]],
    [[3, 1], [3, 2]],
    [[3, 3]],
  ]);
}

function genBloom(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [2, 0], [2, 4], [4, 2]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
  ]);
}

function genRipple(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 4], [2, 0], [2, 4], [3, 0], [3, 4], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genMaze(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2]],
    [[1, 2], [2, 2]],
    [[2, 1], [2, 0]],
    [[3, 0]],
    [[4, 0], [4, 1], [4, 2]],
    [[3, 2], [3, 3], [3, 4]],
    [[2, 4], [1, 4], [0, 4]],
  ]);
}

function genAtom(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [1, 1]],
    [[2, 0], [3, 1]],
    [[4, 2], [3, 3]],
    [[2, 4], [1, 3]],
  ]);
}

/* ── Nature ───────────────────────────────────── */

function genSun(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [2, 0], [2, 4], [4, 2]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
  ]);
}

function genMoon(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
    [[3, 2]],
    [[2, 2]],
    [[1, 2]],
  ]);
}

function genCloud(): string[] {
  return buildFromTip([
    [[1, 1]],
    [[1, 2], [1, 3]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
    [[3, 1], [3, 2], [3, 3]],
  ]);
}

function genSnowflake(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [2, 0], [2, 4], [4, 2]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
    [[1, 0], [1, 4], [3, 0], [3, 4], [0, 1], [0, 3], [4, 1], [4, 3]],
  ]);
}

function genLeaf(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[3, 1], [3, 3]],
    [[2, 0], [2, 4]],
    [[1, 1], [1, 3]],
    [[0, 2]],
  ]);
}

function genFlower(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 2], [2, 0], [2, 4], [4, 2]],
    [[1, 1], [1, 3], [3, 1], [3, 3]],
  ]);
}

/* ── Music & sound ─────────────────────────────── */

function genNote(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 0], [2, 0], [3, 0]],
    [[4, 0], [4, 1], [4, 2]],
    [[3, 2]],
  ]);
}

function genVolume(): string[] {
  return buildFromTip([
    [[2, 0]],
    [[1, 0], [3, 0]],
    [[2, 1], [2, 2], [2, 3]],
    [[1, 4], [3, 4]],
    [[0, 1], [0, 3]],
  ]);
}

function genMute(): string[] {
  return buildFromTip([
    [[2, 0]],
    [[1, 0], [3, 0]],
    [[2, 1], [2, 2], [2, 3]],
    [[1, 4], [3, 4]],
    [[0, 0], [1, 1], [3, 3], [4, 4]],
    [[0, 4], [1, 3], [3, 1], [4, 0]],
  ]);
}

function genMic(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 1], [1, 2], [1, 3]],
    [[2, 2], [3, 2]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

/* ── Tech & files ─────────────────────────────── */

function genPhone(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genCamera(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[0, 1], [0, 3]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[2, 2]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genFolder(): string[] {
  return buildFromTip([
    [[0, 1]],
    [[0, 2], [0, 3]],
    [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

function genFile(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

/* ── Tools ─────────────────────────────────────── */

function genPencil(): string[] {
  return buildFromTip([
    [[4, 2]],
    [[3, 1], [3, 2], [3, 3]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
    [[1, 0], [1, 4]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
  ]);
}

function genScissors(): string[] {
  return buildFromTip([
    [[2, 2]],
    [[0, 0], [0, 4]],
    [[1, 1], [1, 3]],
    [[3, 1], [3, 3]],
    [[4, 0], [4, 4]],
  ]);
}

function genWrench(): string[] {
  return buildFromTip([
    [[0, 0]],
    [[1, 0], [2, 0], [3, 0], [4, 0]],
    [[4, 1], [4, 2], [4, 3], [4, 4]],
  ]);
}

/* ── Status & safety ───────────────────────────── */

function genShield(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 0], [1, 4]],
    [[2, 0], [2, 4]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

function genWarning(): string[] {
  return buildFromTip([
    [[0, 2]],
    [[1, 1], [1, 3]],
    [[2, 0], [2, 4]],
    [[2, 2]],
    [[3, 0], [3, 4]],
    [[4, 1], [4, 2], [4, 3]],
  ]);
}

/* ── Pre-computed frames ───────────────────────── */

const ANIMATIONS: Record<AnimationName, string[]> = {
  confetti: genConfetti(),
  arrow: genArrow(),
  windmill: genWindmill(),
  logo: genLogo(),
  graph: genGraph(),
  glitter: genGlitter(),
  burst: genBurst(),
  snake: genSnake(),
  pulse: genPulse(),
  spiral: genSpiral(),
  rain: genRain(),
  wave: genWave(),
  heart: genHeart(),
  clock: genClock(),
  orbit: genOrbit(),
  scan: genScan(),
  checker: genChecker(),
  stairs: genStairs(),
  cross: genCross(),
  dna: genDna(),
  wifi: genWifi(),
  signal: genSignal(),
  eye: genEye(),
  play: genPlay(),
  loading: genLoading(),
  target: genTarget(),
  flame: genFlame(),
  lightning: genLightning(),
  sparkle: genSparkle(),
  hourglass: genHourglass(),
  crown: genCrown(),
  lock: genLock(),
  toggle: genToggle(),
  checkbox: genCheckbox(),
  menu: genMenuIcon(),
  upload: genUpload(),
  download: genDownload(),
  search: genSearch(),
  progress: genProgress(),
  type: genTypeAnim(),
  expand: genExpand(),
  slider: genSlider(),
  notification: genNotification(),
  window: genWindow(),
  sort: genSort(),
  sidebar: genSidebar(),
  chevronRight: genChevronRight(),
  chevronLeft: genChevronLeft(),
  chevronDown: genChevronDown(),
  chevronUp: genChevronUp(),
  arrowElbow: genArrowElbow(),
  arrowSplit: genArrowSplit(),
  arrowRefresh: genArrowRefresh(),
  arrowSwap: genArrowSwap(),
  arrowUndo: genArrowUndo(),
  arrowBounce: genArrowBounce(),
  shapeSquare: genShapeSquare(),
  shapeTriangle: genShapeTriangle(),
  shapeCircle: genShapeCircle(),
  shapeDiamond: genShapeDiamond(),
  shapePentagon: genShapePentagon(),
  shapeHexagon: genShapeHexagon(),
  shapeStar: genShapeStar(),
  shapeHeart: genShapeHeart(),
  shapeCrescent: genShapeCrescent(),
  shapeCross: genShapeCross(),
  letterA: genLetterA(),
  letterB: genLetterB(),
  letterC: genLetterC(),
  letterD: genLetterD(),
  letterE: genLetterE(),
  letterF: genLetterF(),
  letterG: genLetterG(),
  letterH: genLetterH(),
  letterI: genLetterI(),
  letterJ: genLetterJ(),
  letterK: genLetterK(),
  letterL: genLetterL(),
  letterM: genLetterM(),
  letterN: genLetterN(),
  letterO: genLetterO(),
  letterP: genLetterP(),
  letterQ: genLetterQ(),
  letterR: genLetterR(),
  letterS: genLetterS(),
  letterT: genLetterT(),
  letterU: genLetterU(),
  letterV: genLetterV(),
  letterW: genLetterW(),
  letterX: genLetterX(),
  letterY: genLetterY(),
  letterZ: genLetterZ(),
  number0: genNumber0(),
  number1: genNumber1(),
  number2: genNumber2(),
  number3: genNumber3(),
  number4: genNumber4(),
  number5: genNumber5(),
  number6: genNumber6(),
  number7: genNumber7(),
  number8: genNumber8(),
  number9: genNumber9(),
  star: genStar(),
  check: genCheck(),
  close: genClose(),
  plus: genPlus(),
  minus: genMinus(),
  question: genQuestion(),
  exclamation: genExclamation(),
  at: genAt(),
  hash: genHash(),
  refresh: genRefresh(),
  settings: genSettings(),
  home: genHome(),
  save: genSave(),
  share: genShare(),
  link: genLink(),
  trash: genTrash(),
  pause: genPause(),
  stop: genStop(),
  record: genRecord(),
  skipNext: genSkipNext(),
  skipPrev: genSkipPrev(),
  mail: genMail(),
  send: genSend(),
  user: genUser(),
  location: genLocation(),
  calendar: genCalendar(),
  brain: genBrain(),
  chip: genChip(),
  robot: genRobot(),
  lightbulb: genLightbulb(),
  wand: genWand(),
  neural: genNeural(),
  code: genCode(),
  layers: genLayers(),
  infinity: genInfinity(),
  loop: genLoop(),
  constellation: genConstellation(),
  vortex: genVortex(),
  bloom: genBloom(),
  ripple: genRipple(),
  maze: genMaze(),
  atom: genAtom(),
  sun: genSun(),
  moon: genMoon(),
  cloud: genCloud(),
  snowflake: genSnowflake(),
  leaf: genLeaf(),
  flower: genFlower(),
  note: genNote(),
  volume: genVolume(),
  mute: genMute(),
  mic: genMic(),
  phone: genPhone(),
  camera: genCamera(),
  folder: genFolder(),
  file: genFile(),
  pencil: genPencil(),
  scissors: genScissors(),
  wrench: genWrench(),
  shield: genShield(),
  warning: genWarning(),
};

/* ── Components ────────────────────────────────── */

interface DotGridProps {
  animation: AnimationName;
  /** Overall grid size in px (default 44) */
  size?: number;
  /** Milliseconds per frame (default 180) */
  speed?: number;
  /** Single dot color (default #ffffff). Ignored if colorA/colorB set. */
  color?: string;
  /** First color for checkerboard (use with colorB for two-color icons). */
  colorA?: string;
  /** Second color for checkerboard. */
  colorB?: string;
  className?: string;
}

export function DotGrid({
  animation,
  size = 24,
  speed = 220,
  color = '#ffffff',
  colorA,
  colorB,
  className,
}: DotGridProps) {
  const useDual = colorA != null && colorB != null;
  const frames = ANIMATIONS[animation];
  const [idx, setIdx] = useState(0);
  const len = frames?.length ?? 1;

  useEffect(() => {
    if (len === 0) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % len),
      speed
    );
    return () => clearInterval(id);
  }, [animation, len, speed]);

  const dotSize = Math.max(2, Math.floor(size / (G * 2)));
  const gap = Math.max(1, Math.floor((size - G * dotSize) / (G - 1)));
  const totalSize = G * dotSize + (G - 1) * gap;
  const frame = frames?.[idx] ?? frames?.[0] ?? '';

  return (
    <div
      className={`${styles.grid} ${className ?? ''}`}
      style={{ width: totalSize, height: totalSize }}
    >
      {Array.from({ length: G * G }, (_, i) => {
        const row = Math.floor(i / G);
        const col = i % G;
        const isCellA = (row + col) % 2 === 0;
        const backgroundColor = useDual
          ? isCellA
            ? colorA
            : colorB
          : color;
        const cellClass = useDual
          ? isCellA
            ? styles.dotCellA
            : styles.dotCellB
          : '';
        return (
          <span
            key={i}
            className={`${styles.dot} ${cellClass} ${frame[i] === '1' ? styles.on : ''}`}
            style={{
              width: dotSize,
              height: dotSize,
              left: col * (dotSize + gap),
              top: row * (dotSize + gap),
              backgroundColor,
            }}
          />
        );
      })}
    </div>
  );
}

/** Returns the full-shape frame (25-char string) for an animation. */
function getFullFrame(name: AnimationName): string {
  const frames = ANIMATIONS[name];
  let best = frames[0];
  let maxOn = 0;
  for (const f of frames) {
    const count = (f.match(/1/g) ?? []).length;
    if (count > maxOn) {
      maxOn = count;
      best = f;
    }
  }
  return best;
}

/** Returns SVG markup for the icon (full shape, active dots only). */
export function getSvgForAnimation(name: AnimationName, size = 32): string {
  const frame = getFullFrame(name);
  const r = 0.4;
  const circles: string[] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (frame[row * 5 + col] === '1') {
        const cx = col + 0.5;
        const cy = row + 0.5;
        circles.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`);
      }
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5" width="${size}" height="${size}" fill="#ffffff">
  ${circles.join('\n  ')}
</svg>`;
}

export function DotMatrixShowcase({
  className,
  onSelect,
  dotColor,
  dotColorA,
  dotColorB,
}: {
  className?: string;
  onSelect?: (name: AnimationName) => void;
  /** Single dot color (e.g. neon variant from preview). */
  dotColor?: string;
  /** Two colors for checkerboard (use with dotColorB). */
  dotColorA?: string;
  dotColorB?: string;
}) {
  const useDual = dotColorA != null && dotColorB != null;
  return (
    <div className={`${styles.showcaseWrap} ${className ?? ''}`}>
      {SHOWCASE_THEMES.map(({ theme, title, names }) => (
        <section key={theme} className={styles.showcaseSection}>
          <h2 className={styles.showcaseTitle}>{title}</h2>
          <div className={styles.showcase}>
            {names.map((name) => (
              <button
                key={name}
                type="button"
                className={styles.item}
                onClick={() => onSelect?.(name)}
                aria-label={`View ${name}`}
              >
                <DotGrid
                  animation={name}
                  color={useDual ? undefined : dotColor}
                  colorA={useDual ? dotColorA : undefined}
                  colorB={useDual ? dotColorB : undefined}
                />
                <span className={styles.label}>{name}</span>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

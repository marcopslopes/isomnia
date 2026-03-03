'use client';

import { useState, useCallback } from 'react';
import type { AnimationName } from '@/app/insomnia/DotMatrixAnimations';
import { DotMatrixShowcase } from '@/app/insomnia/DotMatrixAnimations';
import { IconDetailModal } from '@/app/insomnia/IconDetailModal';

export function DotsPreviewClient({
  dotColor,
  dotColorA,
  dotColorB,
}: {
  dotColor?: string;
  dotColorA?: string;
  dotColorB?: string;
}) {
  const [selected, setSelected] = useState<AnimationName | null>(null);
  const handleSelect = useCallback((name: AnimationName) => setSelected(name), []);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <DotMatrixShowcase
        onSelect={handleSelect}
        dotColor={dotColor}
        dotColorA={dotColorA}
        dotColorB={dotColorB}
      />
      <IconDetailModal
        name={selected}
        onClose={handleClose}
        dotColor={dotColor}
        dotColorA={dotColorA}
        dotColorB={dotColorB}
      />
    </>
  );
}

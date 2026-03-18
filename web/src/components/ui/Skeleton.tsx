import { type CSSProperties } from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  style?: CSSProperties;
}

const SHIMMER_KEYFRAMES = `
@keyframes skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

export function Skeleton({
  width = '100%',
  height = 16,
  radius = 'var(--radius-sm)',
  style,
}: SkeletonProps) {
  const normalise = (v: string | number) =>
    typeof v === 'number' ? `${v}px` : v;

  const skeletonStyle: CSSProperties = {
    width: normalise(width),
    height: normalise(height),
    borderRadius: normalise(radius),
    background:
      'linear-gradient(90deg, var(--glass-thin) 25%, var(--glass-regular) 50%, var(--glass-thin) 75%)',
    backgroundSize: '200% 100%',
    animation: 'skeleton-shimmer 1.4s ease infinite',
    flexShrink: 0,
    ...style,
  };

  return (
    <>
      <style>{SHIMMER_KEYFRAMES}</style>
      <div style={skeletonStyle} />
    </>
  );
}

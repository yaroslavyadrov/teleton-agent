import { type CSSProperties, type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  level?: 'thin' | 'regular' | 'thick';
}

const bgByLevel: Record<string, string> = {
  thin: 'var(--glass-thin)',
  regular: 'var(--bg-glass)',
  thick: 'var(--glass-thick)',
};

export function GlassCard({
  children,
  style,
  className,
  onClick,
  level = 'regular',
}: GlassCardProps) {
  const base: CSSProperties = {
    background: bgByLevel[level],
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-card)',
    padding: '24px',
    ...style,
  };

  return (
    <div style={base} className={className} onClick={onClick}>
      {children}
    </div>
  );
}

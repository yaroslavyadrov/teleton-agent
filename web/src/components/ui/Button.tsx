import { type CSSProperties, type ReactNode, useState } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  style?: CSSProperties;
}

const heightBySize: Record<string, string> = {
  sm: '36px',
  md: '48px',
  lg: '56px',
};

const fontSizeBySize: Record<string, string> = {
  sm: '15px',
  md: '17px',
  lg: '17px',
};

const fontWeightBySize: Record<string, number> = {
  sm: 500,
  md: 500,
  lg: 600,
};

const paddingBySize: Record<string, string> = {
  sm: '0 16px',
  md: '0 22px',
  lg: '0 28px',
};

const spinnerStyle: CSSProperties = {
  display: 'inline-block',
  width: '14px',
  height: '14px',
  border: '2px solid rgba(255,255,255,0.3)',
  borderTopColor: 'currentColor',
  borderRadius: '50%',
  animation: 'spin 0.6s linear infinite',
  verticalAlign: 'middle',
  marginRight: '8px',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  style,
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isDisabled = disabled || loading;

  const variantStyle = (): CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          background: hovered && !isDisabled ? 'var(--accent-hover)' : 'var(--accent)',
          color: 'var(--text-on-accent)',
          border: 'none',
        };
      case 'secondary':
        return {
          background: hovered && !isDisabled ? 'var(--bg-glass-hover)' : 'var(--bg-glass)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: 'var(--text-primary)',
          border: 'none',
          opacity: hovered && !isDisabled ? 0.8 : 1,
        };
      case 'danger':
        return {
          background: hovered && !isDisabled ? 'rgba(255,69,58,0.2)' : 'var(--red-dim)',
          color: 'var(--red)',
          border: '1px solid rgba(255,69,58,0.3)',
        };
    }
  };

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightBySize[size],
    padding: paddingBySize[size],
    borderRadius: 'var(--radius-pill)',
    fontSize: fontSizeBySize[size],
    fontWeight: fontWeightBySize[size],
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.4 : 1,
    width: fullWidth ? '100%' : undefined,
    transition: 'all 150ms ease',
    transform: pressed && !isDisabled ? 'scale(0.97)' : 'scale(1)',
    userSelect: 'none',
    ...variantStyle(),
    ...style,
  };

  return (
    <button
      type={type}
      style={base}
      disabled={isDisabled}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => { setPressed(false); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      {loading && <span style={spinnerStyle} />}
      {children}
    </button>
  );
}

import { type CSSProperties } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

const TRACK_ON  = 'var(--green)';
const TRACK_OFF = 'var(--border-strong)';

export function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: ToggleProps) {
  const rowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    userSelect: 'none',
  };

  const labelColStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    minWidth: 0,
  };

  const labelTextStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text-primary)',
    lineHeight: 1.4,
  };

  const descStyle: CSSProperties = {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    lineHeight: 1.4,
  };

  const trackStyle: CSSProperties = {
    position: 'relative',
    width: '64px',
    height: '28px',
    borderRadius: '14px',
    background: checked ? TRACK_ON : TRACK_OFF,
    transition: 'background 200ms ease',
    flexShrink: 0,
  };

  const thumbStyle: CSSProperties = {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#ffffff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.35)',
    transform: checked ? 'translateX(36px)' : 'translateX(0px)',
    transition: 'transform 250ms cubic-bezier(.34,1.56,.64,1)',
  };

  const handleClick = () => {
    if (!disabled) onChange(!checked);
  };

  return (
    <div
      style={rowStyle}
      onClick={handleClick}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {(label || description) && (
        <div style={labelColStyle}>
          {label && <span style={labelTextStyle}>{label}</span>}
          {description && <span style={descStyle}>{description}</span>}
        </div>
      )}
      <div style={trackStyle}>
        <div style={thumbStyle} />
      </div>
    </div>
  );
}

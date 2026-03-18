import { type CSSProperties } from 'react';

interface StatusBadgeProps {
  status: 'running' | 'stopped' | 'starting' | 'stopping' | 'error';
  size?: 'sm' | 'md';
}

const STATUS_CONFIG: Record<
  StatusBadgeProps['status'],
  { color: string; label: string; pulse: boolean }
> = {
  running:  { color: 'var(--green)', label: 'Running',  pulse: true  },
  stopped:  { color: 'var(--text-tertiary)', label: 'Stopped',  pulse: false },
  starting: { color: 'var(--accent)', label: 'Starting', pulse: true  },
  stopping: { color: 'var(--warning)', label: 'Stopping', pulse: true  },
  error:    { color: 'var(--red)', label: 'Error',    pulse: false },
};


export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const dotSize = size === 'sm' ? '8px' : '10px';

  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: 'var(--bg-glass)',
    borderRadius: '999px',
    padding: '4px 12px',
  };

  const dotStyle: CSSProperties = {
    width: dotSize,
    height: dotSize,
    borderRadius: '50%',
    background: config.color,
    flexShrink: 0,
  };

  const labelStyle: CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    lineHeight: 1,
  };

  return (
    <>
      <span style={containerStyle}>
        <span style={dotStyle} />
        <span style={labelStyle}>{config.label}</span>
      </span>
    </>
  );
}

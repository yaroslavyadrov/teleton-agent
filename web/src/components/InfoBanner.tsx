import { useState, type ReactNode } from 'react';

interface InfoBannerProps {
  children: ReactNode;
}

export function InfoBanner({ children }: InfoBannerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="info-banner" data-open={open || undefined}>
      <button
        type="button"
        className="info-banner-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.6 }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>Info</span>
        <svg className="info-banner-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="info-banner-content">
          {children}
        </div>
      )}
    </div>
  );
}

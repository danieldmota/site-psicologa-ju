function IconBase({ children, className = "", viewBox = "0 0 24 24" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}

export function ArrowIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </IconBase>
  );
}

export function ChevronIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m8 10 4 4 4-4" />
    </IconBase>
  );
}

export function CloseIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconBase>
  );
}

export function InstagramIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect height="16" rx="5" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle className="icon-fill" cx="17.4" cy="6.7" r="1" />
    </IconBase>
  );
}

export function MapPinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function MenuIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  );
}

export function PhoneIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M8.7 3.8 6.5 2.7A2 2 0 0 0 4 3.5l-1 1.8c-.6 1-.6 2.2-.1 3.3 2.5 5.7 6.8 10 12.5 12.5 1.1.5 2.3.5 3.3-.1l1.8-1a2 2 0 0 0 .8-2.5l-1.1-2.2a2 2 0 0 0-2.4-1l-2 .7a2 2 0 0 1-2-.4l-4.4-4.4a2 2 0 0 1-.4-2l.7-2a2 2 0 0 0-1-2.4Z" />
    </IconBase>
  );
}

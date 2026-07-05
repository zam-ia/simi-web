type IconProps = { className?: string };

function BaseIcon({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12.5 4.2 4.2L19 6.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  );
}

export function QrIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 14h2v2h-2zM18 14h2v6h-2zM14 18h2v2h-2z" fill="currentColor" />
    </BaseIcon>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 9.8a6 6 0 0 0-12 0c0 6-2 6.2-2 7.7h16c0-1.5-2-1.7-2-7.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20a2.2 2.2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 3.5h8A2.5 2.5 0 0 1 18.5 6v12A2.5 2.5 0 0 1 16 20.5H8A2.5 2.5 0 0 1 5.5 18V6A2.5 2.5 0 0 1 8 3.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 6h4M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </BaseIcon>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 5h2l2 10h9.5l2-7H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
    </BaseIcon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 4v3M17 4v3M4.5 9h15M6.5 6h11A2.5 2.5 0 0 1 20 8.5v9A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-9A2.5 2.5 0 0 1 6.5 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </BaseIcon>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 19V5M5 19h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 16v-5M12 16V8M16 16v-3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </BaseIcon>
  );
}

const baseProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function CalendarIcon(props) {
  return <svg {...baseProps} {...props}><path d="M8 2v4M16 2v4M3 9h18"/><rect x="3" y="4" width="18" height="17" rx="2"/></svg>
}
export function WhatsAppIcon(props) {
  return <svg {...baseProps} {...props}><path d="M20.5 11.5a8.5 8.5 0 0 1-12.57 7.46L3 20.5l1.58-4.73A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.1 8.2c.2-.45.43-.46.74-.47h.63c.2 0 .42.08.53.34l.73 1.75c.1.24.05.45-.08.64l-.55.72c-.12.15-.12.31-.02.49.42.76 1.23 1.72 2.45 2.24.2.09.35.06.48-.09l.82-.94c.17-.2.39-.23.62-.13l1.68.79c.24.11.39.3.38.53-.03.75-.35 1.46-.95 1.91-.48.36-1.17.53-1.93.39-1.23-.23-2.71-.86-4.14-2.16-1.23-1.12-2.12-2.5-2.38-3.55-.23-.94-.08-1.73.38-2.46Z"/></svg>
}
export function FileTextIcon(props) {
  return <svg {...baseProps} {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>
}
export function FamilyIcon(props) {
  return <svg {...baseProps} {...props}><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M14 15.5a5 5 0 0 1 7 4.5v1"/></svg>
}
export function FolderIcon(props) {
  return <svg {...baseProps} {...props}><path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M3 10h18"/></svg>
}
export function UserCheckIcon(props) {
  return <svg {...baseProps} {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>
}
export function MessageIcon(props) {
  return <svg {...baseProps} {...props}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/></svg>
}
export function ClipboardIcon(props) {
  return <svg {...baseProps} {...props}><rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4a3 3 0 0 1 6 0v2H9ZM9 12h6M9 16h4"/></svg>
}
export function VideoIcon(props) {
  return <svg {...baseProps} {...props}><rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3Z"/></svg>
}
export function MapPinIcon(props) {
  return <svg {...baseProps} {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
}
export function GlobeIcon(props) {
  return <svg {...baseProps} {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21M12 3C9.5 5.5 8.5 8.5 8.5 12S9.5 18.5 12 21"/></svg>
}
export function MailIcon(props) {
  return <svg {...baseProps} {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
}
export function PhoneIcon(props) {
  return <svg {...baseProps} {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.61a2 2 0 0 1-.45 2.11L9 10.72a16 16 0 0 0 4.28 4.28l1.28-1.28a2 2 0 0 1 2.11-.45c.83.31 1.71.53 2.61.65A2 2 0 0 1 22 16.92Z"/></svg>
}
export function ShieldIcon(props) {
  return <svg {...baseProps} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
}

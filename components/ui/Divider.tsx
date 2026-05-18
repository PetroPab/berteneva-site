interface DividerProps {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return <hr className={`border-t border-rule ${className}`} aria-hidden="true" />
}

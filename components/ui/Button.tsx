import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  as?: 'button' | 'a'
  href?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, as: Tag = 'button', href, ...props }, ref) => {
    const base =
      'inline-flex items-center gap-2 min-h-[44px] px-6 py-3 font-sans text-sm font-medium transition-all duration-150 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

    const variants = {
      primary:
        'bg-accent text-white hover:bg-[#a33209] active:scale-[0.98]',
      ghost:
        'border border-ink text-ink hover:border-accent hover:text-accent active:scale-[0.98]',
    }

    const classes = `${base} ${variants[variant]} ${className}`

    if (Tag === 'a' && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

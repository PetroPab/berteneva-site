'use client'

import { useState, useEffect } from 'react'

interface Props {
  type: 'email' | 'phone'
  className?: string
}

const PARTS = {
  email: { user: 'omnistaffe', domain: 'gmail.com' },
  phone: { parts: ['+7', '910', '974', '55', '21'] },
}

export function ObfuscatedContact({ type, className = '' }: Props) {
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(true) }, [])

  if (type === 'email') {
    const { user, domain } = PARTS.email
    const email = ready ? `${user}@${domain}` : `${user} [аt] ${domain}`
    const href = ready ? `mailto:${email}` : undefined
    return (
      <a href={href} className={className}>
        {email}
      </a>
    )
  }

  const phone = ready
    ? `${PARTS.phone.parts[0]} ${PARTS.phone.parts[1]} ${PARTS.phone.parts[2]}-${PARTS.phone.parts[3]}-${PARTS.phone.parts[4]}`
    : '—'
  const href = ready ? `tel:+7${PARTS.phone.parts[1]}${PARTS.phone.parts[2]}${PARTS.phone.parts[3]}${PARTS.phone.parts[4]}` : undefined

  return (
    <a href={href} className={className}>
      {phone}
    </a>
  )
}

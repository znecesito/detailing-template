'use client'

import { trackEvent } from '@/lib/analytics'
import client from '@/client'

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={client.phoneHref}
      className={className}
      onClick={() => trackEvent('phone_click', { business: client.businessName })}
    >
      {client.phone}
    </a>
  )
}

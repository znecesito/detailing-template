'use server'

import { Resend } from 'resend'
import client from '@/client'

export type BookingState = {
  success: boolean
  error?: string
}

export async function submitBooking(
  _prevState: BookingState,
  formData: FormData
): Promise<BookingState> {
  const name    = formData.get('name')    as string
  const phone   = formData.get('phone')   as string
  const vehicle = formData.get('vehicle') as string
  const date    = formData.get('date')    as string

  if (!name || !phone || !date) {
    return { success: false, error: 'Missing required fields.' }
  }

  const subject = `New booking request — ${client.businessName}`
  const body = `
Name:    ${name}
Phone:   ${phone}
Vehicle: ${vehicle || 'Not specified'}
Date:    ${date}
  `.trim()

  // RESEND_API_KEY must be set in Vercel environment variables.
  // Get your key at resend.com → API Keys (free tier: 3k emails/month).
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey || apiKey === 'placeholder') {
    // Dev/placeholder mode — logs to console instead of sending. Safe to ignore locally.
    console.log('[Resend] Would send email to', client.email)
    console.log('[Resend]', subject)
    console.log('[Resend]', body)
    return { success: true }
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from:    'Detailing Site <onboarding@resend.dev>',
      to:      client.email,
      subject,
      text:    body,
    })
    return { success: true }
  } catch (err) {
    console.error('[Resend] Failed to send email:', err)
    return { success: false, error: 'Failed to send. Please call us directly.' }
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  consent: z.boolean(),
  _hp: z.string().max(0),
})

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 422 })
  }

  const { name, email, message, _hp } = parsed.data

  // Honeypot check
  if (_hp) {
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL

  if (!apiKey || !to) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: 'betneva-site <noreply@betneva-site.ru>',
      to,
      reply_to: email,
      subject: `Новая заявка от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Новая заявка от ${name}`,
        from_name: 'Бетнева Studio',
        name,
        email,
        message,
      }),
    })

    const text = await res.text()
    console.log('Web3Forms status:', res.status, 'body:', text)

    let data: { success?: boolean }
    try { data = JSON.parse(text) } catch { data = {} }

    if (!data.success) {
      return NextResponse.json({ error: 'Send failed', detail: text }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Web3Forms fetch error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Введите имя (минимум 2 символа)'),
  email: z.string().email('Введите корректный email'),
  message: z.string().min(10, 'Сообщение слишком короткое (минимум 10 символов)'),
  consent: z.boolean().refine((v) => v === true, 'Необходимо согласие'),
  _hp: z.string().max(0),
})

type FormData = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: '' },
  })

  const onSubmit = async (data: FormData) => {
    if (data._hp) return
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '69bceeb3-2d40-4b0d-9700-84693cc04d75',
          subject: `Новая заявка от ${data.name}`,
          from_name: 'Бетнева Studio',
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-transparent border-b border-rule px-0 py-3 font-sans text-body text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent transition-colors duration-150'

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">
        <SectionLabel number="05" title="Contact" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Заголовок и контакты */}
          <div className="md:col-span-4">
            <h2
              id="contact-heading"
              className="font-serif text-display-sm text-ink leading-tight mb-8"
            >
              Напишите нам
            </h2>
            <p className="font-sans text-body text-ink-muted mb-10">
              Расскажите о задаче — ответим в течение дня.
            </p>

            <ul className="space-y-5" role="list">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-ink-muted flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+79109745521"
                  className="font-sans text-body text-ink hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
                >
                  +7 910 974-55-21
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-ink-muted flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:omnistaffe@gmail.com"
                  className="font-sans text-body text-ink hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
                >
                  omnistaffe@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Форма */}
          <div className="md:col-span-7 md:col-start-6">
            {status === 'success' ? (
              <div className="bg-accent-soft px-8 py-10" role="status" aria-live="polite">
                <p className="font-serif text-heading text-ink mb-2">Отправлено</p>
                <p className="font-sans text-body text-ink-muted">
                  Получили ваше сообщение — ответим в течение дня.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Форма обратной связи"
              >
                {/* Honeypot */}
                <input
                  {...register('_hp')}
                  type="text"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute opacity-0 pointer-events-none h-0 overflow-hidden"
                  autoComplete="off"
                />

                <div className="space-y-8">
                  {/* Имя */}
                  <div>
                    <label htmlFor="name" className="font-mono text-caption uppercase text-ink-muted block mb-2">
                      Имя *
                    </label>
                    <input
                      {...register('name')}
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ваше имя"
                      className={inputBase}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-2 font-sans text-sm text-accent">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="font-mono text-caption uppercase text-ink-muted block mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={inputBase}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-2 font-sans text-sm text-accent">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Сообщение */}
                  <div>
                    <label htmlFor="message" className="font-mono text-caption uppercase text-ink-muted block mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      placeholder="Расскажите о проекте: что нужно сделать, в какие сроки"
                      className={`${inputBase} resize-none`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-2 font-sans text-sm text-accent">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Согласие */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
                      <input
                        {...register('consent')}
                        type="checkbox"
                        className="mt-1 flex-shrink-0 w-4 h-4 accent-accent cursor-pointer"
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                        aria-invalid={!!errors.consent}
                      />
                      <span className="font-sans text-sm text-ink-muted">
                        Согласен(а) на{' '}
                        <a href="/privacy" className="underline hover:text-accent transition-colors">
                          обработку персональных данных
                        </a>
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="consent-error" role="alert" className="mt-1 font-sans text-sm text-accent">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      aria-busy={status === 'loading'}
                    >
                      {status === 'loading' ? 'Отправляю...' : 'Отправить'}
                    </Button>

                    {status === 'error' && (
                      <p role="alert" aria-live="assertive" className="font-sans text-sm text-accent">
                        Ошибка отправки. Попробуйте ещё раз или напишите на email.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

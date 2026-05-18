'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Введите имя (минимум 2 символа)'),
  email: z.string().email('Введите корректный email'),
  message: z.string().min(10, 'Сообщение слишком короткое'),
  consent: z.boolean().refine((v) => v === true, 'Необходимо согласие'),
  _hp: z.string().max(0),
})

type FormData = z.infer<typeof schema>

interface ProjectContactFormProps {
  projectTitle: string
}

export function ProjectContactForm({ projectTitle }: ProjectContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      _hp: '',
      message: `Хочу обсудить похожий проект: ${projectTitle}`,
    },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-transparent border-b border-rule px-0 py-3 font-sans text-body text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent transition-colors duration-150'

  if (status === 'success') {
    return (
      <div className="bg-accent-soft px-8 py-10" role="status" aria-live="polite">
        <p className="font-serif text-heading text-ink mb-2">Отправлено</p>
        <p className="font-sans text-body text-ink-muted">
          Получила ваше сообщение — отвечу в течение дня.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Форма заявки по проекту">
      {/* Honeypot */}
      <input
        {...register('_hp')}
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none h-0 overflow-hidden"
        autoComplete="off"
      />

      <div className="space-y-7">
        <div>
          <label htmlFor="pf-name" className="font-mono text-caption uppercase text-ink-muted block mb-2">
            Имя *
          </label>
          <input
            {...register('name')}
            id="pf-name"
            type="text"
            autoComplete="name"
            placeholder="Ваше имя"
            className={inputBase}
            aria-describedby={errors.name ? 'pf-name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="pf-name-error" role="alert" className="mt-2 font-sans text-sm text-accent">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="pf-email" className="font-mono text-caption uppercase text-ink-muted block mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            id="pf-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={inputBase}
            aria-describedby={errors.email ? 'pf-email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="pf-email-error" role="alert" className="mt-2 font-sans text-sm text-accent">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="pf-message" className="font-mono text-caption uppercase text-ink-muted block mb-2">
            Сообщение *
          </label>
          <textarea
            {...register('message')}
            id="pf-message"
            rows={3}
            className={`${inputBase} resize-none`}
            aria-describedby={errors.message ? 'pf-message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="pf-message-error" role="alert" className="mt-2 font-sans text-sm text-accent">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
            <input
              {...register('consent')}
              type="checkbox"
              className="mt-1 flex-shrink-0 w-4 h-4 accent-accent cursor-pointer"
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
            <p role="alert" className="mt-1 font-sans text-sm text-accent">
              {errors.consent.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
            {status === 'loading' ? 'Отправляю...' : 'Отправить заявку'}
          </Button>
          {status === 'error' && (
            <p role="alert" aria-live="assertive" className="font-sans text-sm text-accent">
              Ошибка. Напишите напрямую на email.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

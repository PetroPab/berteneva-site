# CLAUDE.md — навигатор проекта betneva-site.ru

## Контекст
Персональный сайт-портфолио Галины Бетневой 
(дизайнер + веб-разработчик).

Художественное направление: **Editorial / Журнальный**.
Сайт сам по себе работает как кейс в портфолио.

## Стек
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Framer Motion (точечно)
- Lucide React (иконки)
- React Hook Form + Zod (форма)
- Resend (отправка писем)
- Деплой: Vercel
- Домен: betneva-site.ru

## Ключевые документы (читать ПЕРЕД любой задачей)
1. `docs/02-tech-specification.md` — что делаем и чего НЕ делаем
2. `docs/03-design-concept.md` — арт-направление и токены
3. `docs/04-content-plan.md` — реальный контент и проекты
4. `design-system/MASTER.md` — главный источник правды по дизайну

## Использование скиллов

### При работе над дизайном/UI:
- ВСЕГДА сначала читать `design-system/MASTER.md`
- Если работаем над конкретной секцией — проверить 
  `design-system/pages/<section>.md`
- Применять правила `ui-ux-pro-max` (Quick Reference §1–§9)
- Применять философию `frontend-design`: 
  смелость, уникальность, никакого Inter/Roboto

### При генерации компонентов:
- Соблюдать Pre-Delivery Checklist из `ui-ux-pro-max`
- Учитывать что это ВЕБ (не React Native): 
  игнорировать React Native-специфику, 
  применять веб-аналоги (Tailwind, next/image, Framer Motion)

## Запреты (из ТЗ и арт-направления)
- ❌ Тёмная тема
- ❌ Мессенджеры в контактах
- ❌ Разделение портфолио на подразделы
- ❌ Пакеты услуг и прайс-листы
- ❌ Сложное SEO, Schema.org, sitemap
- ❌ Эмодзи как иконки (только Lucide)
- ❌ Generic-шрифты (Inter, Roboto, Open Sans, Arial)
- ❌ Фиолетовые/синие градиенты на белом
- ❌ Stock-фото вместо работ
- ❌ Lorem ipsum в финале

## Обязательно
- ✅ Светлая тема (одна)
- ✅ Связь только по email (форма + текст)
- ✅ Портфолио единой лентой
- ✅ Адаптив mobile-first
- ✅ Lazy-loading изображений (next/image)
- ✅ Min touch target 44×44px
- ✅ Контраст текста ≥ 4.5:1 (WCAG AA)
- ✅ Visible focus rings
- ✅ prefers-reduced-motion

## Реальные проекты для портфолио
1. Багет, паштет и жёлтый плед — сайт кафе
2. #BUSTORANY — сайт
3. Пипяо — сайт ресторана
4. Буратино Ресторан — сайт
5. Хопмалт — дизайн этикеток пива

## Команда генерации design-system
```bash
python3 skills/ui-ux-pro-max/scripts/search.py \
  "designer developer portfolio editorial magazine serif" \
  --design-system --persist \
  -p "Betneva Site" \
  -f markdown
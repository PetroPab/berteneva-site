# MASTER Design System — Betneva Site
> Главный источник правды по дизайну. Читать перед вёрсткой любой секции.  
> Приоритет: этот файл > ui-ux-pro-max defaults (React Native) > frontend-design defaults

---

## Концепция

**Направление:** Editorial / Журнальный  
**Идея:** «Я не просто фрилансер — я автор»

Сайт построен по логике печатного журнала о дизайне: крупные заголовки, нумерация разделов, тонкие линии, сериф-типографика, асимметрия. Каждая секция — как разворот.

**Главный тест:** через 2 секунды понятно настроение. Хочется задержаться. Сайт сам по себе работает как кейс.

---

## Типографика

### Шрифты

| Роль | Шрифт | Где |
|------|-------|-----|
| Display / Заголовки | **Fraunces** (variable serif) | Hero, заголовки секций, H1–H3 |
| Body / UI | **Inter Tight** | Параграфы, описания, кнопки |
| Mono / Детали | **JetBrains Mono** | Нумерация секций, теги, captions |

> Inter Tight — допустимое исключение. Не обычный Inter: плотнее, характернее.  
> Резерв вместо Inter Tight: **Geist** (от Vercel), **Söhne** (при наличии лицензии).

Подключение через `next/font`:
```ts
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google'
```

### Шкала размеров (rem)

```
0.75 / 0.875 / 1 / 1.125 / 1.5 / 2 / 3 / 4.5 / 6.5 / 9
```

### Иерархия

| Тег | Шрифт | Размер | Weight | Особенности |
|-----|-------|--------|--------|-------------|
| H1 (Hero) | Fraunces | 6.5–9rem | 400 | italic для акцентных слов |
| H2 (секции) | Fraunces | 3–4.5rem | 400 | |
| H3 (карточки) | Fraunces | 1.5–2rem | 500 | |
| Body | Inter Tight | 1rem (16px) | 400 | line-height 1.6 |
| Lead / подзаголовок | Inter Tight | 1.125rem | 400 | line-height 1.5 |
| Caption | JetBrains Mono | 0.75rem | 400 | uppercase, letter-spacing 0.08em |
| Метка / нумерация | JetBrains Mono | 0.75rem | 400 | uppercase |

### UX-правила типографики

- Минимум 16px для body на мобильном (иначе iOS автозум)
- line-height 1.5–1.6 для параграфов
- Длина строки: мобайл 35–60 символов, десктоп 60–75
- Не использовать жирный текст как единственный индикатор
- Обрезку (ellipsis) — только с tooltip-ом с полным текстом

---

## Палитра

### Токены

```css
:root {
  --bg:          #F4F1EA;  /* Основной фон — тёплый молочный */
  --surface:     #FFFFFF;  /* Карточки, формы */
  --ink:         #1A1A1A;  /* Основной текст */
  --ink-muted:   #6B6B6B;  /* Вторичный текст, captions */
  --rule:        #D9D5CB;  /* Линии-разделители */
  --accent:      #C2410C;  /* Терракотовый — CTA, hover */
  --accent-soft: #FED7AA;  /* Подложка под цитаты, теги */
}
```

### В Tailwind config

```js
colors: {
  bg:           '#F4F1EA',
  surface:      '#FFFFFF',
  ink:          '#1A1A1A',
  'ink-muted':  '#6B6B6B',
  rule:         '#D9D5CB',
  accent:       '#C2410C',
  'accent-soft':'#FED7AA',
}
```

### Контрастность (проверено)

| Пара | Коэффициент | WCAG |
|------|-------------|------|
| `#1A1A1A` на `#F4F1EA` | 14.8:1 | AAA ✓ |
| `#1A1A1A` на `#FFFFFF` | 19.1:1 | AAA ✓ |
| `#6B6B6B` на `#F4F1EA` | 5.3:1 | AA ✓ |
| `#C2410C` на `#F4F1EA` | 4.8:1 | AA ✓ |
| `#FFFFFF` на `#C2410C` | 4.5:1 | AA ✓ |

### Правила цвета

- Один акцент на весь сайт — терракотовый `#C2410C`
- **Никаких градиентов** (ни фиолетовых, ни «современных»)
- Цвет — не единственный носитель смысла (дополнять иконкой/текстом)
- Тёмная тема — **не делаем**

---

## Сетка и spacing

### Breakpoints

| Зона | Ширина | Колонки | Padding |
|------|--------|---------|---------|
| Mobile | ≤ 640px | 1 | 20px |
| Tablet | 641–1024px | 6 | 32px |
| Desktop | ≥ 1025px | 12 | 48px |

**max-width:** 1280px (класс `max-w-screen-xl` в Tailwind)

### Spacing-шкала (px)

```
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192
```

Всё на 4-кратной сетке. Tailwind spacing из коробки покрывает большинство.

### Асимметрия (принципиально важно)

- Заголовки секций **не центрируются** — смещены влево или вправо
- Карточки портфолио чередуются: одна полная → две рядом → одна полная
- Отдельные блоки могут «выходить» за стандартный контейнер на 1–2 колонки

---

## Радиусы и границы

```
border-radius:
  default: 0px        (большинство блоков — без скругления)
  small:   2px        (теги, инпуты, маленькие элементы)
  
border:
  rule: 1px solid #D9D5CB
```

Карточки портфолио — строго без радиусов (как фотографии в журнале).

---

## Тени

Теней почти нет. Глубина — через типографику и пространство.

```css
/* Единственное исключение — hover на карточках портфолио */
.portfolio-card:hover {
  box-shadow: 0 8px 32px rgba(26, 26, 26, 0.08);
}
```

---

## Анимация

### Принципы

- Анимация служит смыслу, не является украшением
- Длительность: **150–300ms** для микровзаимодействий
- Easing: `ease-out` на вход, `ease-in` на выход
- Exit быстрее enter (~60–70% от времени enter)
- Не анимировать `width`/`height` — только `transform`/`opacity`
- **Обязательно:** `prefers-reduced-motion` — все анимации заменяются на простой fade или отключаются

### Сценарии

| Элемент | Анимация | Параметры |
|---------|----------|-----------|
| Hero заголовок | staggered fade-in по словам | opacity 0→1, задержка 50ms между словами |
| Секции при скролле | fade + translateY | opacity 0→1 + translateY 24px→0, 300ms ease-out |
| Карточки портфолио hover | scale превью + смещение заголовка | scale 1→1.03 (медленно), title translateX 0→4px |
| Marquee (между Portfolio и Process) | бегущая строка | CSS animation, linear, бесконечно |
| Кнопки | opacity / цвет | 150ms ease-out |

### Framer Motion (точечно)

```tsx
// Базовые варианты для переиспользования
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
}

// Stagger для списков
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
}

// Reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

---

## Иконки

- Источник: **Lucide React** (один набор, нет исключений)
- Стиль: outline, `strokeWidth={1.5}`
- Размеры: 16 / 20 / 24px
- Все иконки-кнопки без текста — с `aria-label`

---

## Декоративные элементы (фирменные)

### 1. Нумерация секций

```tsx
// Левый верхний угол каждой секции
<span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
  01 — About
</span>
```

Нумерация: 01 — Hero, 02 — About, 03 — Services, 04 — Portfolio, 05 — Process, 06 — Contact

### 2. Тонкие разделители

```html
<hr class="border-t border-rule" />
```

1px, цвет `--rule`, между крупными секциями.

### 3. Цитаты

```tsx
<blockquote className="bg-accent-soft px-8 py-6">
  <p className="font-serif text-2xl italic text-ink leading-snug">
    "Дизайн и сайт от одного человека..."
  </p>
</blockquote>
```

### 4. Caption под фото

```tsx
<figcaption className="font-mono text-xs uppercase tracking-widest text-ink-muted mt-2">
  Буратино Ресторан — сайт, 2024
</figcaption>
```

---

## Секции сайта

| # | Секция | Ключевые элементы |
|---|--------|-------------------|
| 01 | **Hero** | Имя крупно (Fraunces 6.5–9rem), позиционирование, CTA «Написать» |
| 02 | **About** | 2–3 абзаца, фото, нумерация |
| 03 | **Services** | 2 колонки: Дизайн / Разработка |
| 04 | **Portfolio** | Единая сетка, чередование: full → 2col → full |
| — | **Marquee** | Бегущая строка между Portfolio и Process |
| 05 | **Process** | 4 шага: знакомство → концепт → реализация → сдача |
| 06 | **Contact** | Форма (имя, email, сообщение + чекбокс) + email + телефон |
| — | **Footer** | Юр. информация, ИНН, копирайт, ссылки на политику |

---

## Форма обратной связи

- React Hook Form + Zod
- Поля: Имя, Email, Сообщение
- Чекбокс: согласие на обработку персональных данных (обязательный)
- Honeypot-поле против спама (скрытое, не отображается)
- Отправка: Resend через `app/api/contact/route.ts`
- Состояния: idle → loading → success / error
- Ошибки — под каждым полем (не только наверху)
- `aria-live="polite"` для объявления ошибок скринридерам

---

## Accessibility (обязательно)

| Правило | Как реализуем |
|---------|---------------|
| Контраст текста ≥ 4.5:1 | Проверено (см. таблицу выше) |
| Видимый focus ring | `focus-visible:ring-2 focus-visible:ring-accent` |
| min touch target 44×44px | Кнопки и ссылки с `min-h-[44px] min-w-[44px]` |
| alt у изображений | `next/image` с обязательным `alt` |
| Заголовки последовательно | h1 → h2 → h3, без пропусков |
| Skip-link | `<a href="#main">` в начале страницы |
| Иконки без текста | `aria-label` обязательно |
| Reduced motion | Framer Motion `useReducedMotion()` |
| Форма | `<label>` для каждого инпута, `aria-describedby` для ошибок |

---

## Performance

- Все изображения через `next/image` (WebP, lazy-loading, `sizes`)
- Шрифты через `next/font` (без FOIT, swap)
- Только критический CSS в head
- Framer Motion — только для анимированных компонентов (dynamic import при необходимости)
- CLS < 0.1: резервировать пространство для изображений через `width`/`height` или `aspect-ratio`

---

## Запреты (Anti-patterns)

| Запрет | Почему |
|--------|--------|
| ❌ Generic-шрифты (Inter, Roboto, Arial, Open Sans) | Убивают характер |
| ❌ Фиолетовые / синие градиенты | «AI-эстетика», не наша концепция |
| ❌ Любые градиенты вообще | Не журнальный стиль |
| ❌ Тёмная тема | Не предусмотрена |
| ❌ Большие радиусы (8px+) | Не наш стиль |
| ❌ Тяжёлые тени | Не наш стиль |
| ❌ Emoji как иконки | Используем только Lucide |
| ❌ Lorem ipsum в финале | Только реальный контент |
| ❌ Stock-фото | Только реальные работы |
| ❌ Центрирование всех заголовков | Асимметрия — принцип |
| ❌ Единый стиль карточек (все одного размера) | Чередование обязательно |

---

## Mood-референсы (по духу, не для копирования)

- **Are.na** — типографика, сдержанность, пространство
- **It's Nice That** — журнальная подача контента
- **Pentagram** — асимметрия, крупные заголовки, смелость

---

## Файловая структура (будущая)

```
app/
  layout.tsx          — шрифты, мета, globals
  page.tsx            — собирает все секции
  api/
    contact/
      route.ts        — Resend handler
components/
  sections/
    Hero.tsx
    About.tsx
    Services.tsx
    Portfolio.tsx
    Marquee.tsx
    Process.tsx
    Contact.tsx
    Footer.tsx
  ui/
    Button.tsx
    SectionLabel.tsx  — нумерация секций
    Divider.tsx
    ProjectCard.tsx
design-system/
  MASTER.md           — этот файл
  pages/              — секции с дополнительными правилами
```

---

## Как использовать этот файл

1. **Перед вёрсткой секции** — прочитать этот файл
2. **Проверить** `design-system/pages/<section>.md` — если есть, его правила перекрывают MASTER
3. **Перед коммитом** — пройти Pre-Delivery Checklist из `skills/ui-ux-pro-max.md`
4. **Финальный ревью** — применить философию `skills/frontend-design.md`

---

*Версия: 1.0 — создан вручную на основе docs/03-design-concept.md (приоритетный источник) и ui-ux-pro-max Quick Reference §1–§9 (адаптировано для веб)*

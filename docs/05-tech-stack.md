# Технологический стек

## Подход
Лёгкий, без избыточности. Минимум зависимостей, 
максимум читаемости кода. Автоматизируем рутину 
через Claude Skills.

---

## Frontend

| Слой | Решение | Зачем |
|------|---------|-------|
| Framework | Next.js 14 (App Router) | SSR, next/image, простой деплой |
| Language | TypeScript | Типизация контента и пропсов |
| Styling | Tailwind CSS | Скорость, токены через конфиг |
| Animation | Framer Motion | Точечные анимации, reduced-motion |
| Icons | Lucide React | Один набор, outline 1.5px |
| Fonts | next/font | Без FOIT, контролируемая загрузка |

---

## Формы и почта

| Задача | Решение |
|--------|---------|
| Валидация | React Hook Form + Zod |
| API-роут | Next.js Route Handler (`app/api/contact/route.ts`) |
| Отправка письма | **Resend** |
| Защита от спама | Honeypot-поле |
| Получатель | email в `.env.local` как `CONTACT_EMAIL` |

**Почему Resend:**
- 3000 писем/мес бесплатно
- Простой API
- Не нужен пароль почты в env

---

## Хостинг и домен

- **Хостинг:** Vercel (бесплатный план)
- **Домен:** betneva-site.ru (reg.ru / Beget)
- **DNS:** A-запись и CNAME на Vercel

---

## Dev-инструменты

- Git + GitHub (приватный репозиторий)
- Prettier + prettier-plugin-tailwindcss
- ESLint (минимальный конфиг от Next.js)
- VS Code + Claude Code

---

## 🤖 Автоматизация через Claude Skills

В проекте подключены два скилла в `/skills/`:

### `ui-ux-pro-max`
База знаний: 161 палитра, 57 пар шрифтов, 99 UX-правил, 
161 тип продукта. CLI на Python.

**Применение:**
- Генерация `design-system/MASTER.md`
- Поиск UX-правил перед версткой секции
- Pre-delivery checklist

**Ограничение:** скилл заточен под React Native. 
Используем его как **базу правил** (accessibility, спейсинг, 
типографика), React Native-специфику переводим в веб-аналоги.

### `frontend-design`
Арт-директорский скилл против «AI-эстетики».

**Применение:**
- Финальный ревью каждой секции
- Проверка типографики (запрет Inter / Roboto)
- Проверка цвета (запрет фиолетовых градиентов)
- Контроль концептуальной цельности

**Правило:**
1. Перед версткой секции читать `MASTER.md`
2. Если есть файл в `pages/` — его правила перекрывают MASTER
3. Если нет — используем только MASTER

---

## Переменные окружения

`.env.local` (не коммитим):


На Vercel — через Settings → Environment Variables.

---

## Что НЕ используем

- ❌ Базы данных
- ❌ CMS
- ❌ Авторизацию
- ❌ Тяжёлые UI-библиотеки (MUI, Chakra)
- ❌ Redux / Zustand
- ❌ tRPC / GraphQL
- ❌ Storybook
- ❌ Автотесты

---

## Минимальный набор зависимостей

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3.4",
    "framer-motion": "^11",
    "lucide-react": "^0.400",
    "react-hook-form": "^7",
    "zod": "^3",
    "resend": "^3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^18",
    "@types/node": "^20",
    "prettier": "^3",
    "prettier-plugin-tailwindcss": "^0.5",
    "eslint": "^8",
    "eslint-config-next": "^14"
  }
}
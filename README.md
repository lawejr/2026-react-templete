# Vite + React + TS

Минимальная база проекта на Vite/React с DDD-слоями, Ant Design, Tailwind и React Query.
В качестве примера реализована одна страница с получением списка сущностей.

## Стек

- Vite + TypeScript
- React 18, Ant Design, Tailwind CSS + classnames
- React Query (+ Devtools), date-fns (локаль ru), dayjs/AntD в локали ru
- ESLint + Prettier, Husky pre-push (линтит изменённые TS/TSX)

## Запуск

```bash
npm install
npm run prepare   # устанавливает Husky-хуки
npm start         # dev-сервер
```

Прочее:
- Сборка: `npm run build`
- Предпросмотр сборки: `npm run preview`
- Линт всего `src`: `npm run lint` (pre-push линтит только изменённые TS/TSX)

## Архитектура

- Подробности по архитектуре проекта: [ARCHITECTURE.md](docs/ARCHITECTURE.md)

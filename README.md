# ТимГид - Справочник абитуриента РГАУ-МСХА

Веб-сайт-справочник для абитуриентов Российского государственного аграрного университета - МСХА имени К.А. Тимирязева.

## 🚀 Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - CSS фреймворк
- **Framer Motion** - анимации
- **Lucide React** - иконки

## 📦 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## 🌐 Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка репозитория

1. Создайте новый репозиторий на GitHub
2. Загрузите код в репозиторий:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Настройка GitHub Pages

1. Перейдите в настройки репозитория (Settings)
2. В разделе "Pages" выберите источник "GitHub Actions"
3. При каждом пуше в ветку `main` сайт будет автоматически собираться и деплоиться

### Локальная сборка для GitHub Pages

```bash
# Сборка статических файлов
npm run build

# Файлы будут созданы в папке /out
```

## 📁 Структура проекта

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── admission/       # Страницы поступления
│   ├── campus/          # Страницы кампуса
│   ├── contacts/        # Контакты
│   ├── organizations/   # Студенческие организации
│   ├── study/           # Учебный процесс
│   └── support/         # Поддержка студентов
├── components/          # React компоненты
├── data/               # Данные приложения
├── lib/                # Утилиты и конфигурации
├── styles/             # Стили
├── types/              # TypeScript типы
└── utils/              # Вспомогательные функции
```

## 🔧 Конфигурация

- `next.config.js` - конфигурация Next.js
- `tailwind.config.js` - конфигурация Tailwind CSS
- `tsconfig.json` - конфигурация TypeScript

## 📝 Лицензия

MIT License 
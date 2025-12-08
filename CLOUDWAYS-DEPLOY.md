# Cloudways Deployment Guide

## Обзор

Проект использует Vite + React, который требует сборки перед деплоем. Cloudways не поддерживает автоматическую сборку Vite, поэтому используется отдельная ветка `production` с готовыми файлами.

## Структура деплоя

- **Основная ветка**: `dev` / `main` - исходный код
- **Ветка деплоя**: `production` - только собранные файлы из `dist/`

## Автоматический деплой

### Windows (PowerShell)

```bash
npm run deploy:cloudways:ps1
```

### Linux/Mac (Node.js)

```bash
npm run deploy:cloudways
```

## Что делает скрипт

1. Собирает проект (`npm run build`)
2. Переключается на ветку `production` (создает, если не существует)
3. Очищает старые файлы
4. Копирует содержимое `dist/` в корень ветки
5. Создает `.htaccess` для SPA роутинга
6. Коммитит и пушит изменения
7. Возвращается на исходную ветку

## Настройка Cloudways

### 1. Подключение репозитория

1. В Cloudways перейдите в **Application Management** → **Deployment via GIT**
2. Добавьте ваш GitHub репозиторий
3. Укажите ветку: **`production`**
4. Укажите путь к приложению: **`/public_html`** (или корень домена)

### 2. Настройка авто-деплоя (опционально)

1. Включите **Auto Deploy on Push**
2. Cloudways будет автоматически обновлять сайт при пуше в ветку `production`

### 3. Проверка .htaccess

Убедитесь, что файл `.htaccess` присутствует в корне деплоя. Он необходим для:
- SPA роутинга (React Router)
- Сжатия файлов
- Кеширования
- Безопасности

## Ручной деплой

Если нужно задеплоить вручную:

```bash
# 1. Собрать проект
npm run build

# 2. Переключиться на ветку production
git checkout production

# 3. Скопировать файлы из dist/
# (скопировать все содержимое dist/ в корень)

# 4. Закоммитить и запушить
git add -A
git commit -m "Deploy: $(date)"
git push origin production --force

# 5. Вернуться на рабочую ветку
git checkout dev
```

## Важные замечания

- ⚠️ Ветка `production` содержит только собранные файлы, не исходный код
- ⚠️ Не коммитьте исходный код в ветку `production`
- ⚠️ Всегда используйте `--force` при пуше в `production` (ветка перезаписывается)
- ✅ Скрипт автоматически возвращает вас на исходную ветку
- ✅ `.htaccess` создается автоматически

## Troubleshooting

### Проблема: 404 на всех страницах кроме главной

**Решение**: Проверьте наличие `.htaccess` в корне деплоя и настройки mod_rewrite на сервере.

### Проблема: Старые файлы не обновляются

**Решение**: Очистите кеш браузера или добавьте версионирование к файлам (Vite делает это автоматически).

### Проблема: Скрипт не работает на Windows

**Решение**: Используйте `npm run deploy:cloudways:ps1` (PowerShell версия).

## Альтернативные решения

### GitHub Actions (рекомендуется для автоматизации)

Можно настроить GitHub Actions для автоматической сборки и деплоя при пуше в `main`/`dev`:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudways
on:
  push:
    branches: [main, dev]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:cloudways
```

Это позволит автоматически деплоить при каждом коммите в основную ветку.


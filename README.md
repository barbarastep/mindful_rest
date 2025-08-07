# Mindful Rest

> Одностраничный адаптивный сайт о вдумчивом отдыхе с темами и сборкой через Webpack

---

## Описание

Лендинг, разработанный с нуля: от разметки и стилей до JS-логики и сборки. Проект посвящён теме осознанного отдыха и демонстрирует навыки работы с современными технологиями фронтенда — адаптивная верстка, переключение тем, сохранение настроек пользователя и чистая модульная архитектура.

---

## Стек технологий

- HTML5
- CSS3 (кастомные свойства, адаптивность, media-queries)
- JavaScript (Vanilla JS)
- Webpack
- PostCSS + Autoprefixer
- Git + GitHub
- GitHub Pages

---

## Структура проекта

```
mindful_rest/
├── src/
│   ├── index.html
│   ├── scripts/
│   │   └── index.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── globals.css
│   │   ├── layout.css
│   │   ├── header.css
│   │   ├── card.css
│   │   ├── gallery.css
│   │   ├── footer.css
│   │   ├── components.css
│   │   └── media.css
│   ├── fonts/
│   └── images/
├── dist/
├── webpack.config.js
├── package.json
└── README.md
```

---

## Возможности

- Переключение светлой и тёмной темы
- Сохранение темы между сессиями (`localStorage`)
- Lazy loading изображений
- Кроссбраузерная вёрстка (включая Safari)
- Подключение шрифтов и изображений через Webpack
- Адаптивный дизайн с `clamp()`, `vw`, `media`
- Сборка проекта через Webpack
- Деплой на GitHub Pages

---

## Установка

```bash
git clone https://github.com/barbarastep/mindful_rest.git
cd mindful_rest
npm install
npm run dev      # запуск локального сервера
npm run build    # production-сборка
```

---

## Демо

Сайт доступен по адресу:  
[https://barbarastep.github.io/mindful_rest/](https://barbarastep.github.io/mindful_rest/)

---

## Автор

**Варвара / barbarastep**  
[GitHub профайл](https://github.com/barbarastep)

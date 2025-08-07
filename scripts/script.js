const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// 1. Загружаем тему из localStorage (если есть)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);
}

// 2. Вешаем слушатели на кнопки
themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;

    // Удаляем все старые темы
    body.classList.remove('light', 'dark');

    // Добавляем выбранную
    body.classList.add(selectedTheme);

    // Сохраняем в localStorage
    localStorage.setItem('theme', selectedTheme);
  });
});

import '../styles/style.css';

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  document.body.classList.add('safari');
}

const buttons = document.querySelectorAll('.theme-button');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);

  buttons.forEach((btn) => {
    if (btn.dataset.theme === savedTheme) {
      btn.classList.add('theme-button_active');
    } else {
      btn.classList.remove('theme-button_active');
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;

    if (body.classList.contains(selectedTheme)) return;

    body.classList.remove('light', 'dark');
    body.classList.add(selectedTheme);
    localStorage.setItem('theme', selectedTheme);

    buttons.forEach((btn) => btn.classList.remove('theme-button_active'));
    button.classList.add('theme-button_active');
  });
});

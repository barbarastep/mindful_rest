import '../styles/style.css';

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  document.body.classList.add('safari');
}
const buttons = document.querySelectorAll('.theme-button');
const body = document.body;

function setActiveTheme(theme) {
  body.classList.remove('light', 'dark');
  body.classList.add(theme);
  localStorage.setItem('theme', theme);

  buttons.forEach((btn) => {
    if (btn.dataset.theme === theme) {
      btn.classList.add('theme-button_active');
    } else {
      btn.classList.remove('theme-button_active');
    }
  });
}

const savedTheme = localStorage.getItem('theme') || 'light';
setActiveTheme(savedTheme);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;
    if (!body.classList.contains(selectedTheme)) {
      setActiveTheme(selectedTheme);
    }
  });
});

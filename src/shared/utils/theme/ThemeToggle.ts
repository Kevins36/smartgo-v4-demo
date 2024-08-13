export type Theme = 'light' | 'dark';

export function setTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'light';
}

export function toggleTheme() {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  
  document.body.style.backgroundColor =
    newTheme === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)';
}

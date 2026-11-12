export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

// Only a stored 'dark' applies. The OS preference is ignored on purpose.
export const themeInitScript = `
(function () {
  try {
    if (localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}) === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}
})();
`;

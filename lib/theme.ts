export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

// 저장값이 'dark'일 때만 적용한다. OS 다크 모드 설정은 일부러 따르지 않는다.
export const themeInitScript = `
(function () {
  try {
    if (localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}) === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}
})();
`;

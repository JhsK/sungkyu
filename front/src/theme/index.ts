const URL = 'http://localhost:3000';

const responsiveView = {
  HDPC: '1200px',
  PC: '980px',
  TABLET: '768px',
  MOBILE: '480px',
};

export const lightTheme = {
  PUBLIC_BLACK: '#000000',
  BACKGROUND_TYPING_COLOR: '#ffdee9',
  BACKGROUND_INTRO_COLOR: '#ffffff',
  BACKGROUND_PROJECTS_COLOR: '#F5F5F5',
  FONT_COLOR_WHITE: '#ffffff',
  FONT_COLOR_DARKGRAY: '#727272',
  NO_ACTIVE_CATEGORY_COLOR: '#b5b5b5',
  POST_TAG_COLOR: '#ddc3c3',
  POST_TAG_BORDER_COLOR: '#82a0aa',
  POST_EDIT_TITLE_BORDER_COLOR: '#989898',
};

export type ThemeType = typeof lightTheme;

const URL = 'http://localhost:3000';

const responsiveView = {
  HDPC: '1200px',
  PC: '980px',
  TABLET: '768px',
  MOBILE: '480px',
};

export const lightTheme = {
  PUBLIC_BLACK: '#000000',
  PUBLIC_WHITE: '#ffffff',
  MAIN_BACKGROUND_COLOR: '#ffdee9',
  FOOTER_GRAY: '#F5F5F5',
  PUBLIC_DARKGRAY: '#727272',
  NO_ACTIVE_CATEGORY_COLOR: '#b5b5b5',
  POST_TAG_COLOR: '#ddc3c3',
  POST_TAG_BORDER_COLOR: '#82a0aa',
  POST_EDIT_TITLE_BORDER_COLOR: '#989898',
  POST_EDIT_BUTTON_COLOR: '#a3cfcd',
  BACKGROUND_USER_COLOR: '#fafafa',
};

export type ThemeType = typeof lightTheme;

const responsiveView = {
  HDPC: '1200px',
  PC: '980px',
  TABLET: '768px',
  TABLET_SM: '650px',
  MOBILE: '480px',
  MOBILE_SM: '400px',
  MOBILE_FOLD: '320px',
};

export const lightTheme = {
  PUBLIC_BLACK: '#000000',
  PUBLIC_WHITE: '#ffffff',
  PUBLIC_BLUE: '#007fff',
  MAIN_BACKGROUND_COLOR: '#ffdee9',
  FOOTER_GRAY: '#F5F5F5',
  PUBLIC_DARKGRAY: '#727272',
  NO_ACTIVE_CATEGORY_COLOR: '#b5b5b5',
  POST_TAG_COLOR: '#ddc3c3',
  POST_TAG_BORDER_COLOR: '#82a0aa',
  POST_EDIT_TITLE_BORDER_COLOR: '#989898',
  POST_EDIT_BUTTON_COLOR: '#a3cfcd',
  BACKGROUND_USER_COLOR: '#fafafa',
  REACT_SKY_BLUE_COLOR: '#61dafb',
  ROR_RED_COLOR: '#cc2124',
  F7_ORANGE_COLOR: '#ed360f',
  NODE_GREEN_COLOR: '#036e00',
  MOBILE: `(max-width: ${responsiveView.MOBILE})`,
  TABLET: `(max-width: ${responsiveView.TABLET})`,
  TABLET_SM: `(max-width: ${responsiveView.TABLET_SM})`,
  PC: `(max-width: ${responsiveView.PC})`,
  HDPC: `(max-width: ${responsiveView.HDPC})`,
  MOBILE_SM: `(max-width: ${responsiveView.MOBILE_SM})`,
  MOBILE_FOLD: `(max-width: ${responsiveView.MOBILE_FOLD})`,
};

export type ThemeType = typeof lightTheme;

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    PUBLIC_BLACK: string;
    PUBLIC_WHITE: string;
    MAIN_BACKGROUND_COLOR: string;
    FOOTER_GRAY: string;
    PUBLIC_DARKGRAY: string;
    NO_ACTIVE_CATEGORY_COLOR: string;
    POST_TAG_COLOR: string;
    POST_TAG_BORDER_COLOR: string;
    POST_EDIT_TITLE_BORDER_COLOR: string;
    POST_EDIT_BUTTON_COLOR: string;
    BACKGROUND_USER_COLOR: string;
  }
}

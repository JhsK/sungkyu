import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    PUBLIC_BLACK: string;
    BACKGROUND_TYPING_COLOR: string;
    BACKGROUND_INTRO_COLOR: string;
    BACKGROUND_PROJECTS_COLOR: string;
    FONT_COLOR_WHITE: string;
    FONT_COLOR_DARKGRAY: string;
    NO_ACTIVE_CATEGORY_COLOR: string;
    POST_TAG_COLOR: string;
    POST_TAG_BORDER_COLOR: string;
    POST_EDIT_TITLE_BORDER_COLOR: string;
  }
}

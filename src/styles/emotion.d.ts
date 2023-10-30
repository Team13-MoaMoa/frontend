import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    main_brown: string;
    sub_bluegray: string;
    sub_yellow: string;
    background_gray: string;
    horizon_gray: string;
    unselected_text: string;
    text_color: string;
    mq: {
      tablet: string;
      mobile: string;
    };
  }
}

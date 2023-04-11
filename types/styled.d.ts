import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    custom: {
      accent: string;
      primary: string;
      secondary: {
        main: string;
        main70: string;
        main50: string;
        main30: string;
      };
      background: {
        main: string;
        secondary: string;
      };
      beige: {
        main: string;
        secondary: string;
        white: string;
      };
      error: string;
      success: string;
      gray: string;
    };
  }
}

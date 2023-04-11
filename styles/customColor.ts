import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
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
        white: string;
      };
      error: string;
      success: string;
      gray: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      accent?: string;
      primary?: string;
      secondary?: {
        main?: string;
        main70?: string;
        main50?: string;
        main30?: string;
      };
      background?: {
        main?: string;
        secondary?: string;
      };
      beige?: {
        main?: string;
        secondary?: string;
        white?: string;
      };
      error?: string;
      success?: string;
      gray?: string;
    };
  }
}
const color = createTheme({
  custom: {
    accent: "#ED6335",
    primary: "#F2916E",
    secondary: {
      main: "#594C48",
      main70: "#594C48B3",
      main50: "#594C4880",
      main30: "#594C484D",
    },
    background: {
      main: "#f8f8f8",
      secondary: "#3A3432",
    },
    beige: {
      main: "#FAF4EC",
      secondary: "#F1EAE0",
      white: "#ffffdfa",
    },
    error: "#DB3434",
    success: "#66D364",
    gray: "#B4B4B4",
  },
});

export type Color = keyof typeof color;

export default color;

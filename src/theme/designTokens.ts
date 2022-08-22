import { blue, blueGrey, grey, indigo, pink, teal } from "@mui/material/colors";

export type ColorModeType = "light" | "dark";

export const getDesignTokens = (mode: ColorModeType) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: blue,
          secondary: pink,
          divider: blue[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: grey[50],
            paper: grey[50],
          },
        }
      : {
          // palette values for dark mode
          primary: teal,
          secondary: indigo,
          divider: grey[700],
          background: {
            default: blueGrey[700],
            paper: blueGrey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
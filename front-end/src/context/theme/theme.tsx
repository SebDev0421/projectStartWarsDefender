import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Monoton, cursive'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{ fontFamily: 'Monoton'}]
      }
    }
  }
})

const Theme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default Theme;
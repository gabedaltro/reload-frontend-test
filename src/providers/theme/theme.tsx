import React, { useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createTheme } from "./config/createTheme";
import { ThemeProvider as JsStyleThemeProvider } from "@material-ui/styles";

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useMemo(() => {
    return createTheme("#2554d5", "#faa580");
  }, []);

  return (
    <StyledThemeProvider theme={theme}>
      <JsStyleThemeProvider theme={theme}>{children}</JsStyleThemeProvider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;

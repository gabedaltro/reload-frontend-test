import Color from "color";
import { DefaultTheme } from "styled-components";
import {
  breakpointBetween,
  breakpointDown,
  breakpointUp,
} from "./themeBreakpoints";

export function createTheme(primary: string, secondary: string): DefaultTheme {
  const primaryColor = Color(primary);
  const secondaryColor = Color(secondary);

  const primaryContrast =
    primaryColor.red() * 0.299 +
      primaryColor.green() * 0.587 +
      primaryColor.blue() * 0.114 >
    186
      ? "#222"
      : "#fff";

  const secondaryContrast =
    secondaryColor.red() * 0.299 +
      secondaryColor.green() * 0.587 +
      secondaryColor.blue() * 0.114 >
    186
      ? "#222"
      : "#fff";

  return {
    primary,
    secondary,
    contrast: primaryContrast,
    secondaryContrast: secondaryContrast,
    error: "#dc3545",
    success: "#28a745",
    primaryDark: primaryColor.darken(0.3).hex(),
    primaryLight: primaryColor.alpha(0.7).rgb().string(),
    secondaryDark: secondaryColor.darken(0.3).hex(),
    secondaryLight: secondaryColor.alpha(0.1).rgb().string(),
    breakpoints: {
      down: breakpointDown,
      between: breakpointBetween,
      up: breakpointUp,
    },
    shape: {
      borderRadius: 0,
    },
  };
}

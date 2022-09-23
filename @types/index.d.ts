// import original module declarations
import "styled-components";

export type BreakpointDefaults = "sm" | "md" | "lg" | "xl";

export interface Breakpoints {
  up: (key: BreakpointDefaults) => string;
  down: (key: BreakpointDefaults) => string;
  between: (start: BreakpointDefaults, end: BreakpointDefaults) => string;
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    contrast: string;
    secondaryContrast: string;
    error: string;
    success: string;
    primaryDark: string;
    primaryLight: string;
    secondaryDark: string;
    secondaryLight: string;
    breakpoints: Breakpoints;
    shape: {
      borderRadius: number;
    };
  }
}

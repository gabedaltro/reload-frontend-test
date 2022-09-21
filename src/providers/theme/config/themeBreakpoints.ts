export type BreakpointDefaults = "sm" | "md" | "lg" | "xl";

const breakpointsValues = {
  sm: 420,
  md: 720,
  lg: 1280,
  xl: 1920,
};

export function breakpointDown(key: BreakpointDefaults): string {
  return `@media (max-width: ${breakpointsValues[key]}px)`;
}

export function breakpointUp(key: BreakpointDefaults): string {
  return `@media (min-width: ${breakpointsValues[key]}px)`;
}

export function breakpointBetween(
  start: BreakpointDefaults,
  end: BreakpointDefaults
): string {
  return `@media (min-width: ${breakpointsValues[start]}px) and (max-width: ${breakpointsValues[end]}px)`;
}

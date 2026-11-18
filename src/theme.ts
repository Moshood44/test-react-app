// Design tokens: colors, spacing, typography, radius.
// Populated by the design-system phase; every screen consumes these tokens
// instead of inline values.
export const theme = {
  colors: {},
  spacing: {},
  typography: {},
  radius: {},
} as const;

export type Theme = typeof theme;
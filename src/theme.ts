// Design tokens: colors, spacing, typography, radius.
// Single visual source of truth. Screens consume these tokens instead of inline values.
export const theme = {
  colors: {
    background: '#ffffff',
    surface: '#f2f2f2',
    text: '#000000',
    textInverse: '#ffffff',
    primary: '#007aff',
    border: '#e0e0e0',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: '800' as const,
      lineHeight: 48,
    },
    body: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
  },
  radius: {
    sm: 4,
    md: 12,
    lg: 24,
  },
  motion: {
    transitionMs: 250,
  },
} as const;

export type Theme = typeof theme;
export type ColorKey = keyof typeof theme.colors;
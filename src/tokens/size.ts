// Size tokens — sourced from Figma "Simple Design System (Community)"
// Collection: Size (41 tokens)

export const space = {
  0: 0,
  50: 2,
  100: 4,
  150: 6,
  200: 8,
  300: 12,
  400: 16,
  600: 24,
  800: 32,
  1200: 48,
  1600: 64,
  2400: 96,
  4000: 160,
  'negative-100': -4,
  'negative-200': -8,
  'negative-300': -12,
  'negative-400': -16,
  'negative-600': -24,
} as const;

export const radius = {
  100: 4,
  200: 8,
  400: 16,
  full: 9999,
} as const;

export const depth = {
  0: 0,
  25: 1,
  100: 4,
  200: 8,
  400: 16,
  800: 32,
  1200: 48,
  'negative-25': -1,
  'negative-100': -4,
  'negative-200': -8,
  'negative-400': -16,
  'negative-800': -32,
  'negative-1200': -48,
} as const;

export const stroke = {
  border: 1,
  focusRing: 2,
} as const;

export const blur = {
  100: 4,
} as const;

export const icon = {
  small: 24,
  medium: 32,
  large: 40,
} as const;

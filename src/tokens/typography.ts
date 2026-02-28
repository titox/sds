// Typography tokens — sourced from Figma "Simple Design System (Community)"
// Collections: Typography Primitives (31) + Typography (35)

export const fontFamily = {
  sans: 'Inter',
  serif: 'Noto Serif',
  mono: 'Roboto Mono',
} as const;

export const fontSize = {
  '01': 12,
  '02': 14,
  '03': 16,
  '04': 20,
  '05': 24,
  '06': 32,
  '07': 40,
  '08': 48,
  '09': 64,
  '10': 72,
} as const;

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// Typography role tokens (from Typography collection)
export const typographyRoles = {
  'title-hero': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['10'], // 72px
    fontWeight: fontWeight.bold,
  },
  'title-page': {
    fontFamily: fontFamily.sans,
    fontSizeSmall: fontSize['07'],  // 40px
    fontSizeBase: fontSize['08'],   // 48px
    fontSizeLarge: fontSize['09'],  // 64px
    fontWeight: fontWeight.bold,
  },
  heading: {
    fontFamily: fontFamily.sans,
    fontSizeSmall: fontSize['04'],  // 20px
    fontSizeBase: fontSize['05'],   // 24px
    fontSizeLarge: fontSize['06'],  // 32px
    fontWeight: fontWeight.semibold,
  },
  subheading: {
    fontFamily: fontFamily.sans,
    fontSizeSmall: fontSize['03'],  // 16px
    fontSizeMedium: fontSize['04'], // 20px
    fontSizeLarge: fontSize['05'],  // 24px
    fontWeight: fontWeight.regular,
  },
  subtitle: {
    fontFamily: fontFamily.sans,
    fontSizeSmall: fontSize['05'],  // 24px
    fontSizeBase: fontSize['06'],   // 32px
    fontSizeLarge: fontSize['07'],  // 40px
    fontWeight: fontWeight.regular,
  },
  body: {
    fontFamily: fontFamily.sans,
    fontSizeSmall: fontSize['02'],  // 14px
    fontSizeMedium: fontSize['03'], // 16px
    fontSizeLarge: fontSize['04'],  // 20px
    fontWeightRegular: fontWeight.regular,
    fontWeightStrong: fontWeight.semibold,
  },
  code: {
    fontFamily: fontFamily.mono,
    fontSizeSmall: fontSize['02'],  // 14px
    fontSizeBase: fontSize['03'],   // 16px
    fontSizeLarge: fontSize['04'],  // 20px
    fontWeight: fontWeight.regular,
  },
} as const;

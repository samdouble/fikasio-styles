export const colors = {
  brand: '#7E5B9A',
  brandHover: '#AC95BE',
  brandText: '#400080',
  brandDark: '#714D8A',
  brandDarker: '#6A4782',
  brandDarkest: '#583B6B',
  brandLight: '#8B69AA',
  brandLighter: '#9170B0',
  brandLightest: '#A485C0',
  black: '#000000',
  white: '#FFFFFF',
  text: '#333333',
  textMuted: '#666666',
  textSecondary: '#6C757D',
  border: '#E0E0E0',
  borderStrong: '#CCCCCC',
  surface: '#FFFFFF',
  background: '#F5F5F5',
  danger: '#CE0000',
  overdue: '#FF0000',
} as const;

export type ColorName = keyof typeof colors;

export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 32,
} as const;

export type SpaceName = keyof typeof space;

export const fontFamily = {
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  mono: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
} as const;

export const fontSize = {
  sm: 14,
  body: 15,
  section: 18,
  title: 28,
} as const;

export const fontWeight = {
  regular: '400',
  semibold: '600',
  bold: '700',
} as const;

export type FontSizeName = keyof typeof fontSize;

export const radius = {
  none: 0,
} as const;

export const borderWidth = {
  thin: 1,
  accent: 3,
} as const;

export const theme = {
  borderWidth,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  radius,
  space,
} as const;

const kebab = (key: string) => key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const declarations = (
  group: string,
  values: Record<string, string | number>,
  unit = '',
) => Object.entries(values).map(([key, value]) => (
  `  --fikasio-${group}-${kebab(key)}: ${value}${unit};`
));

export const cssCustomProperties = [
  ':root {',
  ...declarations('color', colors),
  ...declarations('space', space, 'px'),
  ...declarations('font-size', fontSize, 'px'),
  ...declarations('font-weight', fontWeight),
  ...declarations('font-family', fontFamily),
  ...declarations('radius', radius, 'px'),
  ...declarations('border-width', borderWidth, 'px'),
  '}',
].join('\n');

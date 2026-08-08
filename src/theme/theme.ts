/**
 * Sistema de diseño de Encuadre — colores y tipografía tomados del propio
 * HIG de Apple para modo oscuro (System Colors, iOS), no inventados. La
 * fuente sigue siendo la del sistema (San Francisco en iOS, Roboto en
 * Android) — no se carga ninguna fuente custom, es intencional.
 */

export const colors = {
  background: '#000000',
  surface: '#1C1C1E',
  surfaceElevated: '#2C2C2E',
  surfaceOverlay: 'rgba(28,28,30,0.78)',
  accent: '#0A84FF',
  accentSoft: 'rgba(10,132,255,0.16)',
  text: '#FFFFFF',
  textSecondary: '#8E8E93',
  textTertiary: '#636366',
  separator: 'rgba(84,84,88,0.6)',
  danger: '#FF453A',
} as const;

/** Escala tipográfica de iOS (HIG Text Styles) — mismos pasos en toda la app. */
export const type = {
  largeTitle: { fontSize: 34, fontWeight: '700' as const },
  title1: { fontSize: 28, fontWeight: '700' as const },
  title2: { fontSize: 22, fontWeight: '700' as const },
  title3: { fontSize: 20, fontWeight: '600' as const },
  headline: { fontSize: 17, fontWeight: '600' as const },
  body: { fontSize: 17, fontWeight: '400' as const },
  callout: { fontSize: 16, fontWeight: '400' as const },
  subhead: { fontSize: 15, fontWeight: '400' as const },
  footnote: { fontSize: 13, fontWeight: '400' as const },
  caption: { fontSize: 12, fontWeight: '400' as const },
} as const;

export const radius = {
  small: 10,
  medium: 14,
  large: 20,
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

/**
 * Física de resorte aproximando las transiciones nativas de iOS — se usa
 * con Animated.spring(). Un poco de rebote, sin llegar a "gelatina".
 */
export const spring = {
  damping: 18,
  stiffness: 220,
  mass: 1,
  useNativeDriver: true,
} as const;

export const timing = {
  fast: 180,
  base: 300,
  slow: 420,
} as const;

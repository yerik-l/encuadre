/**
 * Sistema de diseño de Encuadre — superficies y tipografía tomadas del
 * propio HIG de Apple para modo oscuro (System Colors, iOS), no inventadas.
 * La fuente sigue siendo la del sistema (San Francisco en iOS, Roboto en
 * Android) — no se carga ninguna fuente custom, es intencional.
 *
 * El acento SÍ es una elección propia, no del HIG: el azul de sistema de
 * iOS (#0A84FF) es el color que usa cualquier app que copia la paleta de
 * Apple sin pensarlo — quedaba indistinguible de todo lo demás. En su
 * lugar, un ámbar cálido evocando luz de tungsteno (~3200K, el balance de
 * blancos más cálido que la propia app enseña en Conceptos) — tiene
 * sentido temático en una app sobre luz y exposición, y es visualmente
 * propio en vez de "la app que usa el azul de iOS". Separado a propósito
 * del naranja de "cambió" en ExposureTriangleWidget (más rojizo, sentido
 * de alerta) para que ambos se puedan distinguir sin confundirse.
 */

export const colors = {
  background: '#000000',
  surface: '#1C1C1E',
  surfaceElevated: '#2C2C2E',
  surfaceOverlay: 'rgba(28,28,30,0.78)',
  accent: '#E8A33D',
  accentSoft: 'rgba(232,163,61,0.16)',
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

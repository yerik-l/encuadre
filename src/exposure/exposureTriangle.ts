export type ExposureAxis = 'iso' | 'aperture' | 'shutter';

export const ISO_STOPS = [100, 200, 400, 800, 1600, 3200, 6400];
export const APERTURE_STOPS = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];
export const SHUTTER_STOPS = [
  1 / 2000,
  1 / 1000,
  1 / 500,
  1 / 250,
  1 / 125,
  1 / 60,
  1 / 30,
  1 / 15,
  1 / 8,
  1 / 4,
  1 / 2,
  1,
];

// +1 en el índice de ISO u obturador = una parada más de luz.
// +1 en apertura (número f más alto, abertura más cerrada) = una parada menos de luz.
const LIGHT_SIGN: Record<ExposureAxis, number> = { iso: 1, aperture: -1, shutter: 1 };

const LENGTHS: Record<ExposureAxis, number> = {
  iso: ISO_STOPS.length,
  aperture: APERTURE_STOPS.length,
  shutter: SHUTTER_STOPS.length,
};

export interface ExposureIndices {
  iso: number;
  aperture: number;
  shutter: number;
}

function clampIndex(index: number, axis: ExposureAxis): number {
  return Math.max(0, Math.min(LENGTHS[axis] - 1, index));
}

/**
 * Mueve un parámetro y redistribuye la compensación entre los otros dos, a
 * partes iguales en paradas de luz, para mantener la misma exposición total.
 * Así el usuario ve en tiempo real cómo se relacionan los tres lados del
 * triángulo, no solo lee sobre ellos. Si un eje llega a su límite (ej. ISO
 * mínimo), el resto de la compensación recae en el otro eje — y si ESE
 * también llega a su límite, se le da al primero una segunda oportunidad
 * (puede que le haya quedado margen sin usar). Sin ese segundo intento, se
 * perdía luz sin repartir cada vez que el eje que se ajustaba segundo topaba
 * con su límite aunque el primero todavía tuviera espacio de sobra — se
 * detectó moviendo el ISO de 100 a 6400 desde el extremo: la apertura
 * absorbía solo la mitad aunque tenía margen para absorberlo todo.
 */
export function rebalanceExposure(
  prev: ExposureIndices,
  changedAxis: ExposureAxis,
  newIndex: number
): ExposureIndices {
  const clampedNew = clampIndex(newIndex, changedAxis);
  const lightDelta = (clampedNew - prev[changedAxis]) * LIGHT_SIGN[changedAxis];
  const [axisA, axisB] = (['iso', 'aperture', 'shutter'] as ExposureAxis[]).filter(
    (axis) => axis !== changedAxis
  );

  const needed = -lightDelta; // luz que los otros dos ejes deben absorber en conjunto
  const firstShare = Math.round(needed / 2);

  const result: ExposureIndices = { ...prev, [changedAxis]: clampedNew };

  // Aplica una porción de luz a un eje (incremental sobre su estado actual en
  // `result`) y devuelve cuánta luz no logró absorber por llegar a su tope.
  function apply(axis: ExposureAxis, wantedLight: number): number {
    const currentIndex = result[axis];
    const wantedSteps = wantedLight * LIGHT_SIGN[axis];
    const finalIndex = clampIndex(currentIndex + wantedSteps, axis);
    const achievedLight = (finalIndex - currentIndex) * LIGHT_SIGN[axis];
    result[axis] = finalIndex;
    return wantedLight - achievedLight;
  }

  const leftoverA = apply(axisA, firstShare);
  const leftoverB = apply(axisB, needed - firstShare + leftoverA);
  if (leftoverB !== 0) {
    apply(axisA, leftoverB);
  }

  return result;
}

/**
 * Punto de partida ilustrativo según la luz ambiente — no es una medición
 * fotométrica exacta, solo un lugar razonable para empezar a explorar.
 */
export function startingIndicesForLux(lux: number | null): ExposureIndices {
  const l = lux ?? 500;
  if (l < 50) return { iso: 3, aperture: 1, shutter: 6 }; // ISO 800, f/2, 1/30
  if (l < 2000) return { iso: 1, aperture: 2, shutter: 5 }; // ISO 200, f/2.8, 1/60
  if (l < 15000) return { iso: 0, aperture: 4, shutter: 3 }; // ISO 100, f/5.6, 1/250
  return { iso: 0, aperture: 7, shutter: 4 }; // ISO 100, f/16, 1/125
}

/**
 * Suma neta de paradas de luz de una combinación (mismo signo que
 * `LIGHT_SIGN`: ISO y obturación suman, apertura resta). `rebalanceExposure`
 * intenta mantener este total constante al mover un eje — cuando lo logra,
 * dos combinaciones distintas dan el mismo total. Solo diverge cuando algún
 * eje topó con su límite y no pudo absorber toda la compensación; ese
 * diferencial es la sobre/subexposición real que tendría la foto.
 */
export function netExposureStops(indices: ExposureIndices): number {
  return (
    indices.iso * LIGHT_SIGN.iso +
    indices.aperture * LIGHT_SIGN.aperture +
    indices.shutter * LIGHT_SIGN.shutter
  );
}

export function formatIso(index: number): string {
  return `ISO ${ISO_STOPS[index]}`;
}

export function formatAperture(index: number): string {
  const value = APERTURE_STOPS[index];
  return `f/${value}`;
}

export function formatShutter(index: number): string {
  const value = SHUTTER_STOPS[index];
  if (value >= 1) return `${value}s`;
  return `1/${Math.round(1 / value)}`;
}

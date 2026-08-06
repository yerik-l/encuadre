import type { Translations } from '../i18n/translations';

export type ModeId =
  | 'retrato'
  | 'paisaje'
  | 'barrido'
  | 'accion'
  | 'retratoNocturno'
  | 'retratoEstudio';

export type SubjectSpeed = 'lento' | 'medio' | 'rapido';

export type LightBand = 'muy_oscuro' | 'interior' | 'exterior_nublado' | 'sol_directo';

export const LIGHT_BANDS: { id: LightBand; lux: number }[] = [
  { id: 'muy_oscuro', lux: 10 },
  { id: 'interior', lux: 150 },
  { id: 'exterior_nublado', lux: 3000 },
  { id: 'sol_directo', lux: 30000 },
];

export interface SensorSnapshot {
  /** Luxes medidos por el sensor de luz (solo Android) o elegidos manualmente por el usuario. */
  lux: number | null;
  /** Magnitud suavizada del giroscopio (rad/s aprox.), qué tan rápido se mueve el teléfono. */
  motionMagnitude: number;
  /** Solo aplica al modo 'accion': el teléfono no puede medir la velocidad del sujeto, se pregunta al usuario. */
  subjectSpeed?: SubjectSpeed;
}

export interface Guidance {
  headline: string;
  detail: string;
  suggestedIso: string;
  suggestedAperture: string;
  suggestedShutter: string;
}

export interface ModeDefinition {
  id: ModeId;
  usesMotion: boolean;
  usesSubjectSpeedInput: boolean;
  /** Regla de tercios sobre la cámara en vivo. */
  showCompositionGrid: boolean;
  /**
   * Botón para abrir el simulador interactivo del triángulo de exposición.
   * true en los 6 modos — sentir el intercambio entre ISO/apertura/obturador
   * con el dedo ayuda tanto en paisaje o barrido como en retrato.
   */
  showExposureTriangle: boolean;
  /** Notación pura de distancia focal — no necesita traducción (ej. "50–85mm"). */
  focalLength: string;
  getGuidance: (snapshot: SensorSnapshot, t: Translations) => Guidance;
}

function lightLabel(lux: number | null): 'oscuro' | 'medio' | 'brillante' {
  if (lux === null) return 'medio';
  if (lux < 50) return 'oscuro';
  if (lux < 15000) return 'medio';
  return 'brillante';
}

/**
 * De noche, la luz real casi nunca se acerca al umbral "brillante" de
 * lightLabel() (15000 lux es luz de día nublado). Con esos cortes, el texto
 * de "escena nocturna bien iluminada" nunca se activaba en la práctica —
 * de noche, hasta parado frente al letrero más brillante de una calle
 * apenas se llega a un par de cientos de lux. Estos cortes están calibrados
 * al rango real de luz nocturna en vez de reusar los de luz de día.
 */
function nightLightLabel(lux: number | null): 'oscuro' | 'medio' | 'brillante' {
  if (lux === null) return 'oscuro';
  if (lux < 15) return 'oscuro';
  if (lux < 150) return 'medio';
  return 'brillante';
}

/**
 * Interiores rara vez llegan a los 15000 lux de lightLabel() salvo pegado a
 * una ventana en pleno sol — y un cuarto "oscuro" real está más cerca de
 * 20-30 lux que de 50. Cortes propios para el rango real de luz interior.
 */
function indoorLightLabel(lux: number | null): 'oscuro' | 'medio' | 'brillante' {
  if (lux === null) return 'medio';
  if (lux < 30) return 'oscuro';
  if (lux < 500) return 'medio';
  return 'brillante';
}

/**
 * `accion` dispara a velocidades mucho más rápidas (1/250 a 1/1000+) que el
 * resto de los modos, que rondan 1/125-1/250 — cada parada de obturador más
 * rápida exige una parada más de ISO para mantener la misma exposición a la
 * misma apertura. Reusar lightLabel() (banda "medio" hasta 15000 lux, casi
 * cualquier exterior nublado) hacía que se recomendara ISO 800-3200 incluso
 * con luz de día de sobra para 1/500-1/800 con un ISO mucho más bajo — el
 * mismo tipo de descalibración que llevó a nightLightLabel/indoorLightLabel.
 * Bandas propias, calibradas al rango real de luz en el que se dispara
 * acción (deporte en gimnasio/interior oscuro vs. exterior nublado a pleno
 * sol) en vez de heredar los cortes genéricos de luz de día.
 */
function actionLightLabel(lux: number | null): 'oscuro' | 'medio' | 'brillante' {
  if (lux === null) return 'medio';
  if (lux < 500) return 'oscuro';
  if (lux < 15000) return 'medio';
  return 'brillante';
}

const retrato: ModeDefinition = {
  id: 'retrato',
  usesMotion: false,
  usesSubjectSpeedInput: false,
  showCompositionGrid: true,
  showExposureTriangle: true,
  focalLength: '50–85mm',
  getGuidance: ({ lux }, t) => {
    const band = lightLabel(lux);
    const text = t.guidance.retrato[band];
    if (band === 'oscuro') {
      return {
        ...text,
        suggestedIso: '800–1600',
        suggestedAperture: 'f/1.8–f/2.8',
        suggestedShutter: '1/125+',
      };
    }
    if (band === 'medio') {
      return {
        ...text,
        suggestedIso: '100–400',
        suggestedAperture: 'f/2.0–f/4.0',
        suggestedShutter: '1/125–1/250',
      };
    }
    return {
      ...text,
      suggestedIso: '100',
      suggestedAperture: 'f/4.0–f/5.6',
      suggestedShutter: '1/500–1/1000',
    };
  },
};

const paisaje: ModeDefinition = {
  id: 'paisaje',
  usesMotion: false,
  usesSubjectSpeedInput: false,
  showCompositionGrid: false,
  showExposureTriangle: true,
  focalLength: '16–35mm',
  getGuidance: ({ lux }, t) => {
    const band = lightLabel(lux);
    const text = t.guidance.paisaje[band];
    if (band === 'oscuro') {
      return {
        ...text,
        suggestedIso: '400–800',
        suggestedAperture: 'f/8–f/11',
        suggestedShutter: '≤1/15',
      };
    }
    if (band === 'medio') {
      return {
        ...text,
        suggestedIso: '100–200',
        suggestedAperture: 'f/8–f/11',
        suggestedShutter: '1/60–1/125',
      };
    }
    return {
      ...text,
      suggestedIso: '100',
      suggestedAperture: 'f/11–f/16',
      suggestedShutter: '1/250–1/500',
    };
  },
};

const barrido: ModeDefinition = {
  id: 'barrido',
  usesMotion: true,
  usesSubjectSpeedInput: false,
  showCompositionGrid: false,
  showExposureTriangle: true,
  focalLength: '24–70mm',
  getGuidance: ({ lux, motionMagnitude }, t) => {
    const band = lightLabel(lux);
    const isSteady = motionMagnitude < 0.6;
    const isFast = motionMagnitude > 1.6;

    let shutter = '1/30–1/60';
    let headline = t.guidance.barrido.headlineNormal;
    if (isFast) {
      shutter = '1/15–1/30';
      headline = t.guidance.barrido.headlineFast;
    } else if (isSteady) {
      shutter = '1/60–1/125';
      headline = t.guidance.barrido.headlineSteady;
    }

    return {
      headline,
      detail: t.guidance.barrido.detail,
      suggestedIso: band === 'oscuro' ? '400–800' : '100–200',
      suggestedAperture: 'f/8–f/16',
      suggestedShutter: shutter,
    };
  },
};

const accion: ModeDefinition = {
  id: 'accion',
  usesMotion: false,
  usesSubjectSpeedInput: true,
  showCompositionGrid: false,
  showExposureTriangle: true,
  focalLength: '70–200mm',
  getGuidance: ({ lux, subjectSpeed = 'medio' }, t) => {
    const band = actionLightLabel(lux);
    const shutterBySpeed: Record<SubjectSpeed, string> = {
      lento: '1/250',
      medio: '1/500–1/800',
      rapido: '1/1000+',
    };
    const headlineBySpeed: Record<SubjectSpeed, string> = {
      lento: t.guidance.accion.headlineLento,
      medio: t.guidance.accion.headlineMedio,
      rapido: t.guidance.accion.headlineRapido,
    };
    const isoByBand: Record<'oscuro' | 'medio' | 'brillante', string> = {
      oscuro: '1600–6400',
      medio: '400–1600',
      brillante: '100–200',
    };

    return {
      headline: headlineBySpeed[subjectSpeed],
      detail: t.guidance.accion.detail,
      suggestedIso: isoByBand[band],
      suggestedAperture: 'f/2.8–f/4.0',
      suggestedShutter: shutterBySpeed[subjectSpeed],
    };
  },
};

const retratoNocturno: ModeDefinition = {
  id: 'retratoNocturno',
  usesMotion: true,
  usesSubjectSpeedInput: false,
  showCompositionGrid: true,
  showExposureTriangle: true,
  focalLength: '35–50mm',
  getGuidance: ({ lux, motionMagnitude }, t) => {
    const band = nightLightLabel(lux);
    const text = t.guidance.retratoNocturno[band];
    const isShaky = motionMagnitude > 1.2;
    const detail = isShaky
      ? `${text.detail} ${t.guidance.retratoNocturno.shakeWarning}`
      : text.detail;

    if (band === 'oscuro') {
      return {
        headline: text.headline,
        detail,
        suggestedIso: '1600–3200',
        suggestedAperture: 'f/1.8–f/2.8',
        suggestedShutter: '1/60–1/125',
      };
    }
    if (band === 'medio') {
      return {
        headline: text.headline,
        detail,
        suggestedIso: '800–1600',
        suggestedAperture: 'f/2.0–f/2.8',
        suggestedShutter: '1/100–1/160',
      };
    }
    return {
      headline: text.headline,
      detail,
      suggestedIso: '400–800',
      suggestedAperture: 'f/2.8–f/4.0',
      suggestedShutter: '1/125–1/250',
    };
  },
};

const retratoEstudio: ModeDefinition = {
  id: 'retratoEstudio',
  usesMotion: false,
  usesSubjectSpeedInput: false,
  showCompositionGrid: true,
  showExposureTriangle: true,
  focalLength: '35–50mm',
  getGuidance: ({ lux }, t) => {
    const band = indoorLightLabel(lux);
    const text = t.guidance.retratoEstudio[band];
    if (band === 'oscuro') {
      return {
        ...text,
        suggestedIso: '800–1600',
        suggestedAperture: 'f/1.8–f/2.8',
        suggestedShutter: '1/60–1/125',
      };
    }
    if (band === 'medio') {
      return {
        ...text,
        suggestedIso: '200–400',
        suggestedAperture: 'f/2.0–f/4.0',
        suggestedShutter: '1/100–1/160',
      };
    }
    return {
      ...text,
      suggestedIso: '100',
      suggestedAperture: 'f/4.0–f/5.6',
      suggestedShutter: '1/160–1/250',
    };
  },
};

export const MODES: ModeDefinition[] = [
  retrato,
  paisaje,
  barrido,
  accion,
  retratoNocturno,
  retratoEstudio,
];

export function getMode(id: ModeId): ModeDefinition {
  const mode = MODES.find((m) => m.id === id);
  if (!mode) throw new Error(`Modo desconocido: ${id}`);
  return mode;
}

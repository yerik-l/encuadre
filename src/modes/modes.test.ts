import { DICTIONARIES } from '../i18n/translations';
import { MODES, getMode } from './modes';

const t = DICTIONARIES.es;

describe('retrato — bandas de luz de día', () => {
  const mode = getMode('retrato');

  it('luz oscura sugiere apertura abierta e ISO alto', () => {
    const g = mode.getGuidance({ lux: 10, motionMagnitude: 0, subjectSpeed: 'medio' }, t);
    expect(g.suggestedIso).toBe('800–1600');
    expect(g.suggestedAperture).toBe('f/1.8–f/2.8');
  });

  it('luz media da un rango cómodo', () => {
    const g = mode.getGuidance({ lux: 1000, motionMagnitude: 0, subjectSpeed: 'medio' }, t);
    expect(g.suggestedIso).toBe('100–400');
  });

  it('luz brillante cierra la apertura', () => {
    const g = mode.getGuidance({ lux: 20000, motionMagnitude: 0, subjectSpeed: 'medio' }, t);
    expect(g.suggestedIso).toBe('100');
    expect(g.suggestedAperture).toBe('f/4.0–f/5.6');
  });
});

describe('retratoNocturno — bandas calibradas a luz nocturna real (regresión del bug)', () => {
  const mode = getMode('retratoNocturno');

  it('muy poca luz (< 15 lux) cae en "oscuro"', () => {
    const g = mode.getGuidance({ lux: 5, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('1600–3200');
  });

  it('luz de calle típica (15-150 lux) cae en "medio"', () => {
    const g = mode.getGuidance({ lux: 100, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('800–1600');
  });

  it('escena nocturna bien iluminada (>=150 lux) SÍ activa "brillante" — antes del fix necesitaba 15000 lux, imposible de noche', () => {
    const g = mode.getGuidance({ lux: 300, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('400–800');
    expect(g.headline).toBe(t.guidance.retratoNocturno.brillante.headline);
  });

  it('sin lectura de sensor (lux null) asume oscuro por defecto, no medio', () => {
    const g = mode.getGuidance({ lux: null, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('1600–3200');
  });

  it('agrega el aviso de estabilidad cuando el teléfono se mueve mucho', () => {
    const quieto = mode.getGuidance({ lux: 5, motionMagnitude: 0.1 }, t);
    const movido = mode.getGuidance({ lux: 5, motionMagnitude: 2 }, t);
    expect(quieto.detail).not.toContain(t.guidance.retratoNocturno.shakeWarning);
    expect(movido.detail).toContain(t.guidance.retratoNocturno.shakeWarning);
  });
});

describe('retratoEstudio — bandas calibradas a luz interior real', () => {
  const mode = getMode('retratoEstudio');

  it('cuarto oscuro (< 30 lux) pide más luz', () => {
    const g = mode.getGuidance({ lux: 10, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('800–1600');
  });

  it('luz de ventana cómoda (30-500 lux) cae en "medio"', () => {
    const g = mode.getGuidance({ lux: 100, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('200–400');
  });

  it('cerca de una ventana en pleno sol (>=500 lux) cae en "brillante"', () => {
    const g = mode.getGuidance({ lux: 2000, motionMagnitude: 0 }, t);
    expect(g.suggestedIso).toBe('100');
  });
});

describe('barrido — la velocidad sugerida sigue la firmeza del movimiento', () => {
  const mode = getMode('barrido');

  it('movimiento muy quieto sugiere obturador más rápido', () => {
    const g = mode.getGuidance({ lux: 1000, motionMagnitude: 0.3 }, t);
    expect(g.suggestedShutter).toBe('1/60–1/125');
    expect(g.headline).toBe(t.guidance.barrido.headlineSteady);
  });

  it('movimiento en rango normal sugiere el obturador intermedio', () => {
    const g = mode.getGuidance({ lux: 1000, motionMagnitude: 1.0 }, t);
    expect(g.suggestedShutter).toBe('1/30–1/60');
    expect(g.headline).toBe(t.guidance.barrido.headlineNormal);
  });

  it('movimiento rápido sugiere el obturador más lento', () => {
    const g = mode.getGuidance({ lux: 1000, motionMagnitude: 2.0 }, t);
    expect(g.suggestedShutter).toBe('1/15–1/30');
    expect(g.headline).toBe(t.guidance.barrido.headlineFast);
  });
});

describe('accion — la velocidad y el ISO siguen la velocidad del sujeto declarada', () => {
  const mode = getMode('accion');

  it('sujeto lento pide la velocidad más conservadora', () => {
    const g = mode.getGuidance({ lux: 20000, motionMagnitude: 0, subjectSpeed: 'lento' }, t);
    expect(g.suggestedShutter).toBe('1/250');
  });

  it('sujeto rápido pide la velocidad más exigente', () => {
    const g = mode.getGuidance({ lux: 20000, motionMagnitude: 0, subjectSpeed: 'rapido' }, t);
    expect(g.suggestedShutter).toBe('1/1000+');
  });

  it('con poca luz sube el rango de ISO sugerido para compensar', () => {
    const oscuro = mode.getGuidance({ lux: 10, motionMagnitude: 0, subjectSpeed: 'medio' }, t);
    const brillante = mode.getGuidance({ lux: 20000, motionMagnitude: 0, subjectSpeed: 'medio' }, t);
    expect(oscuro.suggestedIso).toBe('1600–6400');
    expect(brillante.suggestedIso).toBe('100–200');
  });

  it('luz de día nublado (banda "medio") no exagera el ISO como con las bandas genéricas', () => {
    // Bug real: reusar lightLabel() ponía toda la banda "medio" (50-15000 lux,
    // casi cualquier exterior nublado) en el mismo ISO 800-3200 que luz muy
    // baja — actionLightLabel() la separa en su propia banda con un rango
    // mucho más bajo, acorde a la luz real disponible.
    const g = mode.getGuidance({ lux: 10000, motionMagnitude: 0, subjectSpeed: 'medio' }, t);
    expect(g.suggestedIso).toBe('400–1600');
  });
});

describe('MODES', () => {
  it('los 6 modos tienen el triángulo interactivo habilitado', () => {
    expect(MODES).toHaveLength(6);
    expect(MODES.every((m) => m.showExposureTriangle)).toBe(true);
  });
});

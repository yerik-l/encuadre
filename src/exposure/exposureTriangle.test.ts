import {
  ISO_STOPS,
  APERTURE_STOPS,
  SHUTTER_STOPS,
  formatAperture,
  formatIso,
  formatShutter,
  netExposureStops,
  rebalanceExposure,
} from './exposureTriangle';

function totalLight(i: { iso: number; aperture: number; shutter: number }) {
  // Misma fórmula que exposureTriangle.ts: ISO y obturador suman luz, apertura resta.
  return i.iso - i.aperture + i.shutter;
}

describe('rebalanceExposure', () => {
  it('mantiene la exposición total cuando ambos ejes tienen margen de sobra', () => {
    const prev = { iso: 1, aperture: 2, shutter: 5 };
    const next = rebalanceExposure(prev, 'iso', 3);

    expect(next.iso).toBe(3);
    expect(next.aperture).toBe(3);
    expect(next.shutter).toBe(4);
    expect(totalLight(next)).toBe(totalLight(prev));
  });

  it('le da al primer eje una segunda oportunidad cuando el segundo topa con su límite', () => {
    // Bug real encontrado: subir ISO de 100 a 6400 desde el extremo. El obturador
    // ya estaba en su tope (1/2000, índice 0) y no tenía margen para absorber nada,
    // pero la apertura sí tenía de sobra — antes del fix, la apertura solo absorbía
    // la mitad y la exposición quedaba mal compensada.
    const prev = { iso: 0, aperture: 0, shutter: 0 };
    const next = rebalanceExposure(prev, 'iso', 6);

    expect(next.iso).toBe(6);
    expect(next.aperture).toBe(6);
    expect(next.shutter).toBe(0);
    expect(totalLight(next)).toBe(totalLight(prev));
  });

  it('no revienta cuando ningún eje tiene margen suficiente (límite físico real)', () => {
    const prev = { iso: 0, aperture: APERTURE_STOPS.length - 1, shutter: 0 };
    const next = rebalanceExposure(prev, 'iso', ISO_STOPS.length - 1);

    // No puede conservar la exposición perfecta porque no hay margen, pero
    // tampoco debe arrojar índices fuera de rango.
    expect(next.aperture).toBeLessThanOrEqual(APERTURE_STOPS.length - 1);
    expect(next.aperture).toBeGreaterThanOrEqual(0);
    expect(next.shutter).toBeLessThanOrEqual(SHUTTER_STOPS.length - 1);
    expect(next.shutter).toBeGreaterThanOrEqual(0);
  });

  it('recorta el índice pedido a los límites válidos del eje que se mueve', () => {
    const prev = { iso: 0, aperture: 0, shutter: 0 };
    const next = rebalanceExposure(prev, 'iso', 999);

    expect(next.iso).toBe(ISO_STOPS.length - 1);
  });

  it('no hace nada si el eje que se mueve ya estaba en ese índice', () => {
    const prev = { iso: 2, aperture: 3, shutter: 4 };
    const next = rebalanceExposure(prev, 'aperture', 3);

    expect(next).toEqual(prev);
  });
});

describe('netExposureStops', () => {
  it('da el mismo total para dos combinaciones que rebalanceExposure considera equivalentes', () => {
    const prev = { iso: 1, aperture: 2, shutter: 5 };
    const next = rebalanceExposure(prev, 'iso', 3);

    expect(netExposureStops(next)).toBe(netExposureStops(prev));
  });

  it('detecta la sobre/subexposición real cuando un eje topa con su límite y no hay margen para compensar', () => {
    // Mismo escenario límite que "no revienta cuando ningún eje tiene margen
    // suficiente": aquí es donde el usuario reportó que la pantalla no
    // mostraba ningún cambio al ajustar el triángulo — este es el caso en el
    // que la foto real sí cambiaría, y netExposureStops debe reflejarlo.
    const prev = { iso: 0, aperture: APERTURE_STOPS.length - 1, shutter: 0 };
    const next = rebalanceExposure(prev, 'iso', ISO_STOPS.length - 1);

    expect(netExposureStops(next)).not.toBe(netExposureStops(prev));
  });
});

describe('formatters', () => {
  it('formatea ISO con el prefijo esperado', () => {
    expect(formatIso(0)).toBe('ISO 100');
  });

  it('formatea apertura como f-stop', () => {
    expect(formatAperture(0)).toBe('f/1.4');
  });

  it('formatea velocidades rápidas como fracción y la más lenta en segundos', () => {
    expect(formatShutter(0)).toBe('1/2000');
    expect(formatShutter(SHUTTER_STOPS.length - 1)).toBe('1s');
  });
});

import {
  ISO_STOPS,
  APERTURE_STOPS,
  SHUTTER_STOPS,
  formatAperture,
  formatIso,
  formatShutter,
  netExposureStops,
  rebalanceExposure,
  startingIndicesForLux,
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

describe('startingIndicesForLux — cuantización a las 4 bandas del triángulo', () => {
  // Sin `null` explícito: sin lectura de sensor ni selección manual, cae en
  // luz media (500 lux) en vez de asumir que está oscuro o muy iluminado.
  it('lux null cae en la banda media, no en un extremo', () => {
    expect(startingIndicesForLux(null)).toEqual({ iso: 1, aperture: 2, shutter: 5 });
  });

  it('justo debajo de cada corte de banda (49, 1999, 14999) da la banda más oscura de las dos', () => {
    expect(startingIndicesForLux(49)).toEqual({ iso: 3, aperture: 1, shutter: 6 });
    expect(startingIndicesForLux(1999)).toEqual({ iso: 1, aperture: 2, shutter: 5 });
    expect(startingIndicesForLux(14999)).toEqual({ iso: 0, aperture: 4, shutter: 3 });
  });

  it('justo en cada corte de banda (50, 2000, 15000) ya da la banda más brillante', () => {
    expect(startingIndicesForLux(50)).toEqual({ iso: 1, aperture: 2, shutter: 5 });
    expect(startingIndicesForLux(2000)).toEqual({ iso: 0, aperture: 4, shutter: 3 });
    expect(startingIndicesForLux(15000)).toEqual({ iso: 0, aperture: 7, shutter: 4 });
  });

  it('valores muy lejos de cualquier corte (5 lux, 100000 lux) no rompen la cuantización', () => {
    expect(startingIndicesForLux(5)).toEqual({ iso: 3, aperture: 1, shutter: 6 });
    expect(startingIndicesForLux(100000)).toEqual({ iso: 0, aperture: 7, shutter: 4 });
  });

  it('dos lecturas dentro de la misma banda dan exactamente los mismos índices', () => {
    // Esto es lo que hace posible resincronizar el triángulo comparando por
    // valor en vez de resetear en cada cambio de `lux` — el sensor real de
    // Android fluctúa constantemente sin cruzar de banda.
    expect(startingIndicesForLux(600)).toEqual(startingIndicesForLux(1800));
  });
});

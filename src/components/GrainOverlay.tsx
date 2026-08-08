import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  /** 0 = sin grano (ISO base), 1 = grano máximo (ISO más alto). */
  strength: number;
}

/**
 * Textura de ruido cuya opacidad sube con el ISO — no es el ruido real que
 * produciría el sensor a ese ISO, pero refuerza visualmente en vivo el
 * costo de subirlo, el mismo espíritu que DepthOfFieldOverlay para
 * apertura.
 *
 * `resizeMode="repeat"` (el original) tiene bugs conocidos y no
 * documentados de forma consistente entre plataformas/arquitecturas de
 * React Native — confirmado en un iPhone real: el ISO cambiaba en el chip
 * pero ningún grano aparecía en pantalla. En vez de repetir una textura
 * chica en mosaico, ahora se estira una textura más grande (512×512,
 * `assets/grain.png`) para cubrir la pantalla completa con
 * `resizeMode="cover"` — un modo mucho más simple y confiable. Cambio
 * intencional además: el ruido de ISO no es un fenómeno de bordes como el
 * desenfoque de apertura, así que cubrir toda la pantalla es más honesto
 * que limitarlo a tiras — se ve, y tiene más sentido.
 */
export function GrainOverlay({ strength }: Props) {
  if (strength <= 0) return null;

  return (
    <Image
      source={require('../../assets/grain.png')}
      style={[styles.grain, { opacity: strength * 0.5 }]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  grain: StyleSheet.absoluteFill,
});

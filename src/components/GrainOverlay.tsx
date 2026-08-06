import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  /** 0 = sin grano (ISO base), 1 = grano máximo (ISO más alto). */
  strength: number;
}

/**
 * Textura de ruido repetida cuya opacidad sube con el ISO — no es el ruido
 * real que produciría el sensor a ese ISO, pero refuerza visualmente en vivo
 * el costo de subirlo, el mismo espíritu que DepthOfFieldOverlay para
 * apertura.
 */
export function GrainOverlay({ strength }: Props) {
  if (strength <= 0) return null;

  return (
    <Image
      source={require('../../assets/grain.png')}
      style={[styles.grain, { opacity: strength * 0.5 }]}
      resizeMode="repeat"
    />
  );
}

const styles = StyleSheet.create({
  grain: StyleSheet.absoluteFill,
});

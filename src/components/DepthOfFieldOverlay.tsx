import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

interface Props {
  /** 0 = sin desenfoque (f/22), 1 = desenfoque máximo (f/1.4). */
  strength: number;
  blurTarget?: React.RefObject<View | null>;
}

/**
 * Aproxima la profundidad de campo desenfocando los bordes de la vista en
 * vivo (nunca el centro, donde está el sujeto) — más apertura abierta
 * (f-número bajo) = tiras más anchas y más intensas. No es blur óptico real
 * del sensor (expo-camera no expone control de apertura en iOS/Android,
 * solo en web), pero da una idea visual en vivo de lo que cambia.
 */
export function DepthOfFieldOverlay({ strength, blurTarget }: Props) {
  if (strength <= 0) return null;

  const intensity = 8 + strength * 42;
  const edgeSize = 28 + strength * 64;

  const edgeProps = {
    tint: 'default' as const,
    intensity,
    blurMethod: 'dimezisBlurViewSdk31Plus' as const,
    blurTarget,
    pointerEvents: 'none' as const,
  };

  return (
    <>
      <BlurView {...edgeProps} style={[styles.top, { height: edgeSize }]} />
      <BlurView {...edgeProps} style={[styles.bottom, { height: edgeSize }]} />
      <BlurView {...edgeProps} style={[styles.left, { width: edgeSize }]} />
      <BlurView {...edgeProps} style={[styles.right, { width: edgeSize }]} />
    </>
  );
}

const styles = StyleSheet.create({
  top: { position: 'absolute', top: 0, left: 0, right: 0 },
  bottom: { position: 'absolute', bottom: 0, left: 0, right: 0 },
  left: { position: 'absolute', top: 0, bottom: 0, left: 0 },
  right: { position: 'absolute', top: 0, bottom: 0, right: 0 },
});

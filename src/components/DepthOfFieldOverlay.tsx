import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

interface Props {
  /** 0 = sin desenfoque (f/22), 1 = desenfoque máximo (f/1.4). */
  strength: number;
  blurTarget?: React.RefObject<View | null>;
}

/**
 * Aproxima la profundidad de campo con un efecto en los bordes de la vista
 * en vivo (nunca el centro, donde está el sujeto) — más apertura abierta
 * (f-número bajo) = tiras más anchas y más intensas. No es blur óptico real
 * del sensor (expo-camera no expone control de apertura en iOS/Android,
 * solo en web), pero da una idea visual en vivo de lo que cambia.
 *
 * En iOS, `UIVisualEffectView` (lo que usa expo-blur por debajo) no logra
 * desenfocar el contenido de un `AVCaptureVideoPreviewLayer` — la capa de
 * video de la cámara se compone por un camino de hardware que no pasa por
 * el snapshot normal que el blur necesita tomar de "lo que tiene detrás".
 * Confirmado en un iPhone real: los números del triángulo cambiaban, pero
 * ningún blur aparecía sobre la cámara en vivo — limitación conocida y
 * documentada, no un prop mal puesto (github.com/expo/expo issues #6613,
 * #3935). En vez de un efecto que se ve pero solo a veces funciona, en iOS
 * se usa un viñeteado oscuro (opacidad, no blur) — no es óptico tampoco,
 * pero sí se ve consistentemente en cualquier dispositivo. Android sí
 * desenfoca de verdad porque expo-blur ahí usa un método distinto
 * (BlurTargetView, ver CameraLiveView.tsx) que si funciona sobre la vista
 * de cámara.
 */
export function DepthOfFieldOverlay({ strength, blurTarget }: Props) {
  if (strength <= 0) return null;

  const edgeSize = 28 + strength * 64;

  if (Platform.OS === 'ios') {
    // Sin piso: antes empezaba en 0.16 de opacidad apenas `strength` pasaba
    // de 0, así que el primer tope de apertura hacía aparecer el viñeteado
    // de golpe en vez de entrar gradual. Ahora escala desde 0 de verdad —
    // en f/22 (strength=0) no hay ningún efecto, ni siquiera un asomo.
    const opacity = strength * 0.66;
    return (
      <>
        <View pointerEvents="none" style={[styles.top, styles.tint, { height: edgeSize, opacity }]} />
        <View pointerEvents="none" style={[styles.bottom, styles.tint, { height: edgeSize, opacity }]} />
        <View pointerEvents="none" style={[styles.left, styles.tint, { width: edgeSize, opacity }]} />
        <View pointerEvents="none" style={[styles.right, styles.tint, { width: edgeSize, opacity }]} />
      </>
    );
  }

  // Mismo motivo que arriba: sin piso, escala desde 0 de verdad.
  const intensity = strength * 50;
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
  tint: { backgroundColor: '#000' },
});

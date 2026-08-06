import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { CameraView } from 'expo-camera';
import { BlurTargetView } from 'expo-blur';

interface Props {
  /**
   * En Android, expo-blur necesita que el contenido a desenfocar esté
   * envuelto en un BlurTargetView (su blur no ve "lo de atrás"
   * automáticamente como en iOS). Este ref se le pasa a los BlurView de
   * DepthOfFieldOverlay para que sepan qué desenfocar; en iOS no hace
   * falta, así que ahí se ignora.
   */
  blurTargetRef?: React.RefObject<View | null>;
}

export function CameraLiveView({ blurTargetRef }: Props) {
  const camera = <CameraView style={StyleSheet.absoluteFill} facing="back" />;

  if (Platform.OS === 'android') {
    return (
      <BlurTargetView ref={blurTargetRef} style={StyleSheet.absoluteFill}>
        {camera}
      </BlurTargetView>
    );
  }

  return camera;
}

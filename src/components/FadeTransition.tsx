import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { timing } from '../theme/theme';

interface Props {
  /** Cambiar este valor dispara la transición de entrada del contenido nuevo. */
  screenKey: string;
  children: React.ReactNode;
}

/**
 * Envoltorio genérico para las pantallas de nivel superior (tutorial →
 * permiso → selector de modos → cámara → conceptos). RN no trae un
 * navigator con transiciones nativas ya integrado a este flujo manual
 * basado en estado, así que esto es lo mínimo para que el cambio de
 * pantalla no sea un corte instantáneo: fade + un leve desplazamiento
 * vertical de entrada, sin agregar react-native-reanimated ni un router.
 */
export function FadeTransition({ screenKey, children }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(8);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: timing.base,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: timing.base,
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenKey]);

  return (
    <Animated.View style={[styles.fill, { opacity, transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
});

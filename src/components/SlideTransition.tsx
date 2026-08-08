import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { spring } from '../theme/theme';

interface Props {
  /** Cambiar este valor dispara la entrada del contenido nuevo. */
  screenKey: string;
  children: React.ReactNode;
}

/**
 * Variante horizontal de FadeTransition, para navegación con jerarquía
 * (lista → detalle, como un push de UINavigationController) — entra
 * deslizándose desde la derecha con física de resorte en vez del fundido
 * vertical que usan las pantallas de nivel superior sin esa jerarquía.
 */
export function SlideTransition({ screenKey, children }: Props) {
  const translateX = useRef(new Animated.Value(24)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    translateX.setValue(24);
    opacity.setValue(0);
    Animated.parallel([
      Animated.spring(translateX, { toValue: 0, ...spring }),
      Animated.timing(opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenKey]);

  return (
    <Animated.View style={[styles.fill, { opacity, transform: [{ translateX }] }]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
});

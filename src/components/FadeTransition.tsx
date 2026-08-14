import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
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
 * pantalla no sea un corte instantáneo — sin agregar react-native-reanimated
 * ni un router.
 *
 * En vez de un fundido cruzado genérico, hay un parpadeo negro breve antes
 * de que aparezca el contenido nuevo — la referencia es el corte entre
 * disparos de un obturador real (un fotograma negro, después la siguiente
 * escena), no solo "le agregamos Animated". El contenido se retrasa unos
 * milisegundos respecto al parpadeo para que el negro se sienta genuino,
 * no como una curva de opacidad distinta disfrazada.
 */
export function FadeTransition({ screenKey, children }: Props) {
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(8)).current;
  const blink = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    contentOpacity.setValue(0);
    translateY.setValue(8);
    blink.setValue(1);
    Animated.timing(blink, { toValue: 0, duration: 90, useNativeDriver: true }).start();
    Animated.sequence([
      Animated.delay(70),
      Animated.parallel([
        Animated.timing(contentOpacity, { toValue: 1, duration: timing.base, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration: timing.base, useNativeDriver: true }),
      ]),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenKey]);

  return (
    <View style={styles.fill}>
      <Animated.View style={[styles.fill, { opacity: contentOpacity, transform: [{ translateY }] }]}>
        {children}
      </Animated.View>
      <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.blink, { opacity: blink }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  blink: { backgroundColor: '#000' },
});

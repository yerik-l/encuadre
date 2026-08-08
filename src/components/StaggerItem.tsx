import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { timing } from '../theme/theme';

interface Props {
  index: number;
  children: React.ReactNode;
}

/**
 * Entrada escalonada para listas cortas (selector de modos, lista de
 * Conceptos) — cada elemento aparece un poco después del anterior en vez de
 * que la lista entera aparezca de golpe. El delay crece con `index` pero se
 * limita a 8 elementos (~consistente con listas que se ven de un vistazo)
 * para no hacer esperar de más en listas largas como Conceptos.
 */
export function StaggerItem({ index, children }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    const delay = Math.min(index, 8) * 40;
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: timing.slow,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: timing.slow,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>{children}</Animated.View>
  );
}

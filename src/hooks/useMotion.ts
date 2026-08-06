import { useEffect, useRef, useState } from 'react';
import { Gyroscope } from 'expo-sensors';

const SMOOTHING = 0.25;
const UPDATE_INTERVAL_MS = 100;

/**
 * Magnitud suavizada del giroscopio: qué tan rápido y firme se mueve el teléfono
 * mientras el usuario sigue a su sujeto (usado por el modo Barrido). No mide al
 * sujeto en sí, solo el movimiento del propio dispositivo.
 */
export function useMotion(enabled: boolean): number {
  const [magnitude, setMagnitude] = useState(0);
  const smoothed = useRef(0);

  useEffect(() => {
    if (!enabled) {
      smoothed.current = 0;
      setMagnitude(0);
      return;
    }

    Gyroscope.setUpdateInterval(UPDATE_INTERVAL_MS);
    const subscription = Gyroscope.addListener(({ x, y, z }) => {
      const instant = Math.sqrt(x * x + y * y + z * z);
      smoothed.current = smoothed.current * (1 - SMOOTHING) + instant * SMOOTHING;
      setMagnitude(smoothed.current);
    });

    return () => subscription.remove();
  }, [enabled]);

  return magnitude;
}

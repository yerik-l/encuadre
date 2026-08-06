import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { LightSensor } from 'expo-sensors';

interface AmbientLightState {
  /** Luxes reales del sensor, o null si no hay sensor disponible en este dispositivo/plataforma. */
  lux: number | null;
  /** false si la plataforma o el dispositivo no exponen sensor de luz ambiente. */
  sensorAvailable: boolean;
}

/**
 * expo-sensors solo expone LightSensor con datos reales en Android: iOS no da acceso
 * al sensor de luz ambiente a apps de terceros por restricciones de la plataforma.
 * Cuando sensorAvailable es false, la pantalla debe caer a un selector manual de luz.
 */
export function useAmbientLight(): AmbientLightState {
  const [lux, setLux] = useState<number | null>(null);
  const [sensorAvailable, setSensorAvailable] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }

    let subscription: { remove: () => void } | null = null;
    let cancelled = false;

    LightSensor.isAvailableAsync().then((isAvailable) => {
      if (cancelled) return;
      setSensorAvailable(isAvailable);
      if (!isAvailable) return;

      LightSensor.setUpdateInterval(500);
      subscription = LightSensor.addListener(({ illuminance }) => {
        setLux(illuminance);
      });
    });

    return () => {
      cancelled = true;
      subscription?.remove();
    };
  }, []);

  return { lux, sensorAvailable };
}

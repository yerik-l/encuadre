import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from './App';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default
);

jest.mock('expo-localization', () => ({
  getLocales: () => [{ languageCode: 'es' }],
}));

jest.mock('expo-status-bar', () => ({
  StatusBar: () => null,
}));

jest.mock('expo-camera', () => {
  const ReactActual = require('react');
  return {
    useCameraPermissions: () => {
      const [permission, setPermission] = ReactActual.useState({
        granted: false,
        canAskAgain: true,
      });
      const request = ReactActual.useCallback(async () => {
        const next = { granted: true, canAskAgain: true };
        setPermission(next);
        return next;
      }, []);
      return [permission, request];
    },
    CameraView: 'CameraView',
  };
});

/**
 * Avanza el tutorial tocando "Siguiente" hasta llegar al botón final
 * ("Empezar") y lo presiona. Re-consulta la pantalla en cada vuelta en vez
 * de asumir un número fijo de pasos, para no depender de cuántos pasos
 * tenga el tutorial en un momento dado.
 *
 * IMPORTANTE: fireEvent.press() de @testing-library/react-native es
 * asíncrono (devuelve una Promise) — sin el await, el press se dispara
 * después de que el código ya siguió de largo, y las aserciones ven
 * siempre el estado de antes del toque.
 */
async function skipTutorial() {
  for (let i = 0; i < 10; i++) {
    const startButton = screen.queryByText('Empezar');
    if (startButton) {
      await fireEvent.press(startButton);
      return;
    }
    await fireEvent.press(screen.getByText('Siguiente'));
  }
  throw new Error('El tutorial no llegó al botón "Empezar" tras 10 toques.');
}

describe('App — enrutamiento de pantallas', () => {
  // El mock de AsyncStorage es un almacén en memoria que persiste entre
  // pruebas de este archivo si no se limpia — sin esto, la segunda prueba
  // en adelante hereda "tutorialSeen: true" de la prueba anterior y el
  // tutorial nunca vuelve a aparecer.
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('muestra el tutorial la primera vez que se abre la app', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('Cómo usar Encuadre')).toBeTruthy());
  });

  it('después del tutorial pide permiso de cámara antes de mostrar los modos', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('Cómo usar Encuadre')).toBeTruthy());
    await skipTutorial();
    await waitFor(() => expect(screen.getByText('Encuadre necesita tu cámara')).toBeTruthy());
  });

  it('tras dar el permiso, muestra el selector de modos con los 7 modos', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('Cómo usar Encuadre')).toBeTruthy());
    await skipTutorial();
    await waitFor(() => expect(screen.getByText('Encuadre necesita tu cámara')).toBeTruthy());

    await fireEvent.press(screen.getByText('Dar permiso de cámara'));

    await waitFor(() => expect(screen.getByText('Retrato en exteriores')).toBeTruthy());
    expect(screen.getByText('Retrato de acción')).toBeTruthy();
    expect(screen.getByText('Retrato en estudio / interiores')).toBeTruthy();
    expect(screen.getByText('Enfoque')).toBeTruthy();
  });

  it('el banner de Conceptos abre y cierra la lista de 19 temas', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('Cómo usar Encuadre')).toBeTruthy());
    await skipTutorial();
    await waitFor(() => expect(screen.getByText('Encuadre necesita tu cámara')).toBeTruthy());
    await fireEvent.press(screen.getByText('Dar permiso de cámara'));
    await waitFor(() => expect(screen.getByText('Retrato en exteriores')).toBeTruthy());

    await fireEvent.press(screen.getByText('Conceptos'));
    await waitFor(() => expect(screen.getByText('Triángulo de exposición')).toBeTruthy());

    await fireEvent.press(screen.getByText('‹ Modos'));
    await waitFor(() => expect(screen.getByText('Retrato en exteriores')).toBeTruthy());
  });
});

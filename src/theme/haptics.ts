import * as Haptics from 'expo-haptics';

/**
 * Envuelve expo-haptics para que un fallo silencioso (simulador sin motor
 * háptico, web, etc.) no rompa la interacción — el toque visual/animado ya
 * cumple su función aunque el teléfono no vibre.
 */
export const haptics = {
  tap: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
  },
  select: () => {
    Haptics.selectionAsync().catch(() => {});
  },
  success: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  },
};

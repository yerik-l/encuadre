import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/theme';

/**
 * Tratamiento de "nota al margen" en vez de caja plana — un borde de acento
 * a la izquierda, como una anotación a mano en un manual técnico impreso,
 * en vez de una tarjeta genérica de "tip" que podría ser de cualquier app.
 */
export function ConceptTip({ text }: { text: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderLeftWidth: 2,
    borderLeftColor: colors.accent,
    paddingLeft: spacing.md,
    marginTop: spacing.xl,
  },
  text: { color: '#DDDDDD', fontSize: 14, lineHeight: 20, fontStyle: 'italic' },
});

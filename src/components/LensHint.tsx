import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import type { ModeId } from '../modes/modes';

interface Props {
  modeId: ModeId;
  focalLength: string;
  /** Oculta el texto de "por qué" y el lente de kit para caber en espacios chicos, como la tarjeta de selección de modo. */
  compact?: boolean;
}

export function LensHint({ modeId, focalLength, compact }: Props) {
  const { t } = useLanguage();
  const lens = t.lens[modeId];
  const [showKitTip, setShowKitTip] = useState(false);

  if (compact) {
    return (
      <View style={styles.compactContainer}>
        <Text style={styles.compactLine}>
          {focalLength} · {lens.type}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.line}>
        {t.lens.label}: {focalLength} · {lens.type}
      </Text>
      <Text style={styles.tip}>{lens.tip}</Text>

      <Pressable
        onPress={() => setShowKitTip((v) => !v)}
        style={styles.kitToggle}
        accessibilityRole="button"
        accessibilityLabel={t.a11y.toggleKitLensTip}
        accessibilityState={{ expanded: showKitTip }}
      >
        <Text style={styles.kitToggleText}>
          {t.lens.kitLensLabel} {showKitTip ? '▴' : '▾'}
        </Text>
      </Pressable>
      {showKitTip && <Text style={styles.tip}>{lens.kitLensTip}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  line: { color: '#fff', fontSize: 12, fontWeight: '600' },
  tip: { color: '#ccc', fontSize: 11, marginTop: 2, lineHeight: 15 },
  kitToggle: { marginTop: 6 },
  kitToggleText: { color: '#7fa8ff', fontSize: 11, fontWeight: '700' },
  compactContainer: { marginTop: 6 },
  compactLine: { color: '#7fa8ff', fontSize: 12, fontWeight: '600' },
});

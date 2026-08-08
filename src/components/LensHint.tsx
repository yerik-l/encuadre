import React, { useState } from 'react';
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import type { ModeId } from '../modes/modes';
import { colors, radius, spacing } from '../theme/theme';
import { haptics } from '../theme/haptics';

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
        onPress={() => {
          haptics.select();
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShowKitTip((v) => !v);
        }}
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
    backgroundColor: colors.surfaceOverlay,
    borderRadius: radius.small,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  line: { color: colors.text, fontSize: 12, fontWeight: '600' },
  tip: { color: '#CCCCCC', fontSize: 11, marginTop: 2, lineHeight: 15 },
  kitToggle: { marginTop: 6 },
  kitToggleText: { color: colors.accent, fontSize: 11, fontWeight: '700' },
  compactContainer: { marginTop: 6 },
  compactLine: { color: colors.accent, fontSize: 12, fontWeight: '600' },
});

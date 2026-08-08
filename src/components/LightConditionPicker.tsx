import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import { LIGHT_BANDS, type LightBand } from '../modes/modes';
import { colors, radius, spacing } from '../theme/theme';
import { haptics } from '../theme/haptics';

interface Props {
  selected: LightBand;
  onSelect: (band: LightBand) => void;
}

/**
 * Selector manual de luz para cuando no hay sensor de luz ambiente disponible
 * (iOS siempre, o Android sin el sensor). El usuario elige la condición que más
 * se parece a su entorno en vez de que la app finja medirla.
 */
export function LightConditionPicker({ selected, onSelect }: Props) {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      <Text style={styles.label} accessibilityRole="header">
        {t.lightPicker.label}
      </Text>
      <View style={styles.row} accessibilityRole="radiogroup">
        {LIGHT_BANDS.map((band) => (
          <Pressable
            key={band.id}
            onPress={() => {
              haptics.select();
              onSelect(band.id);
            }}
            style={[styles.pill, selected === band.id && styles.pillSelected]}
            accessibilityRole="radio"
            accessibilityState={{ selected: selected === band.id }}
            accessibilityLabel={t.lightBands[band.id]}
          >
            <Text style={[styles.pillText, selected === band.id && styles.pillTextSelected]}>
              {t.lightBands[band.id]}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: { color: colors.text, fontSize: 13, marginBottom: spacing.sm, fontWeight: '600' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  pill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceOverlay,
  },
  pillSelected: { backgroundColor: colors.text },
  pillText: { color: colors.text, fontSize: 12 },
  pillTextSelected: { color: colors.background, fontWeight: '700' },
});

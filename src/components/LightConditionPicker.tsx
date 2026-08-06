import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import { LIGHT_BANDS, type LightBand } from '../modes/modes';

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
            onPress={() => onSelect(band.id)}
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
  label: { color: '#fff', fontSize: 13, marginBottom: 8, fontWeight: '600' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  pillSelected: { backgroundColor: '#fff' },
  pillText: { color: '#fff', fontSize: 12 },
  pillTextSelected: { color: '#111', fontWeight: '700' },
});

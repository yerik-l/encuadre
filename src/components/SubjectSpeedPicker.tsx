import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import type { SubjectSpeed } from '../modes/modes';
import { colors, radius, spacing } from '../theme/theme';
import { haptics } from '../theme/haptics';

const OPTIONS: SubjectSpeed[] = ['lento', 'medio', 'rapido'];

interface Props {
  selected: SubjectSpeed;
  onSelect: (speed: SubjectSpeed) => void;
}

/**
 * El teléfono no puede medir qué tan rápido se mueve el sujeto (solo su propio
 * movimiento), así que para el modo Acción se le pregunta directamente al usuario.
 */
export function SubjectSpeedPicker({ selected, onSelect }: Props) {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      <Text style={styles.label} accessibilityRole="header">
        {t.subjectSpeed.label}
      </Text>
      <View style={styles.row} accessibilityRole="radiogroup">
        {OPTIONS.map((option) => (
          <Pressable
            key={option}
            onPress={() => {
              haptics.select();
              onSelect(option);
            }}
            style={[styles.pill, selected === option && styles.pillSelected]}
            accessibilityRole="radio"
            accessibilityState={{ selected: selected === option }}
            accessibilityLabel={t.subjectSpeed[option]}
          >
            <Text style={[styles.pillText, selected === option && styles.pillTextSelected]}>
              {t.subjectSpeed[option]}
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

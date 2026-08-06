import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import type { SubjectSpeed } from '../modes/modes';

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
            onPress={() => onSelect(option)}
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

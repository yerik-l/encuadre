import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import type { Guidance } from '../modes/modes';

export function GuidanceOverlay({ guidance }: { guidance: Guidance }) {
  const { t } = useLanguage();
  return (
    <View style={styles.card}>
      {/* maxHeight + scroll: algunos textos (ej. el aviso de estabilidad del
          modo nocturno se concatena al texto normal) pueden crecer más de lo
          que cabe en pantallas chicas — mejor dejar scroll que tapar el resto
          de la interfaz o cortar el texto en silencio. */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.headline}>{guidance.headline}</Text>
        <Text style={styles.detail}>{guidance.detail}</Text>
      </ScrollView>
      {guidance.suggestedFocus ? (
        // 4 chips (solo el modo 'enfoque'): en fila los 4 se aprietan
        // demasiado en pantallas chicas (ej. iPhone SE) y "f/1.8–f/2.8" se
        // corta o se envuelve — se acomodan en 2x2 en vez de forzar la fila.
        <>
          <View style={styles.settingsRow}>
            <SettingChip label={t.chips.iso} value={guidance.suggestedIso} />
            <SettingChip label={t.chips.aperture} value={guidance.suggestedAperture} />
          </View>
          <View style={[styles.settingsRow, styles.settingsRowSecond]}>
            <SettingChip label={t.chips.shutter} value={guidance.suggestedShutter} />
            <SettingChip label={t.chips.focus} value={guidance.suggestedFocus} />
          </View>
        </>
      ) : (
        <View style={styles.settingsRow}>
          <SettingChip label={t.chips.iso} value={guidance.suggestedIso} />
          <SettingChip label={t.chips.aperture} value={guidance.suggestedAperture} />
          <SettingChip label={t.chips.shutter} value={guidance.suggestedShutter} />
        </View>
      )}
    </View>
  );
}

function SettingChip({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipLabel}>{label}</Text>
      <Text style={styles.chipValue} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
    backgroundColor: 'rgba(0,0,0,0.72)',
    borderRadius: 16,
    padding: 16,
  },
  scroll: { maxHeight: 160 },
  headline: { color: '#fff', fontSize: 17, fontWeight: '700' },
  detail: { color: '#e5e5e5', fontSize: 14, lineHeight: 20, marginTop: 6 },
  settingsRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
  settingsRowSecond: { marginTop: 8 },
  chip: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  chipLabel: { color: '#aaa', fontSize: 11, textTransform: 'uppercase' },
  chipValue: { color: '#fff', fontSize: 15, fontWeight: '600', marginTop: 2 },
});

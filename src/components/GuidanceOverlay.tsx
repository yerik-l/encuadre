import React, { useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../i18n/LanguageContext';
import type { Guidance } from '../modes/modes';
import { colors, radius, spacing, timing, type } from '../theme/theme';

export function GuidanceOverlay({ guidance }: { guidance: Guidance }) {
  const { t } = useLanguage();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Solo se anima una vez al montar (cambiar de modo) — la guía sigue
    // actualizando su texto en vivo con el sensor sin volver a animarse,
    // para no destellar cada vez que cambia la luz.
    Animated.timing(opacity, { toValue: 1, duration: timing.base, useNativeDriver: true }).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.cardWrap, { opacity }]}>
      <BlurView intensity={45} tint="dark" style={styles.card}>
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
      </BlurView>
    </Animated.View>
  );
}

function SettingChip({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.chip} accessible accessibilityLabel={`${label}: ${value}`}>
      <Text style={styles.chipLabel}>{label}</Text>
      <Text style={styles.chipValue} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrap: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.xl,
    borderRadius: radius.large,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  card: { padding: spacing.lg },
  scroll: { maxHeight: 160 },
  headline: { color: colors.text, ...type.headline },
  detail: { color: '#E5E5E7', ...type.subhead, lineHeight: 20, marginTop: 6 },
  settingsRow: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.md },
  settingsRowSecond: { marginTop: spacing.sm },
  chip: {
    flex: 1,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.small,
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  chipLabel: { color: colors.textSecondary, fontSize: 11, textTransform: 'uppercase' },
  chipValue: { color: colors.text, fontSize: 15, fontWeight: '600', marginTop: 2, fontVariant: ['tabular-nums'] },
});

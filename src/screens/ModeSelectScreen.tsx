import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { LensHint } from '../components/LensHint';
import { StaggerItem } from '../components/StaggerItem';
import { useLanguage } from '../i18n/LanguageContext';
import { MODES, type ModeId } from '../modes/modes';
import { colors, radius, spacing, type } from '../theme/theme';
import { haptics } from '../theme/haptics';

interface Props {
  onSelectMode: (id: ModeId) => void;
  onOpenTutorial: () => void;
  onOpenConcepts: () => void;
}

export function ModeSelectScreen({ onSelectMode, onOpenTutorial, onOpenConcepts }: Props) {
  const { t, language, setLanguage } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{t.appName}</Text>
        <View style={styles.headerButtons}>
          <Pressable
            style={({ pressed }) => [styles.iconButton, pressed && styles.pressedShrink]}
            onPress={() => {
              haptics.tap();
              onOpenTutorial();
            }}
            accessibilityRole="button"
            accessibilityLabel={t.a11y.openTutorial}
          >
            <Text style={styles.iconButtonText}>{t.tutorial.reopenLabel}</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.iconButton, pressed && styles.pressedShrink]}
            onPress={() => {
              haptics.select();
              setLanguage(language === 'es' ? 'en' : 'es');
            }}
            accessibilityRole="button"
            accessibilityLabel={language === 'es' ? t.a11y.switchToEnglish : t.a11y.switchToSpanish}
          >
            <Text style={styles.iconButtonText}>
              {language === 'es' ? t.language.en : t.language.es}
            </Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.subtitle}>{t.modeSelect.subtitle}</Text>

      <Pressable
        onPress={() => {
          haptics.tap();
          onOpenConcepts();
        }}
        accessibilityRole="button"
        accessibilityLabel={t.a11y.openConcepts}
        accessibilityHint={t.concepts.sectionSubtitle}
        style={({ pressed }) => [styles.conceptsBannerWrap, pressed && styles.pressedShrink]}
      >
        <BlurView intensity={40} tint="dark" style={styles.conceptsBanner}>
          <Text style={styles.conceptsIcon}>{t.concepts.reopenLabel}</Text>
          <View style={styles.conceptsTextBlock}>
            <Text style={styles.conceptsTitle}>{t.concepts.sectionTitle}</Text>
            <Text style={styles.conceptsSubtitle}>{t.concepts.sectionSubtitle}</Text>
          </View>
        </BlurView>
      </Pressable>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {MODES.map((mode, index) => (
          <StaggerItem key={mode.id} index={index}>
            <Pressable
              style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
              onPress={() => {
                haptics.tap();
                onSelectMode(mode.id);
              }}
              accessibilityRole="button"
              accessibilityLabel={t.modes[mode.id].title}
              accessibilityHint={t.modes[mode.id].subtitle}
            >
              <ModeCardMotif modeId={mode.id} />
              <Text style={styles.cardTitle}>{t.modes[mode.id].title}</Text>
              <Text style={styles.cardSubtitle}>{t.modes[mode.id].subtitle}</Text>
              <LensHint modeId={mode.id} focalLength={mode.focalLength} compact />
            </Pressable>
          </StaggerItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * Pista visual sutil detrás del texto de la tarjeta, propia de lo que ese
 * modo enseña — nunca decoración porque sí. Puntos de bokeh para retrato
 * nocturno (luces de fondo desenfocadas), estelas para barrido/acción
 * (el motivo del propio modo). El resto de los modos se queda con la
 * tarjeta lisa a propósito — no todos necesitan un motivo, forzarlo en los
 * 7 sería decoración, no información.
 */
function ModeCardMotif({ modeId }: { modeId: ModeId }) {
  if (modeId === 'retratoNocturno') {
    return (
      <View style={styles.motif} pointerEvents="none">
        <View style={[styles.bokehDot, { width: 24, height: 24, top: 8, right: 14, opacity: 0.16 }]} />
        <View style={[styles.bokehDot, { width: 14, height: 14, top: 36, right: 42, opacity: 0.12 }]} />
        <View style={[styles.bokehDot, { width: 9, height: 9, top: 18, right: 50, opacity: 0.2 }]} />
      </View>
    );
  }
  if (modeId === 'barrido' || modeId === 'accion') {
    return (
      <View style={styles.motif} pointerEvents="none">
        <View style={[styles.motionStreak, { top: 16, width: 48, opacity: 0.12 }]} />
        <View style={[styles.motionStreak, { top: 28, width: 30, opacity: 0.16 }]} />
        <View style={[styles.motionStreak, { top: 40, width: 40, opacity: 0.1 }]} />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.xl },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  title: { color: colors.text, ...type.title1 },
  headerButtons: { flexDirection: 'row', gap: spacing.sm },
  iconButton: {
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonText: { color: colors.text, ...type.caption, fontWeight: '700' },
  pressedShrink: { opacity: 0.75, transform: [{ scale: 0.96 }] },
  subtitle: { color: colors.textSecondary, ...type.subhead, marginTop: spacing.sm, lineHeight: 20 },
  conceptsBannerWrap: { marginTop: spacing.xl, borderRadius: radius.large, overflow: 'hidden' },
  conceptsBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  conceptsIcon: { fontSize: 26 },
  conceptsTextBlock: { flex: 1 },
  conceptsTitle: { color: colors.text, ...type.headline },
  conceptsSubtitle: { color: colors.textSecondary, ...type.caption, marginTop: 2, lineHeight: 16 },
  list: { marginTop: spacing.xl },
  listContent: { gap: spacing.md, paddingBottom: spacing.xl },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.large,
    padding: spacing.lg + 2,
    overflow: 'hidden',
  },
  cardPressed: { backgroundColor: colors.surfaceElevated, transform: [{ scale: 0.985 }] },
  cardTitle: { color: colors.text, ...type.headline },
  cardSubtitle: { color: colors.textSecondary, ...type.footnote, marginTop: 4 },
  motif: StyleSheet.absoluteFill,
  bokehDot: { position: 'absolute', borderRadius: 999, backgroundColor: colors.accent },
  motionStreak: { position: 'absolute', right: 12, height: 2, borderRadius: 1, backgroundColor: colors.text },
});

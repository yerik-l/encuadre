import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LensHint } from '../components/LensHint';
import { useLanguage } from '../i18n/LanguageContext';
import { MODES, type ModeId } from '../modes/modes';

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
            style={styles.iconButton}
            onPress={onOpenTutorial}
            accessibilityRole="button"
            accessibilityLabel={t.a11y.openTutorial}
          >
            <Text style={styles.iconButtonText}>{t.tutorial.reopenLabel}</Text>
          </Pressable>
          <Pressable
            style={styles.iconButton}
            onPress={() => setLanguage(language === 'es' ? 'en' : 'es')}
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
        style={styles.conceptsBanner}
        onPress={onOpenConcepts}
        accessibilityRole="button"
        accessibilityLabel={t.a11y.openConcepts}
        accessibilityHint={t.concepts.sectionSubtitle}
      >
        <Text style={styles.conceptsIcon}>{t.concepts.reopenLabel}</Text>
        <View style={styles.conceptsTextBlock}>
          <Text style={styles.conceptsTitle}>{t.concepts.sectionTitle}</Text>
          <Text style={styles.conceptsSubtitle}>{t.concepts.sectionSubtitle}</Text>
        </View>
      </Pressable>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {MODES.map((mode) => (
          <Pressable
            key={mode.id}
            style={styles.card}
            onPress={() => onSelectMode(mode.id)}
            accessibilityRole="button"
            accessibilityLabel={t.modes[mode.id].title}
            accessibilityHint={t.modes[mode.id].subtitle}
          >
            <Text style={styles.cardTitle}>{t.modes[mode.id].title}</Text>
            <Text style={styles.cardSubtitle}>{t.modes[mode.id].subtitle}</Text>
            <LensHint modeId={mode.id} focalLength={mode.focalLength} compact />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  title: { color: '#fff', fontSize: 28, fontWeight: '800' },
  headerButtons: { flexDirection: 'row', gap: 8 },
  iconButton: {
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  subtitle: { color: '#aaa', fontSize: 14, marginTop: 8, lineHeight: 20 },
  conceptsBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2a3a6e',
  },
  conceptsIcon: { fontSize: 26 },
  conceptsTextBlock: { flex: 1 },
  conceptsTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },
  conceptsSubtitle: { color: '#9aa8d0', fontSize: 12, marginTop: 2, lineHeight: 16 },
  list: { marginTop: 20 },
  listContent: { gap: 12, paddingBottom: 24 },
  card: { backgroundColor: '#1c1c1e', borderRadius: 16, padding: 18 },
  cardTitle: { color: '#fff', fontSize: 17, fontWeight: '700' },
  cardSubtitle: { color: '#9a9a9a', fontSize: 13, marginTop: 4 },
});

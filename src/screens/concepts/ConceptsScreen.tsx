import React, { useEffect, useState } from 'react';
import { BackHandler, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CONCEPTS,
  type ConceptId,
  type ItemsConceptContent,
  type SectionsConceptContent,
} from '../../concepts/concepts';
import { SlideTransition } from '../../components/SlideTransition';
import { StaggerItem } from '../../components/StaggerItem';
import { useLanguage } from '../../i18n/LanguageContext';
import { colors, radius, spacing, type } from '../../theme/theme';
import { haptics } from '../../theme/haptics';
import { ItemsConceptDetail } from './ItemsConceptDetail';
import { SectionsConceptDetail } from './SectionsConceptDetail';

interface Props {
  onBack: () => void;
}

export function ConceptsScreen({ onBack }: Props) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<ConceptId | null>(null);

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (selected) {
        setSelected(null);
      } else {
        onBack();
      }
      return true;
    });
    return () => subscription.remove();
  }, [selected, onBack]);

  if (selected) {
    const conceptIndex = CONCEPTS.findIndex((c) => c.id === selected);
    const concept = CONCEPTS[conceptIndex];
    const topic = t.concepts.topics[selected];
    const content = t.concepts[selected];

    return (
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => {
            haptics.tap();
            setSelected(null);
          }}
          hitSlop={12}
          style={styles.backRow}
          accessibilityRole="button"
          accessibilityLabel={t.concepts.sectionTitle}
        >
          <Text style={styles.back}>{t.common.back}</Text>
        </Pressable>
        <SlideTransition screenKey={selected}>
          <ScrollView contentContainerStyle={styles.detailContent} showsVerticalScrollIndicator={false}>
            {/* Numeración de guía de campo — "03 / 19" en vez de solo el
                título, como la referencia cruzada de un manual impreso. */}
            <Text style={styles.detailIndex}>
              {String(conceptIndex + 1).padStart(2, '0')} / {String(CONCEPTS.length).padStart(2, '0')}
            </Text>
            <Text style={styles.detailTitle} accessibilityRole="header">
              {topic.title}
            </Text>
            {concept.shape === 'sections' ? (
              <SectionsConceptDetail content={content as SectionsConceptContent} />
            ) : (
              <ItemsConceptDetail content={content as ItemsConceptContent} />
            )}
          </ScrollView>
        </SlideTransition>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={onBack}
        hitSlop={12}
        style={styles.backRow}
        accessibilityRole="button"
        accessibilityLabel={t.a11y.backToModes}
      >
        <Text style={styles.back}>{t.common.back}</Text>
      </Pressable>
      <Text style={styles.title} accessibilityRole="header">
        {t.concepts.sectionTitle}
      </Text>
      <Text style={styles.subtitle}>{t.concepts.sectionSubtitle}</Text>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {CONCEPTS.map(({ id }, index) => (
          <StaggerItem key={id} index={index}>
            <Pressable
              style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
              onPress={() => {
                haptics.tap();
                setSelected(id);
              }}
              accessibilityRole="button"
              accessibilityLabel={t.concepts.topics[id].title}
              accessibilityHint={t.concepts.topics[id].subtitle}
            >
              <Text style={styles.cardTitle}>{t.concepts.topics[id].title}</Text>
              <Text style={styles.cardSubtitle}>{t.concepts.topics[id].subtitle}</Text>
            </Pressable>
          </StaggerItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.xl },
  backRow: { marginTop: spacing.md },
  back: { color: colors.accent, ...type.subhead, fontWeight: '600' },
  title: { color: colors.text, ...type.title1, marginTop: spacing.lg },
  subtitle: { color: colors.textSecondary, ...type.subhead, marginTop: spacing.sm, lineHeight: 20 },
  list: { marginTop: spacing.xl },
  listContent: { gap: spacing.sm + 2, paddingBottom: spacing.xl },
  card: { backgroundColor: colors.surface, borderRadius: radius.large, padding: spacing.lg },
  cardPressed: { backgroundColor: colors.surfaceElevated, transform: [{ scale: 0.985 }] },
  cardTitle: { color: colors.text, ...type.headline },
  cardSubtitle: { color: colors.textSecondary, ...type.caption, marginTop: 3 },
  detailContent: { paddingTop: spacing.lg, paddingBottom: 40 },
  detailIndex: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    fontVariant: ['tabular-nums'],
    marginBottom: 6,
  },
  detailTitle: { color: colors.text, ...type.title2, marginBottom: spacing.lg },
});

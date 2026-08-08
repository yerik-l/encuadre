import React, { useEffect, useState } from 'react';
import { BackHandler, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CONCEPTS,
  type ConceptId,
  type ItemsConceptContent,
  type SectionsConceptContent,
} from '../../concepts/concepts';
import { useLanguage } from '../../i18n/LanguageContext';
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
    const concept = CONCEPTS.find((c) => c.id === selected)!;
    const topic = t.concepts.topics[selected];
    const content = t.concepts[selected];

    return (
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => setSelected(null)}
          hitSlop={12}
          style={styles.backRow}
          accessibilityRole="button"
          accessibilityLabel={t.concepts.sectionTitle}
        >
          <Text style={styles.back}>{t.common.back}</Text>
        </Pressable>
        <ScrollView contentContainerStyle={styles.detailContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.detailTitle} accessibilityRole="header">
            {topic.title}
          </Text>
          {concept.shape === 'sections' ? (
            <SectionsConceptDetail content={content as SectionsConceptContent} />
          ) : (
            <ItemsConceptDetail content={content as ItemsConceptContent} />
          )}
        </ScrollView>
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
        {CONCEPTS.map(({ id }) => (
          <Pressable
            key={id}
            style={styles.card}
            onPress={() => setSelected(id)}
            accessibilityRole="button"
            accessibilityLabel={t.concepts.topics[id].title}
            accessibilityHint={t.concepts.topics[id].subtitle}
          >
            <Text style={styles.cardTitle}>{t.concepts.topics[id].title}</Text>
            <Text style={styles.cardSubtitle}>{t.concepts.topics[id].subtitle}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  backRow: { marginTop: 12 },
  back: { color: '#7fa8ff', fontSize: 14, fontWeight: '600' },
  title: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 16 },
  subtitle: { color: '#aaa', fontSize: 14, marginTop: 8, lineHeight: 20 },
  list: { marginTop: 24 },
  listContent: { gap: 10, paddingBottom: 24 },
  card: { backgroundColor: '#1c1c1e', borderRadius: 16, padding: 16 },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },
  cardSubtitle: { color: '#9a9a9a', fontSize: 12, marginTop: 3 },
  detailContent: { paddingTop: 16, paddingBottom: 40 },
  detailTitle: { color: '#fff', fontSize: 24, fontWeight: '800', marginBottom: 16 },
});

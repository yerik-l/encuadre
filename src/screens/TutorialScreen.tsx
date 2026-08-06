import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  onFinish: () => void;
}

export function TutorialScreen({ onFinish }: Props) {
  const { t } = useLanguage();
  const [stepIndex, setStepIndex] = useState(0);
  const steps = t.tutorial.steps;
  const isLastStep = stepIndex === steps.length - 1;
  const step = steps[stepIndex];

  function handleNext() {
    if (isLastStep) {
      onFinish();
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title} accessibilityRole="header">
          {t.tutorial.title}
        </Text>
        <Pressable onPress={onFinish} hitSlop={12} accessibilityRole="button" accessibilityLabel={t.tutorial.skip}>
          <Text style={styles.skip}>{t.tutorial.skip}</Text>
        </Pressable>
      </View>

      <View
        style={styles.content}
        accessible
        accessibilityLabel={`${step.title}. ${step.body}`}
      >
        <Text style={styles.stepTitle}>{step.title}</Text>
        <Text style={styles.stepBody}>{step.body}</Text>
      </View>

      <View
        style={styles.dots}
        accessibilityRole="text"
        accessibilityLabel={`${stepIndex + 1} / ${steps.length}`}
      >
        {steps.map((_, i) => (
          <View key={i} style={[styles.dot, i === stepIndex && styles.dotActive]} />
        ))}
      </View>

      <Pressable
        style={styles.nextButton}
        onPress={handleNext}
        accessibilityRole="button"
        accessibilityLabel={isLastStep ? t.tutorial.start : t.tutorial.next}
      >
        <Text style={styles.nextButtonText}>
          {isLastStep ? t.tutorial.start : t.tutorial.next}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 24 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#fff', fontSize: 16, fontWeight: '700' },
  skip: { color: '#888', fontSize: 14 },
  content: { flex: 1, justifyContent: 'center' },
  stepTitle: { color: '#fff', fontSize: 26, fontWeight: '800', marginBottom: 12 },
  stepBody: { color: '#bbb', fontSize: 16, lineHeight: 24 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 24 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#333' },
  dotActive: { backgroundColor: '#fff' },
  nextButton: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  nextButtonText: { color: '#111', fontSize: 16, fontWeight: '700' },
});

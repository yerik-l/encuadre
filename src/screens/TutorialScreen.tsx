import React, { useEffect, useState } from 'react';
import { BackHandler, LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SlideTransition } from '../components/SlideTransition';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing, type } from '../theme/theme';
import { haptics } from '../theme/haptics';

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
      haptics.success();
      onFinish();
    } else {
      haptics.select();
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setStepIndex((i) => i + 1);
    }
  }

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (stepIndex > 0) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setStepIndex((i) => i - 1);
      } else {
        onFinish();
      }
      return true;
    });
    return () => subscription.remove();
  }, [stepIndex, onFinish]);

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

      <SlideTransition screenKey={String(stepIndex)}>
        <View
          style={styles.content}
          accessible
          accessibilityLabel={`${step.title}. ${step.body}`}
        >
          <Text style={styles.stepTitle}>{step.title}</Text>
          <Text style={styles.stepBody}>{step.body}</Text>
        </View>
      </SlideTransition>

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
        style={({ pressed }) => [styles.nextButton, pressed && styles.nextButtonPressed]}
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
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.xl },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: colors.text, ...type.headline },
  skip: { color: colors.textSecondary, ...type.subhead },
  content: { flex: 1, justifyContent: 'center' },
  stepTitle: { color: colors.text, ...type.title1, marginBottom: spacing.md },
  stepBody: { color: colors.textSecondary, ...type.body, lineHeight: 24 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: spacing.sm, marginBottom: spacing.xl },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.surfaceElevated },
  dotActive: { backgroundColor: colors.accent, width: 20 },
  nextButton: {
    backgroundColor: colors.text,
    borderRadius: radius.medium,
    paddingVertical: 16,
    alignItems: 'center',
  },
  nextButtonPressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  nextButtonText: { color: colors.background, ...type.headline },
});

import React, { useEffect, useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useCameraPermissions } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageProvider, useLanguage } from './src/i18n/LanguageContext';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { FadeTransition } from './src/components/FadeTransition';
import { ModeSelectScreen } from './src/screens/ModeSelectScreen';
import { LearningScreen } from './src/screens/LearningScreen';
import { TutorialScreen } from './src/screens/TutorialScreen';
import { ConceptsScreen } from './src/screens/concepts/ConceptsScreen';
import { colors, radius, spacing, type } from './src/theme/theme';
import { haptics } from './src/theme/haptics';
import type { ModeId } from './src/modes/modes';

const TUTORIAL_SEEN_KEY = 'encuadre.tutorialSeen';

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

function AppContent() {
  const { t } = useLanguage();
  const [permission, requestPermission] = useCameraPermissions();
  const [activeMode, setActiveMode] = useState<ModeId | null>(null);
  const [tutorialSeen, setTutorialSeen] = useState<boolean | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showConcepts, setShowConcepts] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(TUTORIAL_SEEN_KEY).then((value) => {
      const seen = value === 'true';
      setTutorialSeen(seen);
      setShowTutorial(!seen);
    });
  }, []);

  function finishTutorial() {
    setShowTutorial(false);
    if (!tutorialSeen) {
      setTutorialSeen(true);
      AsyncStorage.setItem(TUTORIAL_SEEN_KEY, 'true').catch(() => {});
    }
  }

  let content: React.ReactNode;
  let screenKey: string;

  if (tutorialSeen === null || !permission) {
    screenKey = 'blank';
    content = <View style={styles.blank} />;
  } else if (showTutorial) {
    screenKey = 'tutorial';
    content = <TutorialScreen onFinish={finishTutorial} />;
  } else if (!permission.granted) {
    // iOS no vuelve a mostrar el diálogo del sistema después del primer
    // rechazo — canAskAgain en false es la señal de que hay que mandar al
    // usuario a Configuración en vez de reintentar requestPermission().
    screenKey = permission.canAskAgain ? 'permission' : 'permission-settings';
    content = permission.canAskAgain ? (
      <SafeAreaView style={styles.permissionContainer}>
        <Text style={styles.permissionTitle}>{t.permission.title}</Text>
        <Text style={styles.permissionText}>{t.permission.body}</Text>
        <PrimaryButton label={t.permission.button} onPress={requestPermission} />
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.permissionContainer}>
        <Text style={styles.permissionTitle}>{t.permission.settingsTitle}</Text>
        <Text style={styles.permissionText}>{t.permission.settingsBody}</Text>
        <PrimaryButton label={t.permission.settingsButton} onPress={() => Linking.openSettings()} />
      </SafeAreaView>
    );
  } else if (showConcepts) {
    screenKey = 'concepts';
    content = <ConceptsScreen onBack={() => setShowConcepts(false)} />;
  } else if (activeMode === null) {
    screenKey = 'modeSelect';
    content = (
      <ModeSelectScreen
        onSelectMode={setActiveMode}
        onOpenTutorial={() => setShowTutorial(true)}
        onOpenConcepts={() => setShowConcepts(true)}
      />
    );
  } else {
    screenKey = `mode:${activeMode}`;
    content = <LearningScreen modeId={activeMode} onBack={() => setActiveMode(null)} />;
  }

  return (
    <>
      {screenKey === 'blank' ? (
        // Sin FadeTransition acá a propósito: es una pantalla en blanco
        // mientras se resuelve el permiso/tutorial guardado, invisible al
        // usuario. Envolverla igual hacía que la primera pantalla real
        // jugara DOS fundidos seguidos (uno para la pantalla en blanco, otro
        // para la real) — un arranque visiblemente más lento de lo que es.
        content
      ) : (
        <FadeTransition screenKey={screenKey}>{content}</FadeTransition>
      )}
      <StatusBar style="light" />
    </>
  );
}

function PrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={() => {
        haptics.tap();
        onPress();
      }}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
    >
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  blank: { flex: 1, backgroundColor: colors.background },
  permissionContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: spacing.xl,
    gap: spacing.lg,
  },
  permissionTitle: { color: colors.text, ...type.title2 },
  permissionText: { color: colors.textSecondary, ...type.callout, lineHeight: 21 },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: radius.medium,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonPressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  primaryButtonText: { color: colors.text, ...type.headline },
});

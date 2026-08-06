import React, { useEffect, useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useCameraPermissions } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageProvider, useLanguage } from './src/i18n/LanguageContext';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { ModeSelectScreen } from './src/screens/ModeSelectScreen';
import { LearningScreen } from './src/screens/LearningScreen';
import { TutorialScreen } from './src/screens/TutorialScreen';
import { ConceptsScreen } from './src/screens/concepts/ConceptsScreen';
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

  if (tutorialSeen === null || !permission) {
    content = <View style={styles.blank} />;
  } else if (showTutorial) {
    content = <TutorialScreen onFinish={finishTutorial} />;
  } else if (!permission.granted) {
    // iOS no vuelve a mostrar el diálogo del sistema después del primer
    // rechazo — canAskAgain en false es la señal de que hay que mandar al
    // usuario a Configuración en vez de reintentar requestPermission().
    content = permission.canAskAgain ? (
      <SafeAreaView style={styles.permissionContainer}>
        <Text style={styles.permissionTitle}>{t.permission.title}</Text>
        <Text style={styles.permissionText}>{t.permission.body}</Text>
        <Button title={t.permission.button} onPress={requestPermission} />
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.permissionContainer}>
        <Text style={styles.permissionTitle}>{t.permission.settingsTitle}</Text>
        <Text style={styles.permissionText}>{t.permission.settingsBody}</Text>
        <Button title={t.permission.settingsButton} onPress={() => Linking.openSettings()} />
      </SafeAreaView>
    );
  } else if (showConcepts) {
    content = <ConceptsScreen onBack={() => setShowConcepts(false)} />;
  } else if (activeMode === null) {
    content = (
      <ModeSelectScreen
        onSelectMode={setActiveMode}
        onOpenTutorial={() => setShowTutorial(true)}
        onOpenConcepts={() => setShowConcepts(true)}
      />
    );
  } else {
    content = <LearningScreen modeId={activeMode} onBack={() => setActiveMode(null)} />;
  }

  return (
    <>
      {content}
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  blank: { flex: 1, backgroundColor: '#111' },
  permissionContainer: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  permissionTitle: { color: '#fff', fontSize: 22, fontWeight: '800' },
  permissionText: { color: '#aaa', fontSize: 14, lineHeight: 20 },
});

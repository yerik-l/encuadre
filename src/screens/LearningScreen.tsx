import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, Pressable, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { CameraLiveView } from '../components/CameraLiveView';
import { DepthOfFieldOverlay } from '../components/DepthOfFieldOverlay';
import { ExposureTriangleWidget } from '../components/ExposureTriangleWidget';
import { GrainOverlay } from '../components/GrainOverlay';
import { GuidanceOverlay } from '../components/GuidanceOverlay';
import { LensHint } from '../components/LensHint';
import { LightConditionPicker } from '../components/LightConditionPicker';
import { RuleOfThirdsGrid } from '../components/RuleOfThirdsGrid';
import { SubjectSpeedPicker } from '../components/SubjectSpeedPicker';
import { APERTURE_STOPS, ISO_STOPS, type ExposureIndices } from '../exposure/exposureTriangle';
import { useAmbientLight } from '../hooks/useAmbientLight';
import { useMotion } from '../hooks/useMotion';
import { useLanguage } from '../i18n/LanguageContext';
import { LIGHT_BANDS, type LightBand, type ModeId, type SubjectSpeed, getMode } from '../modes/modes';
import { colors, radius, spacing, type } from '../theme/theme';
import { haptics } from '../theme/haptics';

interface Props {
  modeId: ModeId;
  onBack: () => void;
}

export function LearningScreen({ modeId, onBack }: Props) {
  const { t } = useLanguage();
  const mode = useMemo(() => getMode(modeId), [modeId]);

  const { lux: sensorLux, sensorAvailable } = useAmbientLight();
  const motionMagnitude = useMotion(mode.usesMotion);

  const [manualBand, setManualBand] = useState<LightBand>('interior');
  const [subjectSpeed, setSubjectSpeed] = useState<SubjectSpeed>('medio');
  const [showTriangle, setShowTriangle] = useState(false);
  const [exposureOffset, setExposureOffset] = useState(0);
  const [triangleIndices, setTriangleIndices] = useState<ExposureIndices | null>(null);
  const cameraBlurTargetRef = useRef<View>(null);

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (showTriangle) {
        setShowTriangle(false);
        return true;
      }
      onBack();
      return true;
    });
    return () => subscription.remove();
  }, [onBack, showTriangle]);

  const effectiveLux = sensorAvailable
    ? sensorLux
    : LIGHT_BANDS.find((b) => b.id === manualBand)?.lux ?? null;

  const guidance = mode.getGuidance(
    { lux: effectiveLux, motionMagnitude, subjectSpeed },
    t
  );

  const overlayOpacity = Math.min(Math.abs(exposureOffset) * 0.16, 0.6);

  // Apertura invertida: índice bajo (f/1.4) = máximo desenfoque de fondo.
  const apertureStrength = triangleIndices
    ? 1 - triangleIndices.aperture / (APERTURE_STOPS.length - 1)
    : 0;
  const isoStrength = triangleIndices ? triangleIndices.iso / (ISO_STOPS.length - 1) : 0;

  return (
    <View style={styles.container}>
      <CameraLiveView blurTargetRef={cameraBlurTargetRef} />
      <DepthOfFieldOverlay strength={apertureStrength} blurTarget={cameraBlurTargetRef} />
      <GrainOverlay strength={isoStrength} />
      {exposureOffset !== 0 && (
        <View
          pointerEvents="none"
          style={[
            styles.exposureOverlay,
            { opacity: overlayOpacity, backgroundColor: exposureOffset < 0 ? '#000' : '#fff' },
          ]}
        />
      )}
      {mode.showCompositionGrid && <RuleOfThirdsGrid />}

      <View style={styles.topBar}>
        <Pressable
          onPress={() => {
            haptics.tap();
            onBack();
          }}
          style={({ pressed }) => [styles.backButtonWrap, pressed && styles.pressedShrink]}
          accessibilityRole="button"
          accessibilityLabel={t.a11y.backToModes}
        >
          <BlurView intensity={40} tint="dark" style={styles.backButton}>
            <Text style={styles.backButtonText}>{t.common.back}</Text>
          </BlurView>
        </Pressable>
        <Text style={styles.modeTitle} accessibilityRole="header">
          {t.modes[mode.id].title}
        </Text>
      </View>

      <View style={styles.topStack}>
        {/* Se ocultan mientras el triángulo está abierto — no hace falta verlos
            simultáneamente, y en pantallas chicas (iPhone SE) el panel del
            triángulo puede ser más alto que el espacio libre entre el header
            y donde terminaría este stack, con riesgo real de que se tapen. */}
        {!showTriangle && (
          <>
            <LensHint modeId={mode.id} focalLength={mode.focalLength} />
            {!sensorAvailable && (
              <LightConditionPicker selected={manualBand} onSelect={setManualBand} />
            )}
            {mode.usesSubjectSpeedInput && (
              <SubjectSpeedPicker selected={subjectSpeed} onSelect={setSubjectSpeed} />
            )}
          </>
        )}
        {mode.showExposureTriangle && !showTriangle && (
          <Pressable
            style={({ pressed }) => [styles.triangleButton, pressed && styles.pressedShrink]}
            onPress={() => {
              haptics.tap();
              setShowTriangle(true);
            }}
            accessibilityRole="button"
            accessibilityLabel={t.exposureTriangle.openButton}
            accessibilityHint={t.exposureTriangle.hint}
          >
            <Text style={styles.triangleButtonText}>{t.exposureTriangle.openButton}</Text>
          </Pressable>
        )}
      </View>

      {showTriangle ? (
        <ExposureTriangleWidget
          lux={effectiveLux}
          onClose={() => setShowTriangle(false)}
          onExposureOffsetChange={setExposureOffset}
          onIndicesChange={setTriangleIndices}
        />
      ) : (
        <GuidanceOverlay guidance={guidance} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  exposureOverlay: StyleSheet.absoluteFill,
  topBar: {
    position: 'absolute',
    top: 56,
    left: spacing.lg,
    right: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  pressedShrink: { opacity: 0.8, transform: [{ scale: 0.96 }] },
  backButtonWrap: { borderRadius: radius.pill, overflow: 'hidden' },
  backButton: {
    paddingHorizontal: spacing.md + 2,
    paddingVertical: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  backButtonText: { color: colors.text, ...type.subhead, fontWeight: '600' },
  modeTitle: { color: colors.text, ...type.footnote, fontWeight: '700', flexShrink: 1 },
  topStack: { position: 'absolute', top: 104, left: spacing.lg, right: spacing.lg, gap: spacing.md },
  triangleButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.text,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md + 2,
    paddingVertical: spacing.sm,
  },
  triangleButtonText: { color: colors.background, ...type.caption, fontWeight: '700' },
});

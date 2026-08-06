import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, Pressable, StyleSheet, Text, View } from 'react-native';
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
          onPress={onBack}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel={t.a11y.backToModes}
        >
          <Text style={styles.backButtonText}>{t.common.back}</Text>
        </Pressable>
        <Text style={styles.modeTitle} accessibilityRole="header">
          {t.modes[mode.id].title}
        </Text>
      </View>

      <View style={styles.topStack}>
        <LensHint modeId={mode.id} focalLength={mode.focalLength} />
        {!sensorAvailable && (
          <LightConditionPicker selected={manualBand} onSelect={setManualBand} />
        )}
        {mode.usesSubjectSpeedInput && (
          <SubjectSpeedPicker selected={subjectSpeed} onSelect={setSubjectSpeed} />
        )}
        {mode.showExposureTriangle && !showTriangle && (
          <Pressable
            style={styles.triangleButton}
            onPress={() => setShowTriangle(true)}
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
  container: { flex: 1, backgroundColor: '#000' },
  exposureOverlay: StyleSheet.absoluteFill,
  topBar: {
    position: 'absolute',
    top: 56,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  backButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  modeTitle: { color: '#fff', fontSize: 15, fontWeight: '700', flexShrink: 1 },
  topStack: { position: 'absolute', top: 104, left: 16, right: 16, gap: 12 },
  triangleButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  triangleButtonText: { color: '#111', fontSize: 12, fontWeight: '700' },
});

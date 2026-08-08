import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../i18n/LanguageContext';
import {
  APERTURE_STOPS,
  ISO_STOPS,
  SHUTTER_STOPS,
  formatAperture,
  formatIso,
  formatShutter,
  netExposureStops,
  rebalanceExposure,
  startingIndicesForLux,
  type ExposureAxis,
  type ExposureIndices,
} from '../exposure/exposureTriangle';
import { colors, radius, spacing, spring, timing, type } from '../theme/theme';
import { haptics } from '../theme/haptics';

interface Props {
  lux: number | null;
  onClose: () => void;
  onExposureOffsetChange?: (stops: number) => void;
  onIndicesChange?: (indices: ExposureIndices | null) => void;
}

export function ExposureTriangleWidget({
  lux,
  onClose,
  onExposureOffsetChange,
  onIndicesChange,
}: Props) {
  const { t } = useLanguage();
  const baselineRef = useRef<ExposureIndices>(startingIndicesForLux(lux));
  const [indices, setIndices] = useState<ExposureIndices>(baselineRef.current);
  const exposureOffset = netExposureStops(indices) - netExposureStops(baselineRef.current);
  const shutterBlurs = indices.shutter >= 6; // 1/30s o más lento

  // Entra deslizándose desde abajo con física de resorte, como una hoja
  // modal de iOS — se abre una sola vez al montar, no en cada render.
  const translateY = useRef(new Animated.Value(48)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, { toValue: 0, ...spring }),
      Animated.timing(opacity, { toValue: 1, duration: timing.fast, useNativeDriver: true }),
    ]).start();
  }, [translateY, opacity]);

  function handleChange(axis: ExposureAxis, value: number) {
    const rounded = Math.round(value);
    setIndices((prev) => (prev[axis] === rounded ? prev : rebalanceExposure(prev, axis, rounded)));
  }

  useEffect(() => {
    onExposureOffsetChange?.(exposureOffset);
    return () => onExposureOffsetChange?.(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exposureOffset]);

  useEffect(() => {
    onIndicesChange?.(indices);
    return () => onIndicesChange?.(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indices]);

  const exposureStatus =
    exposureOffset === 0
      ? t.exposureTriangle.correctExposure
      : exposureOffset < 0
        ? Math.abs(exposureOffset) === 1
          ? t.exposureTriangle.underExposedOne
          : t.exposureTriangle.underExposedMany.replace('{n}', String(Math.abs(exposureOffset)))
        : exposureOffset === 1
          ? t.exposureTriangle.overExposedOne
          : t.exposureTriangle.overExposedMany.replace('{n}', String(exposureOffset));

  return (
    <Animated.View style={[styles.panelWrap, { opacity, transform: [{ translateY }] }]}>
      <BlurView intensity={50} tint="dark" style={styles.panel}>
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="header">
          {t.exposureTriangle.title}
        </Text>
        <Pressable
          onPress={() => {
            haptics.tap();
            onClose();
          }}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t.a11y.closeExposureTriangle}
        >
          <Text style={styles.close}>✕</Text>
        </Pressable>
      </View>
      <Text style={styles.hint}>{t.exposureTriangle.hint}</Text>
      <Text style={styles.disclosure}>{t.exposureTriangle.simulationDisclosure}</Text>
      <Text
        style={[styles.status, exposureOffset !== 0 && styles.statusChanged]}
        accessibilityLiveRegion="polite"
      >
        {exposureStatus}
      </Text>
      {exposureOffset !== 0 && <Text style={styles.limitHint}>{t.exposureTriangle.limitReachedHint}</Text>}

      <Row
        label={t.chips.iso}
        value={formatIso(indices.iso)}
        hint={t.exposureTriangle.isoHint}
        sliderValue={indices.iso}
        max={ISO_STOPS.length - 1}
        onChange={(v) => handleChange('iso', v)}
        a11yLabel={t.a11y.isoSlider}
      />
      <Row
        label={t.chips.aperture}
        value={formatAperture(indices.aperture)}
        hint={t.exposureTriangle.apertureHint}
        sliderValue={indices.aperture}
        max={APERTURE_STOPS.length - 1}
        onChange={(v) => handleChange('aperture', v)}
        a11yLabel={t.a11y.apertureSlider}
      />
      <Row
        label={`${t.chips.shutter} ${shutterBlurs ? '〰️' : '❄️'}`}
        value={formatShutter(indices.shutter)}
        hint={t.exposureTriangle.shutterHint}
        sliderValue={indices.shutter}
        max={SHUTTER_STOPS.length - 1}
        onChange={(v) => handleChange('shutter', v)}
        a11yLabel={t.a11y.shutterSlider}
      />
      </BlurView>
    </Animated.View>
  );
}

function Row({
  label,
  value,
  hint,
  sliderValue,
  max,
  onChange,
  a11yLabel,
}: {
  label: string;
  value: string;
  hint: string;
  sliderValue: number;
  max: number;
  onChange: (v: number) => void;
  a11yLabel: string;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.rowHeader}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={max}
        step={1}
        value={sliderValue}
        onValueChange={onChange}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="rgba(255,255,255,0.3)"
        thumbTintColor="#fff"
        accessibilityLabel={a11yLabel}
        accessibilityValue={{ min: 0, max, now: sliderValue, text: value }}
      />
      <Text style={styles.rowHint}>{hint}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panelWrap: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.xl,
    borderRadius: radius.large,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  panel: {
    padding: spacing.lg,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  disclosure: { color: colors.textTertiary, fontSize: 11, lineHeight: 15, marginTop: -8, marginBottom: 10, fontStyle: 'italic' },
  title: { color: colors.text, ...type.headline },
  close: { color: colors.text, fontSize: 16, padding: 4 },
  status: { color: '#30D158', ...type.footnote, fontWeight: '700', marginTop: -2, marginBottom: 4 },
  statusChanged: { color: '#FF9F0A' },
  limitHint: { color: colors.textTertiary, fontSize: 11, lineHeight: 16, marginBottom: 10 },
  hint: { color: colors.textSecondary, fontSize: 12, marginTop: 6, marginBottom: 14, lineHeight: 17 },
  row: { marginBottom: 8 },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  rowLabel: { color: colors.text, fontSize: 13, fontWeight: '600' },
  rowValue: { color: colors.text, fontSize: 13, fontWeight: '700' },
  rowHint: { color: colors.textTertiary, fontSize: 11, marginTop: -4 },
});

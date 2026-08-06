import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
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
    <View style={styles.panel}>
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="header">
          {t.exposureTriangle.title}
        </Text>
        <Pressable
          onPress={onClose}
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
    </View>
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
  panel: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
    backgroundColor: 'rgba(0,0,0,0.88)',
    borderRadius: 16,
    padding: 16,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  disclosure: { color: '#888', fontSize: 11, lineHeight: 15, marginTop: -8, marginBottom: 10, fontStyle: 'italic' },
  title: { color: '#fff', fontSize: 16, fontWeight: '700' },
  close: { color: '#fff', fontSize: 16, padding: 4 },
  status: { color: '#7fd88f', fontSize: 12, fontWeight: '700', marginTop: -2, marginBottom: 4 },
  statusChanged: { color: '#ffb84d' },
  limitHint: { color: '#888', fontSize: 11, lineHeight: 16, marginBottom: 10 },
  hint: { color: '#bbb', fontSize: 12, marginTop: 6, marginBottom: 14, lineHeight: 17 },
  row: { marginBottom: 8 },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  rowLabel: { color: '#fff', fontSize: 13, fontWeight: '600' },
  rowValue: { color: '#fff', fontSize: 13, fontWeight: '700' },
  rowHint: { color: '#888', fontSize: 11, marginTop: -4 },
});

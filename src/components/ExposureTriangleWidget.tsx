import React, { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
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
  const [baseline, setBaseline] = useState<ExposureIndices>(() => startingIndicesForLux(lux));
  const [indices, setIndices] = useState<ExposureIndices>(baseline);
  const exposureOffset = netExposureStops(indices) - netExposureStops(baseline);
  const shutterBlurs = indices.shutter >= 6; // 1/30s o más lento

  // El punto de partida antes solo se calculaba una vez, al montar — si
  // cambiabas de luz (selector manual en iOS, o el sensor real en Android)
  // con el triángulo ya abierto, se quedaba pegado a la luz de cuando lo
  // abriste. `startingIndicesForLux` cuantiza a 4 bandas fijas, así que
  // comparar contra la banda actual (en vez de resetear en cada cambio de
  // `lux`) evita que el sensor real de Android — que fluctúa cada
  // ~500ms — reinicie el triángulo constantemente sin motivo real.
  //
  // Importante: esto SOLO actualiza `baseline`, nunca `indices` — un primer
  // intento reseteaba los dos, así que si estabas explorando el triángulo
  // (sliders movidos a propósito) y la luz cambiaba de banda, tu exploración
  // se borraba sin aviso. Ahora el cambio de luz se refleja en
  // `exposureOffset` (la foto real quedaría más o menos expuesta que antes),
  // sin tocar dónde dejaste cada control.
  useEffect(() => {
    const fresh = startingIndicesForLux(lux);
    setBaseline((prev) => {
      const changed =
        fresh.iso !== prev.iso || fresh.aperture !== prev.aperture || fresh.shutter !== prev.shutter;
      return changed ? fresh : prev;
    });
  }, [lux]);

  // Entra deslizándose desde abajo con física de resorte, como una hoja
  // modal de iOS — se abre una sola vez al montar, no en cada render. El
  // `scale` de 0.94→1 encima del slide es a propósito una referencia sutil
  // a un diafragma abriéndose, no solo una hoja modal genérica — el panel
  // ES el triángulo de exposición, tiene sentido que entre como una apertura.
  const translateY = useRef(new Animated.Value(48)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.94)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, { toValue: 0, ...spring }),
      Animated.spring(scale, { toValue: 1, ...spring }),
      Animated.timing(opacity, { toValue: 1, duration: timing.fast, useNativeDriver: true }),
    ]).start();
  }, [translateY, opacity, scale]);

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

  // `accessibilityLiveRegion="polite"` en el <Text> de abajo solo funciona en
  // Android — iOS no tiene equivalente para ese prop, así que VoiceOver
  // nunca se enteraba de que la exposición cambió si el foco seguía en el
  // slider. `announceForAccessibility` es la forma real de anunciarlo en
  // iOS. Se salta el primer render (mount) para no anunciar "exposición
  // correcta" apenas se abre el panel, antes de que el usuario haga nada.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (Platform.OS !== 'ios') return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    AccessibilityInfo.announceForAccessibility(exposureStatus);
  }, [exposureStatus]);

  return (
    <Animated.View style={[styles.panelWrap, { opacity, transform: [{ translateY }, { scale }] }]}>
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
      <TriangleDiagram
        isoDistance={Math.abs(indices.iso - baseline.iso) / (ISO_STOPS.length - 1)}
        apertureDistance={Math.abs(indices.aperture - baseline.aperture) / (APERTURE_STOPS.length - 1)}
        shutterDistance={Math.abs(indices.shutter - baseline.shutter) / (SHUTTER_STOPS.length - 1)}
      />
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

/**
 * El propio triángulo, literal — la app se llama "triángulo de exposición"
 * pero el control en sí eran tres barras apiladas sin nada geométrico que
 * lo conectara con el nombre. Tres puntos en formación de triángulo (ISO
 * arriba, apertura y obturador abajo), cada uno se ilumina según qué tan
 * lejos está ese eje de su punto de partida — mover el ISO enciende la
 * esquina de ISO, sin importar que las otras dos compensen en silencio.
 * Sin líneas conectando los puntos a propósito: en RN dibujar una diagonal
 * limpia necesita SVG o transforms con rotate, y tres puntos ya se leen
 * como triángulo por la sola posición — no hacía falta la dependencia.
 */
function TriangleDiagram({
  isoDistance,
  apertureDistance,
  shutterDistance,
}: {
  isoDistance: number;
  apertureDistance: number;
  shutterDistance: number;
}) {
  return (
    <View style={styles.diagram}>
      <TriangleDot distance={isoDistance} style={styles.diagramDotTop} />
      <TriangleDot distance={apertureDistance} style={styles.diagramDotLeft} />
      <TriangleDot distance={shutterDistance} style={styles.diagramDotRight} />
    </View>
  );
}

function TriangleDot({ distance, style }: { distance: number; style: object }) {
  // 0 = en el punto de partida (apagado), 1 = en el extremo opuesto (encendido).
  const opacity = 0.3 + Math.min(distance, 1) * 0.7;
  const size = 7 + Math.min(distance, 1) * 8;
  return (
    <View
      style={[
        style,
        { width: size, height: size, borderRadius: size / 2, backgroundColor: colors.accent, opacity },
      ]}
    />
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
      <View style={styles.rowHeader} accessible accessibilityLabel={`${label}: ${value}`}>
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
  diagram: { height: 46, marginTop: spacing.md, alignItems: 'center' },
  diagramDotTop: { position: 'absolute', top: 0, left: '50%', marginLeft: -6 },
  diagramDotLeft: { position: 'absolute', bottom: 0, left: '32%' },
  diagramDotRight: { position: 'absolute', bottom: 0, right: '32%' },
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
  rowValue: { color: colors.text, fontSize: 13, fontWeight: '700', fontVariant: ['tabular-nums'] },
  rowHint: { color: colors.textSecondary, fontSize: 12, fontWeight: '500', marginTop: -2 },
});

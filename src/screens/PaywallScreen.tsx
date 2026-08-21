import React from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../i18n/LanguageContext';
import { usePro } from '../purchases/ProContext';
import { MODES } from '../modes/modes';
import { colors, radius, spacing, type } from '../theme/theme';
import { haptics } from '../theme/haptics';

interface Props {
  onClose: () => void;
}

export function PaywallScreen({ onClose }: Props) {
  const { t } = useLanguage();
  const { priceLabel, purchasing, restoring, purchasePro, restore } = usePro();
  const proModes = MODES.filter((m) => m.isPro);

  async function handlePurchase() {
    haptics.tap();
    try {
      await purchasePro();
    } catch {
      Alert.alert(t.paywall.title, t.paywall.purchaseError);
    }
  }

  async function handleRestore() {
    haptics.tap();
    const result = await restore();
    if (result === 'restored') {
      haptics.success();
      Alert.alert(t.paywall.title, t.paywall.restoreSuccess);
    } else if (result === 'not_found') {
      Alert.alert(t.paywall.title, t.paywall.restoreNotFound);
    } else {
      Alert.alert(t.paywall.title, t.paywall.purchaseError);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable
          style={({ pressed }) => [styles.closeButton, pressed && styles.pressedShrink]}
          onPress={() => {
            haptics.tap();
            onClose();
          }}
          accessibilityRole="button"
          accessibilityLabel={t.a11y.closePaywall}
        >
          <Text style={styles.closeButtonText}>{t.common.close}</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.badge}>{t.paywall.badge}</Text>
        <Text style={styles.title}>{t.paywall.title}</Text>
        <Text style={styles.subtitle}>{t.paywall.subtitle}</Text>

        <View style={styles.modeList}>
          {proModes.map((mode) => (
            <View key={mode.id} style={styles.modeRow}>
              <View style={styles.modeDot} />
              <Text style={styles.modeText}>{t.modes[mode.id].title}</Text>
            </View>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [styles.purchaseButton, pressed && styles.pressedShrink]}
          onPress={handlePurchase}
          disabled={purchasing}
          accessibilityRole="button"
          accessibilityLabel={t.paywall.unlockButton}
        >
          {purchasing ? (
            <ActivityIndicator color={colors.background} />
          ) : (
            <Text style={styles.purchaseButtonText}>
              {t.paywall.unlockButton}
              {priceLabel ? ` — ${priceLabel}` : ''}
            </Text>
          )}
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.restoreButton, pressed && styles.pressedShrink]}
          onPress={handleRestore}
          disabled={restoring}
          accessibilityRole="button"
          accessibilityLabel={t.paywall.restoreButton}
        >
          <Text style={styles.restoreButtonText}>
            {restoring ? t.paywall.restoring : t.paywall.restoreButton}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerRow: { flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: spacing.xl },
  closeButton: {
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  closeButtonText: { color: colors.text, ...type.subhead, fontWeight: '600' },
  pressedShrink: { opacity: 0.75, transform: [{ scale: 0.97 }] },
  content: { padding: spacing.xl, alignItems: 'center', paddingBottom: spacing.xl * 2 },
  badge: {
    color: colors.background,
    backgroundColor: colors.accent,
    ...type.caption,
    fontWeight: '700',
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radius.pill,
    overflow: 'hidden',
    marginTop: spacing.lg,
  },
  title: { color: colors.text, ...type.title1, marginTop: spacing.lg, textAlign: 'center' },
  subtitle: {
    color: colors.textSecondary,
    ...type.subhead,
    marginTop: spacing.sm,
    textAlign: 'center',
    lineHeight: 20,
  },
  modeList: { width: '100%', marginTop: spacing.xl, gap: spacing.sm },
  modeRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  modeDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.accent },
  modeText: { color: colors.text, ...type.callout },
  purchaseButton: {
    width: '100%',
    backgroundColor: colors.accent,
    borderRadius: radius.medium,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  purchaseButtonText: { color: colors.background, ...type.headline },
  restoreButton: { marginTop: spacing.lg, padding: spacing.sm },
  restoreButtonText: { color: colors.textSecondary, ...type.footnote, textDecorationLine: 'underline' },
});

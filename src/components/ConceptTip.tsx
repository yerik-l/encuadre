import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme/theme';

export function ConceptTip({ text }: { text: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: colors.surface, borderRadius: radius.medium, padding: spacing.md + 2, marginTop: spacing.xl },
  text: { color: '#DDDDDD', fontSize: 14, lineHeight: 20, fontStyle: 'italic' },
});

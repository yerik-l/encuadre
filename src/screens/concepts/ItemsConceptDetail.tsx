import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ConceptTip } from '../../components/ConceptTip';
import type { ItemsConceptContent } from '../../concepts/concepts';
import { colors, radius, spacing } from '../../theme/theme';

export function ItemsConceptDetail({ content }: { content: ItemsConceptContent }) {
  return (
    <View>
      <Text style={styles.intro}>{content.intro}</Text>
      {content.itemsLabel && <Text style={styles.itemsLabel}>{content.itemsLabel}</Text>}
      {content.items.map((item) => (
        <View key={item.name} style={styles.item}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          {item.brandNote && (
            <View style={styles.brandNoteBadge}>
              <Text style={styles.brandNoteText}>{item.brandNote}</Text>
            </View>
          )}
          {item.extra && <Text style={styles.itemExtra}>{item.extra}</Text>}
        </View>
      ))}
      {content.tip && <ConceptTip text={content.tip} />}
      {content.note && <ConceptTip text={content.note} />}
    </View>
  );
}

const styles = StyleSheet.create({
  intro: { color: '#CCCCCC', fontSize: 15, lineHeight: 22, marginBottom: 20 },
  itemsLabel: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  item: { backgroundColor: colors.surface, borderRadius: radius.medium, padding: spacing.md + 2, marginBottom: 10 },
  itemName: { color: colors.text, fontSize: 15, fontWeight: '700' },
  itemDescription: { color: '#BBBBBB', fontSize: 13, lineHeight: 19, marginTop: 3 },
  itemExtra: { color: colors.accent, fontSize: 12, lineHeight: 17, marginTop: 6, fontStyle: 'italic' },
  brandNoteBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentSoft,
    borderRadius: radius.small - 2,
    borderWidth: 1,
    borderColor: 'rgba(232,163,61,0.35)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 8,
  },
  brandNoteText: { color: colors.accent, fontSize: 11, fontWeight: '700', letterSpacing: 0.2 },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ConceptTip } from '../../components/ConceptTip';
import type { ItemsConceptContent } from '../../concepts/concepts';

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
  intro: { color: '#ccc', fontSize: 15, lineHeight: 22, marginBottom: 20 },
  itemsLabel: { color: '#0A84FF', fontSize: 12, fontWeight: '700', textTransform: 'uppercase', marginBottom: 10 },
  item: { backgroundColor: '#1c1c1e', borderRadius: 12, padding: 14, marginBottom: 10 },
  itemName: { color: '#fff', fontSize: 15, fontWeight: '700' },
  itemDescription: { color: '#bbb', fontSize: 13, lineHeight: 19, marginTop: 3 },
  itemExtra: { color: '#0A84FF', fontSize: 12, lineHeight: 17, marginTop: 6, fontStyle: 'italic' },
  brandNoteBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(10,132,255,0.14)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(10,132,255,0.35)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 8,
  },
  brandNoteText: { color: '#0A84FF', fontSize: 11, fontWeight: '700', letterSpacing: 0.2 },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ConceptTip } from '../../components/ConceptTip';
import type { SectionsConceptContent } from '../../concepts/concepts';

export function SectionsConceptDetail({ content }: { content: SectionsConceptContent }) {
  return (
    <View>
      <Text style={styles.intro}>{content.intro}</Text>
      {content.sections.map((section) => (
        <View key={section.heading} style={styles.section}>
          <Text style={styles.heading}>{section.heading}</Text>
          <Text style={styles.body}>{section.body}</Text>
        </View>
      ))}
      {content.tip && <ConceptTip text={content.tip} />}
    </View>
  );
}

const styles = StyleSheet.create({
  intro: { color: '#ccc', fontSize: 15, lineHeight: 22, marginBottom: 20 },
  section: { marginBottom: 16 },
  heading: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 4 },
  body: { color: '#bbb', fontSize: 14, lineHeight: 20 },
});

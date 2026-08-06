import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ConceptTip({ text }: { text: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: '#1c1c1e', borderRadius: 12, padding: 14, marginTop: 20 },
  text: { color: '#ddd', fontSize: 14, lineHeight: 20, fontStyle: 'italic' },
});

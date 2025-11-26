import React from 'react';
import { StyleSheet, View } from 'react-native';

const ChatDimOverlay = () => (
  <View style={styles.overlay} pointerEvents="none">
    <View style={styles.blur} />
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    overflow: 'hidden',
    zIndex: 5,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    ...( { backdropFilter: 'blur(14px)' } as any),
  },
});

export default ChatDimOverlay;


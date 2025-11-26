import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const ChatDimOverlay = () => (
  <View style={styles.overlay} pointerEvents="none">
    <BlurView
      style={StyleSheet.absoluteFillObject}
      blurAmount={16}
      blurType={Platform.OS === 'ios' ? 'prominent' : 'light'}
      reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.15)"
    />
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    overflow: 'hidden',
    zIndex: 5,
  },
});

export default ChatDimOverlay;


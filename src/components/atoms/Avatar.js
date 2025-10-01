import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ uri, size = 300 }) {
  if (!uri) return null;
  return <Image source={{ uri }} style={[styles.image, { width: size, height: size }]} />;
}

const styles = StyleSheet.create({
  image: { borderRadius: 12, resizeMode: 'cover', backgroundColor: '#eee', alignSelf: 'center' }
});

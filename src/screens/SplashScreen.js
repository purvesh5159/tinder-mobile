import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Tinder PHP Demo</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1, alignItems:'center', justifyContent:'center'}, logoText:{fontSize:28, fontWeight:'700'} });

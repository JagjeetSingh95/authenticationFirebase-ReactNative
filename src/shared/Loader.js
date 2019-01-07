import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = ({ size }) => {
  return (
    <View style={styles.loaderStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loader;
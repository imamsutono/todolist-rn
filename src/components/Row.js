import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center'
  }
});

export default Row;

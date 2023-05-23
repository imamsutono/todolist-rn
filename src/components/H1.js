import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const H1 = ({ children }) => (
  <Text style={styles.textStyle}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default H1;

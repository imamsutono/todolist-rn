import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const H2 = ({ children }) => (
  <Text style={styles.textStyle}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: 15,
  }
});

export default H2;

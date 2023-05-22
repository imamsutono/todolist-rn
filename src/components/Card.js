import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Card = ({ children, title, subtitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.subtitle}>
      {subtitle}
    </Text>

    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500'
  },
  subtitle: {
    color: colors.light,
    marginTop: 5,
    marginBottom: 20,
  }
});

export default Card;

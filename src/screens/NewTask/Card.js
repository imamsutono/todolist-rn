import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const Card = ({ icon, iconColor, title, subtitle }) => (
  <View style={styles.container}>
    <Ionicons
      name={icon}
      color={colors[iconColor]}
      size={20}
    />

    <View>
      <Text style={styles.subtitle}>
        {title}
      </Text>
      <Text style={styles.title}>
        {subtitle}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    columnGap: 10
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500'
  },
  subtitle: {
    color: colors.light,
  }
});

export default Card;

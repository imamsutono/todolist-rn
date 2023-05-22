import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Row } from '../../components';
import colors from '../../constants/colors';

const Categories = () => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>
      Categories
    </Text>

    <Row>
      <View style={styles.card}>
        <View style={styles.body}>
          <Text style={styles.title}>
            Mobile App
          </Text>
          <Text style={styles.subtitle}>
            10 Tasks
          </Text>
        </View>

        <Image
          style={styles.thumbnail}
          source={require('../../../assets/mobile.png')}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.body}>
          <Text style={styles.title}>
            Website
          </Text>
          <Text style={styles.subtitle}>
            5 Tasks
          </Text>
        </View>

        <Image
          style={styles.thumbnail}
          source={require('../../../assets/mobile.png')}
        />
      </View>
    </Row>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: colors.grey,
    borderRadius: 10,
    width: '45%',
    overflow: 'hidden'
  },
  body: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    color: colors.light,
    marginVertical: 5,
  },
  thumbnail: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
  }
});

export default Categories;

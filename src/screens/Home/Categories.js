import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Row } from '../../components';
import colors from '../../constants/colors';

const Categories = () => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>
      Categories
    </Text>

    <ScrollView horizontal={true}>
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

        <View style={styles.card}>
          <View style={styles.body}>
            <Text style={styles.title}>
              Blog
            </Text>
            <Text style={styles.subtitle}>
              3 Tasks
            </Text>
          </View>

          <Image
            style={styles.thumbnail}
            source={require('../../../assets/mobile.png')}
          />
        </View>
      </Row>
    </ScrollView>
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
    width: 150,
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
    fontWeight: '500'
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

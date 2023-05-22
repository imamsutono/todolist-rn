import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Divider, Row } from '../../components';
import colors from '../../constants/colors';

const Ongoing = () => (
  <View>
    <View style={styles.topContainer}>
      <Text style={styles.sectionTitle}>
        Ongoing Task
      </Text>
      <Text style={styles.seeAll}>
        See all
      </Text>
    </View>

    <ScrollView style={{ height: 300 }}>
      <Card
        title="Wallet App Design"
        subtitle="High fidelity and prototype using figma"
      >
        <Row>
          <Feather name='calendar' color={colors.primary} size={16} />
          <Text style={{ color: colors.light }}>21 May</Text>
        </Row>
        <Divider />
        <Row>
          <Feather name='clock' color={colors.primary} size={16} />
          <Text style={{ color: colors.light }}>2:30 PM - 6:00 PM</Text>
        </Row>
      </Card>

      <Card
        title="Dashboard Mobile App"
        subtitle="Finance dashboard app using react native"
      >
        <Row>
          <Feather name='calendar' color={colors.primary} size={16} />
          <Text style={{ color: colors.light }}>21 May</Text>
        </Row>
        <Divider />
        <Row>
          <Feather name='clock' color={colors.primary} size={16} />
          <Text style={{ color: colors.light }}>2:30 PM - 6:00 PM</Text>
        </Row>
      </Card>

      <Card
        title="Blog Website"
        subtitle="Personal blog about programming"
      >
        <Row>
          <Feather name='calendar' color={colors.primary} size={16} />
          <Text style={{ color: colors.light }}>21 May</Text>
        </Row>
        <Divider />
        <Row>
          <Feather name='clock' color={colors.primary} size={16} />
          <Text style={{ color: colors.light }}>2:30 PM - 6:00 PM</Text>
        </Row>
      </Card>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  seeAll: {
    color: colors.primary,
    marginTop: 15
  }
});

export default Ongoing;

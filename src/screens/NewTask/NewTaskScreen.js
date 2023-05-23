import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { H1, H2, Row } from '../../components';
import layouts from '../../constants/layouts';
import colors from '../../constants/colors';
import Card from './Card';

const NewTaskScreen = () => (
  <View style={styles.container}>
    <H1>Create{'\n'}New Task</H1>

    <Text style={styles.taskLabel}>
      Task title
    </Text>
    <TextInput
      style={styles.taskInput}
      placeholder='Input your task title'
      placeholderTextColor={colors.white}
    />

    <Row>
      <Card
        icon="calendar-outline"
        iconColor="amber"
        title="Date"
        subtitle="24 Dec"
      />
      <Card
        icon="library-outline"
        iconColor="blue"
        title="Category"
        subtitle="Final exam"
      />
    </Row>
    <Row>
      <Card
        icon="time-outline"
        iconColor="green"
        title="Task Start"
        subtitle="12:45 PM"
      />
      <Card
        icon="alarm-outline"
        iconColor="primary"
        title="Task End"
        subtitle="07:45 PM"
      />
    </Row>

    <H2>Descriptions</H2>
    <Text style={styles.description}>
      Write down your task in this to-do list app to organize your task better.
      Wish your day more productive.
    </Text>

    <TouchableOpacity
      style={styles.submitButton}
    >
      <Text style={styles.submitLabel}>
        Create Task
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layouts.containerPadding,
    backgroundColor: colors.black,
  },
  taskLabel: {
    color: colors.light,
    marginTop: 40,
    fontSize: 16
  },
  taskInput: {
    color: colors.white,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 20,
    borderBottomColor: colors.grey,
    borderBottomWidth: 2
  },
  description: {
    color: colors.light
  },
  submitButton: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitLabel: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default NewTaskScreen;

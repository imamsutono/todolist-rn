import React from 'react';
import { View, StyleSheet } from 'react-native';
import { H1 } from '../../components';
import layouts from '../../constants/layouts';
import colors from '../../constants/colors';

const NewTaskScreen = () => (
  <View style={styles.container}>
    <H1>Create New Task</H1>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layouts.containerPadding,
    backgroundColor: colors.black,
  },
});

export default NewTaskScreen;

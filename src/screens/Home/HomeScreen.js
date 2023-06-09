import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from '../../components';
import colors from '../../constants/colors';
import layouts from '../../constants/layouts';
import Categories from './Categories';
import Header from './Header';
import Ongoing from './Ongoing';
import Search from './Search';

const HomeScreen = ({ navigation }) => {
  const addNewTask = () => navigation.navigate('NewTask');

  return (
    <View style={styles.container}>
      <Header />
      <Search />

      <Categories />
      <Ongoing />

      <FAB onPress={addNewTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layouts.containerPadding,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;

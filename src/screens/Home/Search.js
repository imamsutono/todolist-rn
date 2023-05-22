import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../constants/colors';

const Search = () => (
  <View style={styles.container}>
    <TextInput
      placeholder='Search'
      placeholderTextColor={colors.light}
      style={styles.input}
    />
    
    <TouchableOpacity style={styles.filter}>
      <Feather name='sliders' color={colors.white} size={20} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  input: {
    backgroundColor: colors.grey,
    paddingHorizontal: 25,
    borderRadius: 50,
    flexGrow: 1,
    marginRight: 20,
    color: colors.white
  },
  filter: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Search;

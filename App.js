import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import colors from './src/constants/colors';
import HomeScreen from './src/screens/Home/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

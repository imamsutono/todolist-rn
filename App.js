import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import NewTaskScreen from './src/screens/NewTask/NewTaskScreen';
import colors from './src/constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewTask" component={NewTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

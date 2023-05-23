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

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTaskScreen}
          options={{
            title: "New Task",
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

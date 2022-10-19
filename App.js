import LoginScreen from './login';
import RegisterScreen from './register';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login.'>
            <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="register" component={RegisterScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
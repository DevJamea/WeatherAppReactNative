import React from 'react';
import WelcomeScreen from './application/screens/WelcomeScreen';
import WeatherMap from './application/screens/WeatherMap';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name='WeatherMap' component={WeatherMap} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}



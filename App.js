import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import StudentScreen from './src/screens/StudentScreen';
import ApiScreen from './src/screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: '#1e293b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: 'Información del Estudiante' }}
        />
        <Stack.Screen
          name="Api"
          component={ApiScreen}
          options={{ title: 'Rick and Morty' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
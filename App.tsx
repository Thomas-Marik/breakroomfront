import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/Screens/MainScreen';
import SnackScreen from './src/Screens/SnackScreen';
import SodaScreen from './src/Screens/SodaScreen';
import AddItemScreen from './src/Screens/AddItemScreen';
import EditDeleteScreen from './src/Screens/EditDeleteScreen';
import ItemScreen from './src/Screens/ItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{title:'Vending Machine'}}/>
        <Stack.Screen name="Snacks" component={SnackScreen}/>
        <Stack.Screen name="Sodas" component={SodaScreen}/>
        <Stack.Screen name="Edit" component={EditDeleteScreen}/>
        <Stack.Screen name="Add" component={AddItemScreen}/>
        <Stack.Screen name="Items" component={ItemScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

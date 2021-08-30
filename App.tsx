import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/Screens/MainScreen';
import AddItemScreen from './src/Screens/AddItemScreen';
import EditDeleteScreen from './src/Screens/EditDeleteScreen';
import ItemScreen from './src/Screens/ItemScreen';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import VenderItemScreen from './src/Screens/VenderItemScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={configureStore()}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Main" 
        component={MainScreen} 
        options={{title:'Vending Machine',
        headerStyle:{
          backgroundColor:"#3e423c"
        },
        headerTintColor:"#FFF"
        }}/>

        
           
        <Stack.Screen name="Items" component={VenderItemScreen}options={{title:'Vender Item List',
        headerStyle:{
          backgroundColor:"#3e423c"
        },
        headerTintColor:"#FFF"
        }}/>
        <Stack.Screen name="Edit" component={EditDeleteScreen}options={{title:'Edit/Delete Item List',
        headerStyle:{
          backgroundColor:"#3e423c"
        },
        headerTintColor:"#FFF"
        }}/>
        <Stack.Screen name="Add" component={AddItemScreen}options={{title:'Add Vender Item',
        headerStyle:{
          backgroundColor:"#3e423c"
        },
        headerTintColor:"#FFF"
        }}/>
        <Stack.Screen name="View" component={ItemScreen}options={{title:'View Vender Item',
        headerStyle:{
          backgroundColor:"#3e423c"
        },
        headerTintColor:"#FFF"
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

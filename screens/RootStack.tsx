import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './CategoryScreen';
import MySSGScreen from './MySSGScreen';
import ClickProductScreen from './ClickProductScreen';
import GiftScreen from './GiftScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';


type RootStackParamList = {
  HomeStack: undefined;
  Category: undefined;
  Gift: undefined;
  MySSG: undefined;
  ClickProduct: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

function RootStack(){

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeStack}></Stack.Screen> 
      <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen> 
      <Stack.Screen name="Gift" component={GiftScreen}></Stack.Screen> 
      <Stack.Screen name="MySSG" component={MySSGScreen}></Stack.Screen> 
      <Stack.Screen name="ClickProduct" component={ClickProductScreen}></Stack.Screen> 
    </Stack.Navigator>
  )
}

export default RootStack;


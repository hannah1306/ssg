import React from 'react';
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import BottomTab from '../components/BottomTab';
import SaleScreen from './SaleScreen';
import SSGTVScreen from './SSGTVScreen';

type HomeStackParamList = {
  Home: undefined;
  Sale: undefined;
  SSGTV: undefined;
}

export type StackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const Tab = createMaterialTopTabNavigator<HomeStackParamList>();

function HomeStack(){
  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Sale" component={SaleScreen}></Tab.Screen>
      <Tab.Screen name="SSGTV" component={SSGTVScreen}></Tab.Screen>
    </Tab.Navigator>
    <BottomTab></BottomTab>
    </>
  )
}

export default HomeStack;
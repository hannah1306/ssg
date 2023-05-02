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
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15
        }
      }}>
      <Tab.Screen name="Home" options={{tabBarLabel:'홈'}} component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Sale" options={{tabBarLabel:'특가'}} component={SaleScreen}></Tab.Screen>
      <Tab.Screen name="SSGTV" options={{tabBarLabel:'SSG.TV'}} component={SSGTVScreen}></Tab.Screen>
    </Tab.Navigator>
    <BottomTab></BottomTab>
    </>
  )
}

export default HomeStack;
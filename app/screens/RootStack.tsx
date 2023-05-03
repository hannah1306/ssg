import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './CategoryScreen';
import MySSGScreen from './MySSGScreen';
import ClickProductScreen from './ClickProductScreen';
import GiftScreen from './GiftScreen';
import HomeStack from './HomeStack';
import SearchBar from '../components/SearchBar';
import ButtonSSG from '../components/ButtonSSG';
import SearchScreen from './SearchScreen';
import ProductDetailScreen from './ProductDetailScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

function RootStack(){

  const searchHeader = {
    headerTitle: () => <ButtonSSG />,
    // headerStyle: {
    //   backgroundColor: 'red',
    //   flex:1,
    // },
    // headerTitleContainerStyle:{
    //   paddingHorizontal: 0
    // },
    headerRight: () => <SearchBar/>,
    headerRightContainerStyle:{
      paddingHorizontal: 0
    }
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeStack} options={searchHeader}></Stack.Screen> 
      <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen> 
      <Stack.Screen name="Gift" component={GiftScreen} options={searchHeader}></Stack.Screen> 
      <Stack.Screen name="MySSG" component={MySSGScreen}></Stack.Screen> 
      <Stack.Screen name="ClickProduct" component={ClickProductScreen}></Stack.Screen> 

      <Stack.Screen name="Search" 
        component={SearchScreen} 
        options={{headerTitle: '', headerRight: () => <SearchBar open={true}/>, presentation:'transparentModal'}}
      ></Stack.Screen> 
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={searchHeader}></Stack.Screen> 
    </Stack.Navigator>
  )
}

export default RootStack;


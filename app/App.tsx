/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';

function App() {

  return (
    <NavigationContainer>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SearchScreen(){

  return (
    <View style={styles.block}>
      <Text>SearchScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block:{
    flex:1,
    backgroundColor: 'white'
  }
})

export default SearchScreen;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function ButtonSSG(){
  return (
    <View style={styles.block}>
      <Text style={styles.text}>SSG.COM</Text>
      <Icon name="downcircleo" size={20}></Icon>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems:'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 5,
  }
})

export default ButtonSSG;
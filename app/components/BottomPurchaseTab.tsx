import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function BottomPurchaseTab(){

  const onGift = () => {

  }

  const onPurchase = () => {

  }

  return (
    <View style={styles.block}>
      <Pressable style={styles.heart}>
        <Icon name='hearto' size={30}></Icon>
      </Pressable>
      <Pressable style={styles.gift} onPress={onGift}>
        <Icon name='gift' size={20}></Icon>
        <Text>선물하기</Text>
      </Pressable>
      <Pressable style={styles.purchase} onPress={onPurchase}>
        <Text>구매하기</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    position: 'absolute',
    bottom: 0,
    right:0,
    left: 0,
    backgroundColor: 'orange',
    flexDirection: 'row',
    height:50,
  },
  heart: {
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  gift: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  purchase: {
    flex: 1,
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BottomPurchaseTab;
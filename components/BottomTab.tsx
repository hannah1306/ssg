import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../screens/RootStack';

function BottomTab(){
  
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.block}>
      <Pressable onPress={() => navigation.navigate('Category')}>
        <View>
          <Text>카테고리</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Gift')}>
        <View>
          <Text>선물하기</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('HomeStack')}>
        <View>
          <Text>SSG</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('MySSG')}>
        <View>
          <Text>MY</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ClickProduct')}>
        <View>
          <Text>최근본상품</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  block : {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default BottomTab;
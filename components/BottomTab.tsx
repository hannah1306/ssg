import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../screens/RootStack';
import LinearGradient from 'react-native-linear-gradient';
import BottomButton from './BottomButton';

function BottomTab(){
  
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.block}>
      <BottomButton menu="Category" text="카테고리" icon="menu"></BottomButton>
      <BottomButton menu="Gift" text="선물하기" icon="gift"></BottomButton>

      {/* 홈키 */}
      <Pressable onPress={() => navigation.navigate('HomeStack')}>
        <LinearGradient 
          start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          colors={['white','#ffc917', '#ff6017', '#ff1751','#b917ff','#178bff','#17d8ff', 'white']} 
          useAngle={true}
          angle={70}
          style={styles.btnSSG}>
          <Text style={styles.txtSSG}>SSG</Text>
        </LinearGradient>
      </Pressable>

      <BottomButton menu="MySSG" text="MY" icon="user"></BottomButton>
      <BottomButton menu="ClickProduct" text="최근본상품" icon="user"></BottomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  block : {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSSG: {
    transform:[
      {translateY:-20}
    ],
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtSSG: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
})

export default BottomTab;
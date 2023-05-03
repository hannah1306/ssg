import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ProductProps, RootStackNavigationProp } from '../types/index';
import { useNavigation } from '@react-navigation/native';

function ProductComponent({product}: ProductProps){

  const {title, place, oldPrice, newPrice, percent} = product;
  const navigation = useNavigation<RootStackNavigationProp>();

  const openProductDetail = () => {
    navigation.navigate('ProductDetail', {product});
  }

  return (
    <Pressable style={styles.block} onPress={openProductDetail}>
      {/**상품 이미지 */}
      <View style={styles.image}></View>
      
      {/**좋아요, 장바구니 */}
      <View style={styles.likeCart}>
        <Icon name="hearto" size={25}></Icon>
        <Icon name="shoppingcart" size={25}></Icon>
      </View>

      {/**상세정보 */}
      <Text>{place}</Text>
      <Text>{title}</Text>
      <Text>{oldPrice}</Text>
      <View>
        <Text>{percent}</Text>
        <Text>{newPrice}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  block: {
    width: 150,
    marginRight:15
  },
  image: {
    width: 150,
    height:150,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  likeCart: {
    paddingVertical: 5,
    marginVertical:5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default ProductComponent;
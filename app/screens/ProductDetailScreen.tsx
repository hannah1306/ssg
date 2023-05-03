import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RootStackRouteProp } from '../types/index';
import Icon from 'react-native-vector-icons/AntDesign';
import BottomPurchaseTab from '../components/BottomPurchaseTab';

function ProductDetailScreen(){
  
  const product = useRoute<RootStackRouteProp>().params?.product;
  
  if(!product){
    return (
      <View>
        <Text>상품이 존재하지 않습니다.</Text>
      </View>
    )
  }

  const { title, place, newPrice, oldPrice, percent } = product;

  return (
    <>
      <ScrollView>
        {/** 상품 이미지 */}
        <View></View>

        {/** 상품 정보 */}
        <View>
          <Text>{place}</Text>
          <Icon name='sharealt' size={30}></Icon>
        </View>

        <Text>{title}</Text>
        <Text>{oldPrice}</Text>
        <View>
          <Text>{percent}</Text>
          <Text>{newPrice}</Text>
        </View>

        <Text>상세정보</Text>
        <Text>리뷰</Text>
        <Text>Q&A</Text>
      </ScrollView>
      
      <BottomPurchaseTab></BottomPurchaseTab>
    </>
  )
}

export default ProductDetailScreen;
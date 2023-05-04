import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomTab from '../components/BottomTab';

function MySSGScreen(){

  return (
    <>
      <ScrollView>
        <View>
          <Text>ㅇㅇㅇ님</Text>
          <Text>SSG에서 이번달 123,000원 혜택을 받았어요</Text>
        </View>

        <View>
          <Text>이번달 사용하지 않은 10% 할인쿠폰이 있어요</Text>
        </View>

        <View style={styles.box}>
          <View>
            <Text>쿠폰</Text>
            <Text>신세계포인트</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text>SSG MONEY</Text>
            <Text>3,000원</Text>
            <Text>충전</Text>
            <Text>전환</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text>STARTBUCKS</Text>
            <Text>사이즈업 잔여2회</Text>
          </View>
        </View>
        
        <View>
          <Text>주문/배송 조회</Text>
          <View>
            <Text>주문접수</Text>
            <Text>결제완료</Text>
            <Text>상품준비중</Text>
            <Text>배송중</Text>
            <Text>배송완료</Text>
          </View>
          <View>
            <Text>취소</Text>
            <Text>교환</Text>
            <Text>반품</Text>
            <Text>구매확정</Text>
          </View>
        </View>

      </ScrollView>


      <BottomTab></BottomTab>
    </>
  )
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 10,
    padding:10,
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#bbb'
  }
})

export default MySSGScreen;

import React from 'react';
import {
  Text,View,FlatList,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper'

function HomeScreen(){

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '쓱배송',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '새벽배송',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '트레이더스 쓱배송',
    },
    
  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <View style={{flexDirection:'column'}}>
      <View style={styles.btn}></View>
      <Text>{title}</Text>
      <View style={styles.btn}></View>
      <Text>{title}</Text>
    </View>
  );
  
  return (
    <>
      {/** 광고 슬라이드 */}
      <View style={styles.swiper}>
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
        </Swiper>
      </View>
      
      {/** 버튼 */}
      <FlatList
        style={styles.btnList}
        data={DATA}
        horizontal={true}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </>
  )
}

const styles = StyleSheet.create({
  swiper: {
    height: 200
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  btnList: {
    height:100
  },
  btn: {
    height:60,
    width:60,
    margin: 5,
    backgroundColor: 'orange'
  }
})

export default HomeScreen;

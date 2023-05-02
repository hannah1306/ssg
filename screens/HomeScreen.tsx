import React, {useState} from 'react';
import {
  Text,View,FlatList,
  StyleSheet,
  Image,ScrollView, NativeSyntheticEvent, NativeScrollEvent
} from 'react-native';
import Swiper from 'react-native-swiper'
import ProductComponent from '../components/ProductComponent';
import LottieView from 'lottie-react-native';


const refreshingHeight = 100;

function HomeScreen(){

  const [offsetY, setOffsetY] = useState(0);

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>){
    const { y } = event.nativeEvent.contentOffset;
    console.log(y);
    setOffsetY(y);
  }

  const menuData = [
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

  const productData = [
    {
      id: 1,
      title: '아디다스오리지널스 (남여공용) 팀코트 [FEADK1302145]',
      place: '신세계백화점',
      oldPrice: '44,500원',
      newPrice: '37,855원',
      percent: '15%'
    },
    {
      id: 2,
      title: '아디다스오리지널스 (남여공용) 팀코트 [FEADK1302145]',
      place: '신세계백화점',
      oldPrice: '72,500원',
      newPrice: '50,855원',
      percent: '22%'
    },
    {
      id: 3,
      title: '아디다스오리지널스 (남여공용) 팀코트 [FEADK1302145]',
      place: '신세계백화점',
      oldPrice: '33,500원',
      newPrice: '18,855원',
      percent: '38%'
    },
    {
      id: 4,
      title: '아디다스오리지널스 (남여공용) 팀코트 [FEADK1302145]',
      place: '신세계백화점',
      oldPrice: '44,500원',
      newPrice: '37,855원',
      percent: '15%'
    },
    {
      id: 5,
      title: '아디다스오리지널스 (남여공용) 팀코트 [FEADK1302145]',
      place: '신세계백화점',
      oldPrice: '72,500원',
      newPrice: '50,855원',
      percent: '22%'
    },
    {
      id: 6,
      title: '아디다스오리지널스 (남여공용) 팀코트 [FEADK1302145]',
      place: '신세계백화점',
      oldPrice: '33,500원',
      newPrice: '18,855원',
      percent: '38%'
    },
  ]


  return (
    <>

      <ScrollView contentContainerStyle={styles.block} onScroll={onScroll}>

        {/** 광고 슬라이드 */}
        <View style={styles.swiper}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
            <View style={styles.slide}>
              <Image style={styles.slideImage} source={require('../assets/img/slide1.png')}></Image>
            </View>
            <View style={styles.slide}>
              <Image style={styles.slideImage} source={require('../assets/img/slide2.png')}></Image>
            </View>
            <View style={styles.slide}>
              <Image style={styles.slideImage} source={require('../assets/img/slide3.png')}></Image>
            </View>
          </Swiper>
        </View>

        
        {/** 버튼 */}
        <FlatList
          style={styles.btnList}
          data={menuData}
          horizontal={true}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

        <Text>어린이날 선물대전!</Text>
        <Text>유아동 쓱세일</Text>
        
        <FlatList
          style={styles.productList}
          data={productData}
          renderItem={({item}) => <ProductComponent product={item}/>}
          horizontal={true}
        ></FlatList>

      </ScrollView>
      {/** Refreshing Lottie */}
      {/* <LottieView
      style={styles.lottiView}
      source={require('../assets/lottie/142876-confetti.json')}
      autoPlay
      loop
      /> */}
    </>
  )
}

const styles = StyleSheet.create({
  block:{
    paddingBottom: 100
  },
  lottiView: {
    index:1000,
    height: refreshingHeight,
    position: 'absolute',
    top:0,
    left:0,
    right:0,
  },
  swiper: {
    height: 250
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    flex:1,
    resizeMode: 'contain'
  },
  btnList: {
    padding:10,
    marginTop: 30,
    marginBottom: 60,
    borderWidth:1,
  },
  btn: {
    height:60,
    width:60,
    margin: 5,
    backgroundColor: 'orange'
  },
  productList: {
    padding:10,
    marginTop: 10,
  }
})

export default HomeScreen;

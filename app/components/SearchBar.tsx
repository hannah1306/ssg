import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../screens/RootStack';


function SearchBar({open = false}){

  const navigation = useNavigation<RootStackNavigationProp>();

  const openSearch = () => {
    navigation.navigate('Search');
  }

  //Animated
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,  
    }).start();
  }, []);

  if(open){
    return (
      <View style={styles.block}>
        <Animated.View style={{
          ...styles.searchInput,
          flex: animation
          }}>
          <TextInput autoFocus={true} style={styles.textInput}></TextInput>
          <Icon name="instagram" size={20} style={{marginRight:10}}></Icon>
        </Animated.View>
        <Icon name="shoppingcart" size={25}></Icon>
      </View>
    )
  }else{
    return (
      <View style={styles.block}>
        <Pressable style={styles.searchBar} onPress={openSearch}>
          <Icon name="search1" size={20}></Icon>
        </Pressable>
        <Icon name="shoppingcart" size={25}></Icon>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  block: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    marginEnd:10
  },
  searchBar: {
    flex:1,
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 15,
    alignItems: 'flex-end',
    justifyContent:'center',
    paddingEnd: 10
  },
  searchInput:{
    flex:0,
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInput:{
    flex:1,
    fontSize:15,
    paddingHorizontal: 10,
    paddingVertical:0,
  }
})

export default SearchBar;
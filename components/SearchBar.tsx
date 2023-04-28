import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationProp } from '../screens/RootStack';


function SearchBar(){

  const navigation = useNavigation<RootStackNavigationProp>();

  const openSearch = () => {
    navigation.navigate('Search');
  }

  return (
    <View style={styles.block}>
      <Pressable style={styles.searchBar} onPress={openSearch}>
        <Icon name="search1" size={20}></Icon>
      </Pressable>
      <Icon name="shoppingcart" size={25}></Icon>
    </View>
  )
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
  }
})

export default SearchBar;
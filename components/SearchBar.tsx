import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function SearchBar(){
  return (
    <View style={styles.block}>
      <View style={styles.searchBar}>
        <Icon name="search1" size={20}></Icon>
      </View>
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
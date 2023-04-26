import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp, RootStackParamList } from '../screens/RootStack';
import Icon from 'react-native-vector-icons/Feather';

type ButtonProps = {
  menu: keyof RootStackParamList;
  text: string;
  icon: string;
}

function BottomButton({menu, text, icon}:ButtonProps){

  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable style={styles.block} onPress={() => navigation.navigate(menu)}>
      <Icon name={icon} size={30} ></Icon>
      <Text>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  block: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BottomButton;
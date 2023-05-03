import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

/** RootStack */
export type RootStackParamList = {
  HomeStack: undefined;
  Category: undefined;
  Gift: undefined;
  MySSG: undefined;
  ClickProduct: undefined;
  Search: undefined;
  ProductDetail: {product: ProductType} | undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RootStackRouteProp = RouteProp<RootStackParamList>;

/** HomeStack */
export type HomeStackParamList = {
  Home: undefined;
  Sale: undefined;
  SSGTV: undefined;
}

export type StackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

/** Button */
export type ButtonProps = {
  menu: keyof RootStackParamList;
  text: string;
  icon: string;
}

/** Product */
export type ProductProps = {
  product: ProductType;
}

export type ProductType = {
  title: string;
  place: string;
  oldPrice: string;
  newPrice: string;
  percent: string;
}

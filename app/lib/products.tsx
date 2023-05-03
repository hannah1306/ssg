import firestore from '@react-native-firebase/firestore';

export const ProductCollection = firestore().collection("products");

export async function getProducts(){
  const doc = await ProductCollection.get();
  const productList = doc.docs.map((data:any) => {
    return { id: data.id, ...data.data() }
  })
  console.log('productList', productList);

  return productList;
}
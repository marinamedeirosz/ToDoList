import { View, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import loading from '../../assets/loading.gif'

export default function TelaCarregamento({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 6400);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={loading}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  imagem: {
    width: '70%',
    height: '30%'
  }
})
import { View, StyleSheet, Image, Text, TouchableOpacity, Touchable} from "react-native";
import loading from '../../assets/loading.gif'

export default function TelaCarregamento() {
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
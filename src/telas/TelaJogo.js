import { View, StyleSheet } from "react-native";
import Joguito from '../componentes/JogoDaMemoria'

export default function TelaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Joguito />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
import { View, StyleSheet, SafeAreaView } from "react-native";
import CaixaTexto from '../componentes/MyTextInput'


export default function Login({ navigation }) {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <CaixaTexto 
            placeholder='email' 
            value={email} 
            onChangeText={setEmail} />
            <CaixaTexto 
            placeholder='senha'
            secureTextEntry 
            value={password} 
            onChangeText={setPassword} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
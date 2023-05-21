import { TextInput, View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import CaixaTexto from '../componentes/MyTextInput'
import { useState } from 'react';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <CaixaTexto
                    autoCapitalize="none"
                    placeholderTextColor="#727272"
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail} />
                <CaixaTexto
                    autoCapitalize="none"
                    placeholderTextColor="#727272"
                    placeholder='senha'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword} />
                <TouchableOpacity style={styles.botao} onPress={() =>
                    navigation.navigate('Home')}>Entrar no App</TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '33%',
        height: '10%',
        backgroundColor: 'lightblue'
    }
})
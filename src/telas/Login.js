import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
//import CaixaTexto from '../componentes/MyTextInput'
import { TextInput } from "react-native";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    placeholderTextColor="#727272"
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    autoCapitalize="none"
                    placeholderTextColor="#727272"
                    style={styles.input}
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
    },
    input: {
        borderRadius: 8,
        borderColor: '#1D013F',
        paddingHorizontal: 8,
        color: '#000',
        borderWidth: 1,
        width: '100%',
        height: 50,
        marginBottom: 16,
    }
})
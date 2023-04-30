import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function TelaPrincipal({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.titlesView}>
                <Text style={styles.titleText}>Jogo das (nossas) memórias</Text>
                <Text style={styles.subtitleText}>versão marimari e baebae</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btnJogo} onPress={() =>
                    navigation.navigate('Game')}>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlesView: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    titleText: {
        margin: 20,
        fontSize: '40px',
        fontFamily: 'SigmarOne',
    },
    subtitleText: {
        margin: 20,
        fontSize: '15px',
        fontFamily: 'SigmarOne',
    },
    btnJogo: {
        borderRadius: '50%',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
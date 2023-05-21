import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function TelaPrincipal({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.titlesView}>
                <Text style={styles.titleText}>Jogo da memória</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btnJogo} onPress={() =>
                    navigation.navigate('Game')}>
                        <Text style={styles.btnText}>Jogar</Text>
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
    btnText: {
        margin: 20,
        fontSize: '20px',
        fontFamily: 'SigmarOne',
    },
    btnJogo: {
        borderRadius: '50%',
        height: '20%rem',
        width: '33%rem',
        backgroundColor: 'green',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
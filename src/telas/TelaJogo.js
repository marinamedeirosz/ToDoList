import { View, StyleSheet, Image, Text, TouchableOpacity, Touchable} from "react-native";
import Joguito from '../componentes/JogoDaMemoria'

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
        <View style={styles.titlesView}>
            <Text style={styles.titleText}>Jogo da memória</Text>
            <Text style={styles.subtitleText}>(versão marimari e biazinha)</Text>
        </View>
        <View style={styles.jogoView}>
            <Joguito/>
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
        fontSize: '45px',
        fontFamily: 'SigmarOne',
    },
    subtitleText: {
        margin: 20,
        fontSize: '20px',
        fontFamily: 'SigmarOne',
    },
    jogoView: {
        borderRadius: 20,
        backgroundColor: 'purple',
        height: '70%',
        marginLeft: 10,
        marginRight: 10
    }
})
import { View, StyleSheet, Image, Text, TouchableOpacity, Touchable} from "react-native";

export default function TelaPrincipal({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.titlesView}>
            <Text style={styles.titleText}>Jogo das (nossas) memórias</Text>
            <Text style={styles.subtitleText}>versão marimari e baebae</Text>
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
    }
})
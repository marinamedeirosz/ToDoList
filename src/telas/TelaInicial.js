import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
//import { useFonts } from 'expo-font';


export default function Tela1(props){
    /*const [fontsLoaded] = useFonts({
        'SigmarOne': require('.././assets/fonts/SigmarOne.otf'),
      });*/

    return(
        <View style={styles.container}>
            <View style={styles.fundo}>
                <Text style={styles.titulo}>{props.texto}</Text>
                <View style={styles.botoesSimView}>
                    <TouchableOpacity style={styles.botaoSim}>
                        <Text style={styles.textoBotaoSim}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoSim}>
                        <Text style={styles.textoBotaoSim}>SIM PT.2</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.botaoNao}>
                    <Text style={styles.textoBotaoNao}>NÃO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fundo:{
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    botoesSimView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '70%',
        margin: 20
    },
    botaoSim:{
        borderRadius: '50%',
        height:100,
        width: 100,
        backgroundColor: 'green',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        margin: 20,
        fontSize: '45px',
        fontFamily: 'SigmarOne',
        marginBottom: 50
    },
    textoBotaoSim: {
        fontSize: '20px',
        fontFamily: 'SigmarOne',
        textAlign: 'center'
    },
    botaoNao: {
        borderRadius: 10,
        height: 25,
        width: 50,
        backgroundColor: 'red',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    textoBotaoNao: {
        fontSize: '12px',
        fontFamily: 'SigmarOne',
        textAlign: 'center'
    }
})
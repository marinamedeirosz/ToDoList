import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
//import { useFonts } from 'expo-font';


export default function Tela1(props){
    /*const [fontsLoaded] = useFonts({
        'SigmarOne': require('.././assets/fonts/SigmarOne.otf'),
      });*/

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{props.texto}</Text>
            <View style={styles.botoesView}>
                <TouchableOpacity style={styles.botao}>
                    <Text>SIM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text>SIM PT.2</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    botoesView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    botao:{
        borderRadius: '50%',
        height:100,
        width: 100,
        backgroundColor: 'green',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        margin: 20,
        fontSize: '30px',
        fontFamily: 'SigmarOne'
    }
})
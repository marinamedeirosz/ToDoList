import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { auth } from '../../firebase';

export default function TelaPrincipal({ navigation }) {
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <View style={styles.titlesView}>
                <Text style={styles.titleText}>Jogo da memória</Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btnJogo} onPress={() =>
                    navigation.navigate('Game')}>
                        <Text style={styles.btnText}>Jogar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnJogo, {backgroundColor: 'red'}]} onPress={handleSignOut}>
                        <Text style={styles.btnText}>SignOut</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.btnJogo, {backgroundColor: 'yellow'}]} onPress={() => 
                navigation.navigate("Tasks")}>
                        <Text style={styles.btnText}>Tasks</Text>
                </TouchableOpacity>
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
        fontSize: '15px',
        fontFamily: 'SigmarOne',
    },
    btnJogo: {
        borderRadius: 20,
        width: '50%',
        backgroundColor: 'green',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        marginTop: 40
    }
})
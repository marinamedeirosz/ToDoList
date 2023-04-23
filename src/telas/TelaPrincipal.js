import { View, StyleSheet, Image, Text, TouchableOpacity, Touchable} from "react-native";

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.titleText}></Text>
        </View>
        <View style={styles.jogoView}>

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
})
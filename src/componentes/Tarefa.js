import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";
import { ImageBackground } from "react-native";
import close from "../../assets/task_images/close.png";



export default function Tarefa({ nome, func, status, checkedFunc }) {
    const [checked, setChecked] = useState(status);

    return (
        <View style={styles.tarefaView}>
            <CheckBox
                style={styles.tarefaCheckbox}
                checkedIcon='check'
                uncheckedIcon='square-o'
                checkedColor="green"
                uncheckedColor="red"
                checked={checked}
                onPress={() => { checkedFunc(); setChecked(!status) }} />
            <Text style={[styles.uncheckedText, checked ? styles.checkedText : null]}>{nome}</Text>
            <TouchableOpacity onPress={func}>
                <View style={styles.apagar}>
                    <ImageBackground
                        source={close}
                        resizeMode="stretch"
                        style={styles.image} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tarefaView: {
        flexDirection: 'row',
        borderRadius: '10px',
        backgroundColor: '#894fc9',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        margin: '10px',
    },
    uncheckedText: {
        color: '#fff',
        fontWeight: "400",
        fontSize: "20px"
    },
    checkedText: {
        textDecorationLine: "line-through"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    apagar: {
        height: '20px',
        width: '20px',
        margin: '10px'
    }
});
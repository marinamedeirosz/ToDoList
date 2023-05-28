import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, TextInput, View, SafeAreaView, Image } from 'react-native';
import Tarefa from '../componentes/Tarefa';
import { useState, useEffect } from 'react';
import add from '../../assets/task_images/add.png'
import { createTask, updateTask, deleteTask, getTasks } from "../services/userServices";
import { auth } from "../../firebase"

export default function Tarefas() {
	const [tarefas, setTarefas] = useState([])
	const [nome, setNome] = useState("")
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		getTasks(auth.currentUser).then((userTasks) => {
			setTarefas(userTasks);
		});
	}, [refresh])

	const adicionaTarefa = async (nome) => {
		if (nome === '') return
		else {
			await createTask(nome, auth.currentUser);
			setRefresh(!refresh);
		}
	}

	const removeTarefa = async (id) => {
		await deleteTask(id)
		setRefresh(!refresh)
	}

	const updateTaskStatus = async (id, status) => {
		await updateTask(id, !status)
		setRefresh(!refresh)
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.total}>
				<View style={styles.inputView}>
					<Image style={styles.img} source={require('../../assets/task_images/lista.png')}></Image>
					<TextInput
						style={styles.inputBox}
						value={nome}
						onChangeText={text => setNome(text)}
						autocapitalize="none"
						multiline='true'
						placeholder='Digite a tarefa: '
					/>
					<TouchableOpacity onPress={() => adicionaTarefa(nome)}>
						<View style={styles.adicionarImg}>
							<ImageBackground
								source={add}
								resizeMode="stretch"
								style={styles.image}
							></ImageBackground>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.viewTarefas}>
					{tarefas.map((t, i) => (
						<Tarefa nome={t.titulo} status={t.status} id={i} key={i}
							func={() => removeTarefa(t.id)}
							checkedFunc={() => updateTaskStatus(t.id, t.status)}
						></Tarefa>
					))}
				</View>
			</View>
			<StatusBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: '#fcdcfa'
	},
	img: {
		height: '50px',
		width: '50px'
	},
	text: {
		width: '70%'
	},
	viewTitulo: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		height: '10%',
		width: '70%'
	},
	viewTarefas: {
		alignItems: 'center',
		backgroundColor: "#f68cee",
		width: '100%',
		borderRadius: '10px'
	},
	total: {
		width: "80%",
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '100%',
	},
	inputBox: {
		width: "90%",
		borderRadius: 8,
		borderColor: '#1D013F',
		paddingHorizontal: 8,
		color: '#000',
		borderWidth: 1,
		width: '100%',
		height: 50
	},
	inputView: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: "row",
		width: '100%',
		paddingTop: '10px',
		paddingBottom: '10px'
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	},
	adicionarImg: {
		height: '40px',
		width: '40px',
		margin: '10px'
	}
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, TouchableOpacity,  Text, TextInput, View, SafeAreaView, Image } from 'react-native';
import Tarefa from '../componentes/Tarefa';
import { useState } from 'react';
import add from '../../assets/task_images/add.png'

export default function Tarefas({navigation}) {
	const [tarefas, setTarefas] = useState([])
	const [nome, setNome] = useState("")

	const adicionaTarefa = (nome) => {
		if (nome === '') return
    	else {
			setTarefas(tarefas => [...tarefas, {'desc': nome}])
			setNome('')
		}
	}

	const removeTarefa = (id) => {        
		const deleted = [...tarefas];
		deleted.splice(id, 1);
		setTarefas(deleted);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.viewTitulo}>
				<Image style={styles.img} source={require('../../assets/task_images/lista.png')}></Image>
				<Text numberOfLines={1} style={styles.text}>listinha marota</Text>
			</View>
			<View style={styles.total}>
				<View style={styles.input}/*caixa de texto*/>
					<View style={styles.inputView}>
						<TextInput
							style={styles.inputText}
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
				</View>
				<View style={styles.viewTarefas}>
					{tarefas.map((t, i) => (
					<Tarefa nome={t.desc} id={t.id} func={() => removeTarefa(i)}></Tarefa>
					))}
				</View>
			</View>
		<StatusBar/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	alignItems: "center",
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
		backgroundColor: "lightpink" ,
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
  	inputText: {
    	borderWidth:1, 
    	borderColor: '#000',
    	borderRadius: '10px',
    	width: "90%",
		paddingHorizontal: 8,
		paddingVertical: 4
	},
	inputView: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: "row"
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

import TelaPrincipal from './src/telas/TelaPrincipal';
import { useFonts } from 'expo-font';
import TelaJogo from './src/telas/TelaJogo'
import Login from './src/telas/Login'
import Tarefas from './src/telas/Tarefas'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'SigmarOne': require('./assets/fonts/SigmarOne.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Home"
                    component={TelaPrincipal}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Game"
                    component={TelaJogo}
                    options={{ title: 'Jogo da memória' }} />
                <Stack.Screen
                    name="Tasks"
                    component={Tarefas}
                    options={{
                        title: 'To Do List',
                        headerStyle: {
                            backgroundColor: '#894fc9',
                        },
                        headerTintColor: '#fff'
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
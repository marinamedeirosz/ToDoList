import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import TelaCarregamento from './src/telas/TelaCarregamento';
import TelaPrincipal from './src/telas/TelaPrincipal';
import { useFonts } from 'expo-font';
import TelaJogo from './src/telas/TelaJogo'
import {NavigationContainer} from '@react-navigation/native';


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
        <Stack.Screen name="T1" component={Tela1}/>
        <Stack.Screen name="T2" component={Tela2}/>
        <Stack.Screen name="Loading" component={TelaCarregamento}/>
        <Stack.Screen name="Home" component={TelaPrincipal}/>
        <Stack.Screen name="Game" component={TelaJogo}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}


import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import TelaCarregamento from './src/telas/TelaCarregamento';
import TelaPrincipal from './src/telas/TelaPrincipal';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SigmarOne': require('./assets/fonts/SigmarOne.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    //<Tela1/>
    //<Tela2/>
    //<TelaCarregamento/>
    <TelaPrincipal/>
  );
}


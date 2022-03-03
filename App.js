import React from 'react'
import Routes from './src/routes' 
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
});

if (!fontsLoaded) {
    return <AppLoading />;
}
  return <Routes/>
}

//Crie 4 abas dentro da navegao bottom
//tela home com mesagem de boa vindas 
//tela dados do servidor onde vai aprenstar a hora local
//tela fotos 
//tela flat list 
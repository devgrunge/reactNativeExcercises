import React from 'react'
import { View, Text , TextInput , Button , } from 'react-native'
import styles from './styles'

export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Olá, seja bem vindo!</Text>
            </View>
    )
}
//Crie 4 abas dentro da navegao bottom
//tela home com mesagem de boa vindas 
//tela dados do servidor onde vai aprenstar a hora local
//tela fotos 
//tela flat list 
import React from 'react'
import { View, Text , TextInput , Button , Image } from 'react-native'
import styles from './styles'

export default function App(){
    return(
        <View style={styles.container}>
          <Text style={styles.h1}>A foto será mostrada aqui</Text>
        <Image style={styles.stretch} source={('https://picsum.photos/200/300')} />
      </View>
    )}
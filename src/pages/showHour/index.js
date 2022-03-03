import React from 'react'
import { View, Text , Button } from 'react-native'
import styles from './styles'
import moment from 'moment';

export default function App() {
    let getDate = moment().format('LT');       
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>A hora será mostrada aqui</Text>
            <Button 
            title='Veja a hora!'
            onPress={() => alert(getDate)} />
        </View>
    )
}
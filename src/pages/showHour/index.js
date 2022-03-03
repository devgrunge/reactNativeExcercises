import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import moment from 'moment';

export default function App() {
            return (
        <View style={styles.container}>
            <Text style={styles.h1}>A hora será mostrada aqui</Text>
            <Text style={styles.h2}>Current Date {moment().format('LTS')}</Text>
        </View>
    )
}
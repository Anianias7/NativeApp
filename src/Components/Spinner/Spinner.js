import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import styles from './Spinner.style'

const Spinner = () => (
    <View style={styles.Spinner}>
        <ActivityIndicator size="large" color='#FFA000'/>
    </View>
)


export default Spinner;
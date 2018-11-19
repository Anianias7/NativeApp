
import React from 'react'
import { View, Text } from 'react-native'

import styles from './SearchDescription.style'

const Description = () => (
    <View style={styles.SearchDescriptionContainer}>
        <Text style={styles.Description}>Type movie or TV series name to always be</Text>
        <Text style={[styles.Description, styles.DescriptionLineAccent]}> UP TO DATE </Text>
        <Text style={styles.Description}> with most expected premiers!</Text>
    </View>
);

export default Description;
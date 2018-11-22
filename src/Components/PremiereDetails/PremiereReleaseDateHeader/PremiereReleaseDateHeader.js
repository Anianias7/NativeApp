import React from 'react'
import { View, Text } from 'react-native'

import styles from './PremiereReleaseDateHeader.style'

const PremiereReleaseDateHeader = ({
    releaseDate
}) => (
        <View style={styles.HeaderContainer}>
            <Text style={[styles.HeaderText, styles.HeaderPremiereText]}>PREMIERS AT: </Text>
            <Text style={styles.HeaderText}>{releaseDate}</Text>
        </View>
    )

export default PremiereReleaseDateHeader;
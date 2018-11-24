import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './PremiereDetailsHeader.style'

const PremiereDetailsHeader = ({
    releaseDate,
    onButtonPress,
    showButton
}) => (
        <View style={styles.HeaderContainer}>
            <View style={styles.releaseDateContainer}>
                <Text style={[styles.HeaderText, styles.HeaderPremiereText]}>PREMIERS AT: </Text>
                <Text style={styles.HeaderText}>{releaseDate}</Text>
            </View>
            {showButton && <TouchableOpacity onPress={onButtonPress} style={styles.HeaderButton}>
                <Text style={styles.HeaderButtonText}>ADD TO LIST</Text>
            </TouchableOpacity>}
        </View>

    )

export default PremiereDetailsHeader;
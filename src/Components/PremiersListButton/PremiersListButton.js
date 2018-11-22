import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './PremiersListButton.style'

const PremiersListButton = ({
    imageUri,
    title,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
                <View style={styles.ButtonImageContainer}>
                    <Image source={imageUri} style={styles.ButtonImage} />
                </View>
                <View style={styles.ButtonTextContainer}>
                    <Text style={styles.ButtonText}>
                        {title}
                    </Text>
                </View>
        </TouchableOpacity>
    )
};
export default PremiersListButton;
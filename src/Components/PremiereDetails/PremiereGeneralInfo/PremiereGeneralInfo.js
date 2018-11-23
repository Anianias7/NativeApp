import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './PremiereGeneraInfo.style'

const PremiereGeneralInfo = ({
    imageUri,
    title,
    description,
    onDescriptionPress
}) => {
    return (
        <View style={styles.GeneralInfoContainer}>
            <View style={styles.PosterImageContainer}>
                <Image source={imageUri} style={styles.PosterImage}/>
            </View>
            <View style={styles.ContentContainer}>
                <Text style={styles.Title}>{title}</Text>
                <TouchableOpacity onPress={onDescriptionPress}>
                    <Text style={styles.Description} numberOfLines={7} ellipsizeMode='tail'>{description}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PremiereGeneralInfo;
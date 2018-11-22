import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './PremiereGeneraInfo.style'

const PremiereGeneralInfo = ({
    imageUri,
    title,
    description,
}) => {
    return (
        <View style={styles.GeneralInfoContainer}>
            <View style={styles.PosterImageContainer}>
                <Image source={imageUri} style={styles.PosterImage}/>
            </View>
            <View style={styles.ContentContainer}>
                <Text style={styles.Title}>{title}</Text>
                <Text style={styles.Description} numberOfLines={7} ellipsizeMode='tail'>{description}</Text>
            </View>
        </View>
    )
}

export default PremiereGeneralInfo;
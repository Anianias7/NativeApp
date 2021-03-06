import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import styles from './PosterCard.style'

import Card from '../Card/Card'

const PosterCard = ({
    imageUri,
    title,
    subtitle,
    onShowDetails,
    id
}) => (
        <TouchableOpacity onPress={() => onShowDetails(id)}>
            <View style={styles.PosterCardContainer}>
                <Card imageUri={imageUri} title={title} subtitle={subtitle}/>
            </View>
        </TouchableOpacity>

    );

export default PosterCard;
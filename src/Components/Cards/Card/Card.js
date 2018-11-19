import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './Card.style'

const Card = ({
    type,
    imageUri,
    text,
}) => {
    const CardImageContainerStyle = text ? [styles.CardImageContainer, styles.CardImageContainer__withText] : styles.CardImageContainer

    return (
        <View style={styles.CardContainer}>
            <View style={CardImageContainerStyle}>
                <Image source={imageUri} style={styles.CardImage} />
            </View>
            <View style={styles.CardTextContainer}>
                {text && <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.CardText}>
                    {text}
                </Text>}
            </View>
        </View>
    )
};
export default Card;
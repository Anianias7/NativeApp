import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './Card.style'

const Card = ({
    type,
    imageUri,
    title,
    subtitle
}) => {
    const CardImageContainerStyle = title ? [styles.CardImageContainer, styles.CardImageContainer__withText] : styles.CardImageContainer
    return (
        <View style={styles.CardContainer}>
            <View style={CardImageContainerStyle}>
                <Image source={imageUri} style={styles.CardImage} />
            </View>
            {
                (title ||
                subtitle) &&
                <View style={styles.CardTextContainer}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={styles.CardText}>
                        {title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={styles.CardText}>
                        {subtitle}
                    </Text>
                </View>
            }
        </View>
    )
};
export default Card;
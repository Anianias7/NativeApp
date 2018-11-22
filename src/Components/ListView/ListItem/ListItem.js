import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './ListItem.style'

const ListItem = ({
    imageUri,
    title,
    subtitle,
    itemId,
    id
}) => {
    return (
        imageUri && <TouchableOpacity>
            <View style={styles.ItemContainer}>
                <View style={styles.ItemImageContainer}>
                    <Image source={imageUri} style={styles.ItemImage} />
                </View>
                <View style={styles.ContentItemContainer}>
                    <Text>{title}</Text>
                    <Text>{subtitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;
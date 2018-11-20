import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './ListItem.style'

const ListItem = ({
    imageUri,
    title,
    year,
    premiereDate,
    itemId,
    id
}) => {

    return (<TouchableOpacity>
        <View style={styles.ItemContainer}>
            <View style={styles.ItemImageContainer}>
                <Image source={imageUri} style={styles.ItemImage} />
            </View>
            <View style={styles.ContentItemContainer}>
                <Text>{`${title} (${year})`}</Text>
                <Text>{`Premiere Date: ${premiereDate}`}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
}

export default ListItem;
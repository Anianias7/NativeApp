import React from 'react'
import { ScrollView } from 'react-native'

import ListItem from '../ListItem/ListItem'
import styles from './ItemsList.style'

const ItemsList = ({
    titles,
    subtitles,
    ids,
    images,
}) => {
    console.log(images[0])

    const items = titles.map((title, i) => {
        return <ListItem
            itemId={i}
            key={title + i}
            id={ids && ids[i]}
            imageUri={images[i].image}
            title={title}
            subtitle={subtitles[i]} />
    });

    return (
        <ScrollView style={styles.ItemsListContainer}>
            {items}
        </ScrollView>
    );
}

export default ItemsList;
import React from 'react'
import { ScrollView } from 'react-native'

import ListItem from '../ListItem/ListItem'
import styles from './ItemsList.style'

const ItemsList = ({
    titles,
    subtitles,
    ids,
    images,
    onShowDetails
}) => {
    const items = titles && titles.map((title, i) => {
        return <ListItem
            itemId={i}
            key={title + i}
            id={ids && ids[i]}
            imageUri={images[i].image}
            title={title}
            subtitle={subtitles[i]}
            onShowDetails={onShowDetails} />
    });

    return (
        <ScrollView keyboardShouldPersistTaps={"always"} style={styles.ItemsListContainer}>
            {items}
        </ScrollView>
    );
}

export default ItemsList;
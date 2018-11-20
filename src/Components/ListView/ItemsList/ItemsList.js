import React from 'react'
import { ScrollView } from 'react-native'

import ListItem from '../ListItem/ListItem'
import styles from './ItemsList.style'

const ItemsList = (props) => {

    const movieItems = props.data.map((item, i) => {
        return <ListItem
            itemId={i}
            key={item.title}
            id={item.id}
            imageUri={item.image}
            title={item.title}
            year={item.year}
            premiereDate={item.premiereDate} />
    });

    return (
        <ScrollView style={styles.ItemsListContainer}>
            {movieItems}
        </ScrollView>
    );
}

export default ItemsList;
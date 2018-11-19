import React from 'react'
import { View } from 'react-native'

import ListItem from '../ListItem/ListItem'

const data = [
    {
        title: 'Tytanic',
        year: '2018',
        premiereDate: '18.11.2018',
        image: {
            uri: require('../../../assets/images/titanic.jpg'),
        },
    },
    {
        title: 'Ciekawy przypadek Benjamina Buttona',
        year: '2017',
        premiereDate: '25.12.2018',
        image: {
            uri: require('../../../assets/images/benjaminButton.jpg'),
        }
    },
]

const ItemsList = () => {

    const movieItems = data.map((item) =>
        <ListItem
            key={item.title}
            imageUri={item.image.uri}
            title={item.title}
            year={item.year}
            premiereDate={item.premiereDate} />
    );

    return (
        <View>
            {movieItems}
        </View>
    );
}

export default ItemsList;
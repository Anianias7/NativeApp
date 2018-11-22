import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './PosterCardsList.style'

import PosterCard from '../PosterCard/PosterCard'

const PosterCardsList = ({
    imagesUris,
    title,
    subtitle
}) => {
    const cardsList = imagesUris.map((imageUri, i) => {
        return (<PosterCard
            key={imageUri.image.uri + i}
            imageUri={imageUri.image}
            title={title && title[i]}
            subtitle={subtitle && subtitle[i]} />)
    }
    );

    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.PosterCardsListContainer}>
            {cardsList}
        </ScrollView>
    );
}

export default PosterCardsList;
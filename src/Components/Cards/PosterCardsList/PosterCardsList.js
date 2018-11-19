import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './PosterCardsList.style'

import PosterCard from '../PosterCard/PosterCard'

const PosterCardsList = ({
    imagesUris,
}) => {

    const cardsList = imagesUris.map((imageUri, i) =>
        <PosterCard key={imageUri.image.uri + i}
            imageUri={imageUri.image} />
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
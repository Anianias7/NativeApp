import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './PosterCardsList.style'

import PosterCard from '../PosterCard/PosterCard'

const PosterCardsList = ({
    imagesUris,
    title,
    subtitle,
    ids,
    onShowDetails,
}) => {
    const cardsList = imagesUris.map((imageUri, i) => {
        return (<PosterCard
            key={imageUri.image.uri + i}
            id={ids && ids[i].id}
            imageUri={imageUri.image}
            title={title && title[i]}
            subtitle={subtitle && subtitle[i]}
            onShowDetails={onShowDetails} />)
    });

    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.PosterCardsListContainer}>
            {cardsList}
        </ScrollView>
    );
}

export default PosterCardsList;
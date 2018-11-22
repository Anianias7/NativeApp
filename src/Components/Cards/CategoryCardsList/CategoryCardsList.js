import React from 'react'
import { View } from 'react-native'

import styles from './CategoryCardsList.style'

import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryCardsList = ({
    imagesUris,
    texts,
    onPress
}) => {

    const cardsList = imagesUris.map((imageUri, i) =>
        <CategoryCard key={texts[i] + i}
            imageUri={imageUri.image}
            text={texts[i]} 
            onPress={onPress}/>
    );

    return (
        <View style={styles.CategoryCardsListContainer}>
            {cardsList}
        </View>
    );
}

export default CategoryCardsList;
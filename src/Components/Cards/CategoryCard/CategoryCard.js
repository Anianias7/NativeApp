import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import styles from './CategoryCard.style'

import Card from '../Card/Card'

const CategoryCard = ({
    imageUri,
    text,
    onPress
}) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.CategoryCardContainer}>
                <Card imageUri={imageUri} text={text}/>
            </View>
        </TouchableOpacity>

    );

export default CategoryCard;
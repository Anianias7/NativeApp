import React from 'react'
import { View } from 'react-native'

import styles from './SearchField.style'

import InputField from '../../Fields/InputField/InputField'

const SearchField = () => (
    <View style={styles.SearchFieldContainer}>
        <InputField />
    </View>
);

export default SearchField;
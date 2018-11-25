import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'

import styles from './SearchField.style'

import InputField from '../../Fields/InputField/InputField'


const SearchField = ({
    onInputFocus,
    handleInputChange,
    onInputEndEditing,
}) => {
    console.log("NO HELOOO")
    return (
        <View style={styles.SearchFieldContainer}>
            <InputField
                onInputPress={onInputFocus}
                onChange={handleInputChange}
                onInputEndEditing={onInputEndEditing} />
        </View>
    );
}

export default withNavigation(SearchField);


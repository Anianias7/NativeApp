import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './InputField.style'


const InputField = ({
    onInputPress,
    onInputEndEditing,
    onChange,
}) => (
        <View style={styles.FieldInput} >
            <Icon name='search' size={20} style={styles.SearchIcon} />
            <TextInput
                style={styles.TextInput}
                onChange={onInputPress}
                onEndEditing={onInputEndEditing}
                onChangeText={(event) => onChange(event)} />
        </View>
    );

export default InputField;
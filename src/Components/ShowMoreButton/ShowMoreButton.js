import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './ShowMoreButton.style'

const ShowMoreButton = (props) => {
    console.log("PROPS ", props)
    return (
        <TouchableOpacity onPress={props.onShowMore} style={styles.IconContainer}>
            <Icon name='ellipsis-h' size={60} style={styles.Icon} />
        </TouchableOpacity>
    )
}

export default ShowMoreButton;
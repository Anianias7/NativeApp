import React from 'react'
import { Text } from 'react-native'
import Popout from '../Popup'

import styles from './PremiereDescriptionPopout.style'

const PremiereDescriptionPopout = ({
    visible,
    title,
    description,
    onPopoutClose

}) => (
        <Popout
            visible={visible}
            title={title}
            onPopoutClose={onPopoutClose}
            popoutStyle={styles}>
            <Text style={styles.Description}>{description}</Text>
        </Popout>
    )

export default PremiereDescriptionPopout;
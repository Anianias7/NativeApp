import React from 'react'
import { Text, View } from 'react-native'

import styles from './DetailsSection.style'

const DetailsSection = ({
    sectionTitle,
    children
}) => (
        <View style={styles.DetailsSectionContainer}>
            <Text style={styles.DetailsSectionTitle}>{sectionTitle}</Text>
            <View style={styles.DetailsSectionContent}>
                {children}
            </View>
        </View>
    )

export default DetailsSection;
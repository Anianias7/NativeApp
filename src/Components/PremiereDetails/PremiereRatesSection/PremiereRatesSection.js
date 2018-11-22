import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './PremiereRatesSections.style'

const PremiereRatesSection = ({
    rate
}) => {
    return (
        <View style={styles.RateSectionContainer}>
            <View style={styles.RateSectionContent}>
                <View style={styles.RateTextContainer}>
                    <Text style={styles.RateText}>The moviedb.org users average rate</Text>
                </View>
                <View style={styles.RateCircle}>
                    <Text style={styles.RateCircleText}>
                        {rate}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PremiereRatesSection;
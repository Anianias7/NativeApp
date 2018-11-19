import React from 'react'
import { Text } from 'react-native'


import styles from './SectionParagraph.style'


const InputField = ({
    children
}) => (
    <Text style={styles.Paragraph}>{children}</Text>
);

export default InputField;
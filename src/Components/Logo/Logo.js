
import React from 'react'

import { View, Image } from 'react-native'

import styles from './Logo.style'


const Logo = () => (
    <Image
        style={styles.LogoImage}
        source={require('../../assets/images/logo.png')} />
);





export default Logo;
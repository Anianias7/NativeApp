import React from 'react'
import { View, StatusBar } from 'react-native';

import ItemsList from '../../Components/ListView/ItemsList/ItemsList'



const MoviesPremiersScreen = (props) => (
    <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
        <StatusBar
            backgroundColor="black"
            barStyle="light-content"
        />
        <View>
            <ItemsList data={props.moviesPremiers} />
        </View>
    </View>

);

export default MoviesPremiersScreen;
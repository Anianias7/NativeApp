import React from 'react'
import { View, StatusBar } from 'react-native';

import {
    getPremiersIds,
    getPremiersImages,
    getPremiersPremieresDates,
    getPremiersTitles
} from './MoviesPremiersUtils'

import ItemsList from '../../Components/ListView/ItemsList/ItemsList'



const MoviesPremiersScreen = (props) => {
    console.log(props)
    return (
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <View>
                <ItemsList
                    titles={getPremiersTitles(props.moviesPremiers)}
                    images={getPremiersImages(props.moviesPremiers)}
                    ids={getPremiersIds(props.moviesPremiers)}
                    subtitles={getPremiersPremieresDates(props.moviesPremiers)} />
            </View>
        </View>

    );
}

export default MoviesPremiersScreen;
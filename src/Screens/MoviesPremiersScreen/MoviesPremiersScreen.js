import React from 'react'
import { View, StatusBar } from 'react-native';

import {
    getPremiersIds,
    getPremiersImages,
    getPremiersPremieresDates,
    getPremiersTitles
} from './MoviesPremiersUtils'

import ListScreen from '../ListScreen/ListScreen'

const MoviesPremiersScreen = (props) => {

    const onShowMovieDetails = (movieId) => {
        props.navigation.navigate('PremiereDetailsScreen', {
            type: 'movie',
            id: movieId
        })
    }

    return (
        <ListScreen
            onShowDetails={onShowMovieDetails}
            titles={getPremiersTitles(props.moviesPremiers)}
            images={getPremiersImages(props.moviesPremiers)}
            ids={getPremiersIds(props.moviesPremiers)}
            subtitles={getPremiersPremieresDates(props.moviesPremiers)} />

    );
}

export default MoviesPremiersScreen;
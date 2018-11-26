import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ListScreen from '../ListScreen/ListScreen'


import {
    getPremiersIds,
    getPremiersImages,
    getPremiersPremieresDates,
    getPremiersTitles
} from '../MoviesPremiersScreen/MoviesPremiersUtils'


class UserMoviesScreen extends Component {

    onShowMovieDetails = (movieId) => {
        this.props.navigation.navigate('PremiereDetailsScreen', {
            type: 'movie',
            id: movieId,
            dataSource: 'user'
        })
    }

    render() {
        return (

            <ListScreen
                onShowDetails={this.onShowMovieDetails}
                titles={getPremiersTitles(this.props.data)}
                images={getPremiersImages(this.props.data)}
                ids={getPremiersIds(this.props.data)}
                subtitles={getPremiersPremieresDates(this.props.data)} />

        );
    }

}

export default UserMoviesScreen;
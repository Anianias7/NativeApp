import React, { Component } from 'react'

import ListScreen from '../ListScreen/ListScreen'
import Spinner from '../../Components/Spinner/Spinner'

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
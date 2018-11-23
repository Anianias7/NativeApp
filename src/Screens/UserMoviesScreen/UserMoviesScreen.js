import React, { Component } from 'react'
import { Text } from 'react-native'
import ListScreen from '../ListScreen/ListScreen'

class UserMoviesScreen extends Component {

    // onShowMovieDetails = (movieId) => {
    //     props.navigation.navigate('PremiereDetailsScreen', {
    //         type: 'movie',
    //         id: movieId
    //     })
    // }
    

    componentDidMount() {
        this.props.getUserMoviesPremiers()
    }

    render() {
        console.log("AAAAAAAAAAAAAAAA ", this.props.data)
        return (
            <Text>DUPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
            // <ListScreen />
            // <ListScreen
            //     onShowDetails={onShowMovieDetails}
            //     titles={getPremiersTitles(this.props.moviesPremiers)}
            //     images={getPremiersImages(this.props.moviesPremiers)}
            //     ids={getPremiersIds(this.props.moviesPremiers)}
            //     subtitles={getPremiersPremieresDates(this.props.moviesPremiers)} />

        );
    }

}

export default UserMoviesScreen;
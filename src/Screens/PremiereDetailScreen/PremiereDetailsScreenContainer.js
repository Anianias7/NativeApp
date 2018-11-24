import { connect } from 'react-redux'

import PremiereDetailsScreen from './PremiereDetailsScreen'
import { getPremiersDetails } from '../../serivices/premiereService'
import { movieWasAdded } from '../../store/UserMovies/actions'
import { showWasAdded } from '../../store/UserShows/actions'

//wszystkie
const getSelectedMovieData = (data) => {
    return data.reduce((selectedData, item) =>
        selectedData.concat({
            id: item.id,
            title: item.title,
            premiereDate: item.release_date,
            year: item.release_date.split('-')[0],
            overview: item.overview,
            voteAverage: item.vote_average,
            image: {
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`
            }
        })
        , [])
}

//wszystkie
const getSelectedTVData = (data) => {
    return data.reduce((selectedData, item) =>
        selectedData.concat({
            id: item.id,
            title: item.name,
            premiereDate: item.first_air_date,
            year: item.first_air_date.split('-')[0],
            overview: item.overview,
            voteAverage: item.vote_average,
            image: {
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`
            }
        })
        , [])
}

const getUserMoviesIds = (data) => {
    return data.reduce((indexes, movie) => indexes.concat(movie.data.id), [])
}

// //users
const mapStateToProps = (state, ownProps) => ({
    userMoviesIndexes: getUserMoviesIds(state.userMovies.userMoviesData),
    userMovies: state.userMovies.userMoviesData,
    premiereService: getPremiersDetails(ownProps.navigation.state.params.type),
    data: ownProps.navigation.state.params.type === 'movie' ?
        getSelectedMovieData(state.moviesPremiers.data) :
        getSelectedTVData(state.showsPremiers.data),
})

const mapDispatchToProps = {
    movieWasAdded,
    showWasAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(PremiereDetailsScreen);
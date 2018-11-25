import { connect } from 'react-redux'

import PremiereDetailsScreen from './PremiereDetailsScreen'
import { getPremiersDetails } from '../../serivices/premiereService'
import { movieWasAdded } from '../../store/UserMovies/actions'
import { showWasAdded } from '../../store/UserShows/actions'


const getUserPremiersIds = (data) => {
    return data.reduce((indexes, premiere) => indexes.concat(premiere.data.id), [])
}

// //users
const mapStateToProps = (state, ownProps) => ({
    userPremiersIndexes: ownProps.navigation.state.params.type === 'movie' ?
        getUserPremiersIds(state.userMovies.userMoviesData) :
        getUserPremiersIds(state.userShows.usersShowData),
    userPremiers: ownProps.navigation.state.params.type === 'movie' ?
        state.userMovies.userMoviesData :
        state.userShows.usersShowData,
    premiereService: getPremiersDetails(ownProps.navigation.state.params.type),
    data: ownProps.navigation.state.params.type === 'movie' ?
        state.moviesPremiers.data :
        state.showsPremiers.data,
})

const mapDispatchToProps = {
    movieWasAdded,
    showWasAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(PremiereDetailsScreen);
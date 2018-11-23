import { connect } from 'react-redux'
import { getUserMoviesPremiers } from '../../store/UserMovies/thunks'

import UserMoviesScreen from './UserMoviesScreen'

const getMoviesCast = (data) => {
    return data.map(movie => movie.cast)
}

const getMoviesCrew = (data) => {
    return data.map(movie => movie.crew)
}

const getMoiviesImages = (data) => {
    return data.map(movie => movie.images)
}

const getMovieData = (data) => {
    return data.map(movie => movie.data)
}

const mapStateToProps = state => {
    console.log("STATE MAP ", state.userMovies.data)
    return ({
    loading: state.userMovies.loading,
    data: getMovieData(state.userMovies.data),
    cast: getMoviesCast(state.userMovies.data),
    crew: getMoviesCrew(state.userMovies.data),
    images: getMoiviesImages(state.userMovies.data)
})
};

const mapDispatchToProps = ({
    getUserMoviesPremiers
})


export default connect(mapStateToProps, mapDispatchToProps)(UserMoviesScreen)
import { connect } from 'react-redux'

import UserMoviesScreen from './UserMoviesScreen'

const getMovieData = (data) => {
    return data.map(movie => movie.data)
}

const mapStateToProps = state => ({
    data: getMovieData(state.userMovies.userMoviesData),
})

export default connect(mapStateToProps)(UserMoviesScreen)
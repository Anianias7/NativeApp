import { connect } from 'react-redux'

import moment from 'moment'

import SearchScreen from './SearchScreen'

const getPremiersForCurrentMonth = (moviesPremiersData) => {
    const monthStartDay = moment().startOf('month')
    const monthEndDay = moment().endOf('month')
    const filteredMoviesData = moviesPremiersData.filter(movieData => {
        return moment(movieData.release_date) > monthStartDay && moment(movieData.release_date) < monthEndDay;
    }
    )
    return getSelectedData(filteredMoviesData);
}

const getSelectedData = (moviesData) => {
    return moviesData.reduce((movies, movie) => movies.concat({ id: movie.id, poster_path: movie.poster_path }), [])
}

const mapStateToProps = state => ({
    moviesPremiers: getPremiersForCurrentMonth(state.MoviesPremiersReducer.data),
    loading: state.MoviesPremiersReducer.loading,
})

export default connect(mapStateToProps)(SearchScreen);



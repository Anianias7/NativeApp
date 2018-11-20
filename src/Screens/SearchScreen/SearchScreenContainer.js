import { connect } from 'react-redux'

import moment from 'moment'

import SearchScreen from './SearchScreen'

const monthStartDay = moment().startOf('month')
const monthEndDay = moment().endOf('month')

const getMoviePremiersForCurrentMonth = (moviesPremiersData) => {
    const filteredMoviesData = moviesPremiersData.filter(movieData => {
        return moment(movieData.release_date) > monthStartDay && moment(movieData.release_date) < monthEndDay;
    })
    return getSelectedData(filteredMoviesData);
}

const getTVPremiersForCurrentMonth = (tvPremiersData) => {
    const filteredTVData = tvPremiersData.filter(tvData => {
        return moment(tvData.first_air_data) > monthStartDay && moment(tvData.first_air_data) < monthEndDay;
    })
    return getSelectedData(filteredTVData);
}


const getSelectedData = (data) => {
    return data.reduce((data, item) => data.concat({ id: item.id, poster_path: item.poster_path }), [])
}

const mapStateToProps = state => ({
    moviesPremiers: getMoviePremiersForCurrentMonth(state.moviesPremiers.data),
    tvPremiers: getTVPremiersForCurrentMonth(state.showsPremiers.data),
})

export default connect(mapStateToProps)(SearchScreen);



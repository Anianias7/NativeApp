import { connect } from 'react-redux'

import PremiereDetailsScreen from './PremiereDetailsScreen'
import { getPremiersDetails } from '../../serivices/premiereService'

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


const mapStateToProps = (state, ownProps) => ({
    premiereService: getPremiersDetails(ownProps.navigation.state.params.type),
    data: ownProps.navigation.state.params.type === 'movie' ?
        getSelectedMovieData(state.moviesPremiers.data) :
        getSelectedTVData(state.showsPremiers.data)
})

export default connect(mapStateToProps)(PremiereDetailsScreen);
import { getMoviesPlayedInCinemasThisMonth } from '../../serivices/api/movieApi'
import {
    getMoviesPremeiersData,
    getMoviesPremeiersDataError,
    getMoviesPremeiersDataLoading
} from './actions'

export const getMoviesPremiersIds = () => async (dispatch) => {
    return getMoviesPlayedInCinemasThisMonth().then(response => {
        dispatch(getMoviesPremeiersData(response.data.results));
        dispatch(getMoviesPremeiersDataLoading());
    }).catch(error => {
        dispatch(getMoviesPremeiersDataError(error));
    })
}

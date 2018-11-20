import { getMovies } from '../../serivices/api/movieApi'
import {
    getMoviesPremeiersData,
    getMoviesPremeiersDataError,
    getMoviesPremeiersDataLoading
} from './actions'

export const getMoviesPremiers = () => async (dispatch) => {
    return getMovies().then(response => {
        dispatch(getMoviesPremeiersData(response.data.results));
        dispatch(getMoviesPremeiersDataLoading());
    }).catch(error => {
        dispatch(getMoviesPremeiersDataError(error));
    })
}

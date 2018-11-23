import { getUserMovies } from '../../serivices/api/userMoviesApi'
import {
    getUserMoviesPremeiersData,
    getUserMoviesPremeiersDataError,
    getUserMoviesPremeiersDataLoading
} from './actions'

export const getUserMoviesPremiers = () => async (dispatch) => {
    return getUserMovies().then(response => {
        console.log("RESPONSE ", response)
        dispatch(getUserMoviesPremeiersData(response.data));
        dispatch(getUserMoviesPremeiersDataLoading());
    }).catch(error => {
        dispatch(getUserMoviesPremeiersDataError(error));
    })
}
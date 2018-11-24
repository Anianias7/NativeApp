import { getUserMovies } from '../../serivices/api/userMoviesApi'
import {
    getUserMoviesPremeiersData,
    getUserMoviesPremeiersDataError,
    getUserMoviesPremeiersDataLoading
} from './actions'


export const getUserMoviesPremiers = () => async (dispatch) => {
    return getUserMovies().then(response => {
        dispatch(getUserMoviesPremeiersData(Object.values(response.data)));
        dispatch(getUserMoviesPremeiersDataLoading());
    }).catch(error => {
        dispatch(getUserMoviesPremeiersDataError(error));
    })
}


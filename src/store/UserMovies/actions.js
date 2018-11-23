import * as actionTypes from './actionTypes'

export const getUserMoviesPremeiersData = moviesData => ({
    type: actionTypes.GET_USER_MOVIES_PREMIERS_DATA,
    payload: moviesData
});

export const getUserMoviesPremeiersDataError = errorMsg => ({
    type: actionTypes.GET_USER_MOVIES_PREMIERS_DATA_ERROR,
    payload: errorMsg
})

export const getUserMoviesPremeiersDataLoading = () => ({
    type: actionTypes.GET_USER_MOVIES_PREMIERS_DATA_LOADING
})

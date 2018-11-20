import * as actionTypes from './actionTypes'

export const getMoviesPremeiersData = moviesData => ({
    type: actionTypes.GET_MOVIES_PREMIERS_DATA,
    payload: moviesData
});

export const getMoviesPremeiersDataError = errorMsg => ({
    type: actionTypes.GET_MOVIES_PREMIERS_DATA_ERROR,
    payload: errorMsg
})

export const getMoviesPremeiersDataLoading = () => ({
    type: actionTypes.GET_MOVIES_PREMIERS_DATA_LOADING
})

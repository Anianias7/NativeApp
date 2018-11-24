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

export const addMovieToList = movieData => ({
    type: actionTypes.ADD_MOVIE_TO_LIST,
    payload: movieData
})


export const movieWasAdded = () => ({
    type: actionTypes.ADD_MOVIE_TO_LIST,
})

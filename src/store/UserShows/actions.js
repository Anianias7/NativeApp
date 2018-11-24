import * as actionTypes from './actionTypes'

export const getUserTVPremeiersData = moviesData => ({
    type: actionTypes.GET_USER_TV_PREMIERS_DATA,
    payload: moviesData
});

export const getUserTVPremeiersDataError = errorMsg => ({
    type: actionTypes.GET_USER_TV_PREMIERS_DATA_ERROR,
    payload: errorMsg
})

export const getUserTVPremeiersDataLoading = () => ({
    type: actionTypes.GET_USER_TV_PREMIERS_DATA_LOADING
})

export const addTVToList = movieData => ({
    type: actionTypes.ADD_SHOW_TO_LIST,
    payload: movieData
})


export const showWasAdded = () => ({
    type: actionTypes.ADD_SHOW_TO_LIST,
})

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

export const VisibilityFilters = {
    SHOW_ALL_MOVIES: 'SHOW_ALL_MOVIES',
    SHOW_MOVIES_FOR_CURRENT_MONTH: 'SHOW_MOVIES_FOR_CURRENT_MONTH',
}
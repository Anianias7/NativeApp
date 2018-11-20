import * as actionTypes from './actionTypes'

export const getTVPremeiersData = tvData => ({
    type: actionTypes.GET_TV_PREMIERS_DATA,
    payload: tvData
});

export const getTVPremeiersDataError = errorMsg => ({
    type: actionTypes.GET_TV_PREMIERS_DATA_ERROR,
    payload: errorMsg
})

export const getTVPremeiersDataLoading = () => ({
    type: actionTypes.GET_TV_PREMIERS_DATA_LOADING
})

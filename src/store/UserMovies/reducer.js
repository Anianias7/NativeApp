import * as actionTypes from './actionTypes'

const initialState = {
    data: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_USER_MOVIES_PREMIERS_DATA: {
            return {
                ...state,
                data: state.data.concat(payload)
            }
        }
        case actionTypes.GET_USER_MOVIES_PREMIERS_DATA_ERROR: {
            return {
                ...state,
                error: payload,
                loading: true
            }
        }
        case actionTypes.GET_USER_MOVIES_PREMIERS_DATA_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        default: {
            return state
        }
    }
}





export default reducer;
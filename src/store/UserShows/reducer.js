import * as actionTypes from './actionTypes'

const initialState = {
    usersShowData: [],
    loading: true,
    error: null,
    shouldUpdateList: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_USER_TV_PREMIERS_DATA: {
            return {
                ...state,
                usersShowData: [...payload],
                shouldUpdateList: false,
            }
        }
        case actionTypes.ADD_SHOW_TO_LIST: {
            return {
                ...state,
                shouldUpdateList: true
            }
        }
        case actionTypes.GET_USER_TV_PREMIERS_DATA_ERROR: {
            return {
                ...state,
                error: payload,
                loading: true
            }
        }
        case actionTypes.GET_USER_TV_PREMIERS_DATA_LOADING: {
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
import * as actionTypes from './actionTypes'

const initialState = {
    userMoviesData: [],
    loading: true,
    error: null,
    shouldUpdateList: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_USER_MOVIES_PREMIERS_DATA: {
            return {
                ...state,
                userMoviesData: [...payload],
                shouldUpdateList: false,
            }
        }
        case actionTypes.ADD_MOVIE_TO_LIST: {
            return {
                ...state,
                shouldUpdateList: true
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
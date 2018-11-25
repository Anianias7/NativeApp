import * as actionTypes from './actionTypes'

const initialState = {
    data: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_MOVIES_PREMIERS_DATA: {
            return {
                ...state,
                data: [...payload.map(item => ({
                    ...item,
                    image: {
                        uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    },
                    premiereDate: item.release_date,
                    voteAverage: item.vote_average,
                    year: item.release_date.split('-')[0],
                    type: 'movie'
                }))]
            }
        }
        case actionTypes.GET_MOVIES_PREMIERS_DATA_ERROR: {
            return {
                ...state,
                error: payload,
                loading: true
            }
        }
        case actionTypes.GET_MOVIES_PREMIERS_DATA_LOADING: {
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
import * as actionTypes from './actionTypes'

const initialState = {
    data: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_TV_PREMIERS_DATA: {
            return {
                ...state,
                data: [...payload.map(item => ({
                    ...item,
                    type: 'tv',
                    title: item.original_name,
                    image: {
                        uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    },
                    premiereDate: item.first_air_date,
                    voteAverage: item.vote_average,
                    year: item.first_air_date.split('-')[0]
                }))
            ]
            }
        }
        case actionTypes.GET_TV_PREMIERS_DATA_ERROR: {
            return {
                ...state,
                error: payload,
                loading: true
            }
        }
        case actionTypes.GET_TV_PREMIERS_DATA_LOADING: {
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
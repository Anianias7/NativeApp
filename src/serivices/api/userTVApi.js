import axios from '../../axios/axios-premiers'

export const getUserShows = () => {
    return axios.get('/tv.json')
}
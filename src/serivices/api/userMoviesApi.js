import axios from '../../axios/axios-premiers'

export const getUserMovies = () => {
    return axios.get('/movies.json')
}
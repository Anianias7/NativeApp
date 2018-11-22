import { BASE_URL, API_KEY, createURL } from './api'
import moment from 'moment'
import axios from 'axios'

export const getMovies = () => {
    const startMonth = moment().startOf('month').subtract(1, 'months').format('YYYY-MM-DD')
    const endMonth = moment().endOf('month').add(2, 'months').format('YYYY-MM-DD')
    return axios.get(createURL('/discover/movie', `&region=US&primary_release_date.gte=${startMonth}&primary_release_date.lte=${endMonth}`))
    .then(response => response)
}

export const getMovieCredits = (movieId) => {
    return axios.get(createURL(`/movie/${movieId}/credits`, ''))
}

export const getMovieImages = (movieId) => {
    return axios.get('https://api.themoviedb.org/3/movie/338952/images?api_key=969df4a41c3c11dd391c3744c67609b9')
}
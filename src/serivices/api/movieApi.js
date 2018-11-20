import { BASE_URL, API_KEY, createURL } from './api'
import moment from 'moment'
import axios from 'axios'

export const getMovies = () => {
    const startMonth = moment().startOf('month').subtract(1, 'months').format('YYYY-MM-DD')
    const endMonth = moment().endOf('month').add(2, 'months').format('YYYY-MM-DD')
    return axios.get(createURL('/discover/movie', `&region=US&primary_release_date.gte=${startMonth}&primary_release_date.lte=${endMonth}`))
    .then(response => response)
}
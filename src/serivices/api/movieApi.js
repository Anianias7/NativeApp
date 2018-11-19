import { BASE_URL, API_KEY, createURL } from './api'
import moment from 'moment'
import axios from 'axios'

export const getMoviesPlayedInCinemasThisMonth = () => {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD')
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD')
    return axios.get(createURL('/discover/movie', `primary_release_date.gte=${startOfMonth}&primary_release_date.lte=${endOfMonth}`))
    .then(response => response)
}
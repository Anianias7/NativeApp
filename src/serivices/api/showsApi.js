import { BASE_URL, API_KEY, createURL } from './api'
import moment from 'moment'
import axios from 'axios'

export const getShows = () => {
    const startMonth = moment().startOf('month').subtract(1, 'months').format('YYYY-MM-DD')
    const endMonth = moment().endOf('month').add(3, 'months').format('YYYY-MM-DD')
    return axios.get(createURL('/discover/tv', `with_original_language=en&first_air_date.gte=${startMonth}&first_air_date.lte=${endMonth}`))
        .then(response => response)
}
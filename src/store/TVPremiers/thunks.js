import { getShows } from '../../serivices/api/showsApi'
import {
    getTVPremeiersData,
    getTVPremeiersDataError,
    getTVPremeiersDataLoading
} from './actions'

export const getTVPremiers = () => async (dispatch) => {
    return getShows().then(response => {
        dispatch(getTVPremeiersData(response.data.results));
        dispatch(getTVPremeiersDataLoading());
    }).catch(error => {
        dispatch(getTVPremeiersDataError(error));
    })
}

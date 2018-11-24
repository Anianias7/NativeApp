import { getUserShows } from '../../serivices/api/userTVApi'
import {
    getUserTVPremeiersData,
    getUserTVPremeiersDataError,
    getUserTVPremeiersDataLoading
} from './actions'


export const getUserTVPremiers = () => async (dispatch) => {
    return getUserShows().then(response => {
        dispatch(getUserTVPremeiersData(Object.values(response.data)));
        dispatch(getUserTVPremeiersDataLoading());
    }).catch(error => {
        dispatch(getUserTVPremeiersDataError(error));
    })
}


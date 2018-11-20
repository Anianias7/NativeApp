import { combineReducers } from "redux";
import moviesPremiers from '../store/MoviesPremiers/reducer'
import showsPremiers from '../store/TVPremiers/reducer'

const reducers = combineReducers({
    moviesPremiers,
    showsPremiers
})

const rootReducer = (state, action) => (
    reducers(state, action)
);

export default rootReducer;

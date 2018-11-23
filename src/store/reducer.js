import { combineReducers } from "redux";
import moviesPremiers from '../store/MoviesPremiers/reducer'
import showsPremiers from '../store/TVPremiers/reducer'
import userMovies from '../store/UserMovies/reducer'

const reducers = combineReducers({
    moviesPremiers,
    showsPremiers,
    userMovies
})

const rootReducer = (state, action) => (
    reducers(state, action)
);

export default rootReducer;

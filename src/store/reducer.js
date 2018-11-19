import { combineReducers } from "redux";
import MoviesPremiersReducer from '../store/MoviesPremiers/reducer'

const reducers = combineReducers({
    MoviesPremiersReducer,
})

const rootReducer = (state, action) => (
    reducers(state, action)
);

export default rootReducer;

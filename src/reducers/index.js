import {combineReducers} from 'redux'; 
import movieReducer from './movie_reducer'; 
import {reducer as formReducer} from 'redux-form'; 
import userReducer from './user_reducer'; 


// this is where we form the root of our state 
// the whole point of a reducer is to return an object - out of reducer returning a reducer - whatever object is returned 
//will get saved in state.movie 
// mutliple reducers makes it easier to manage 
const rootReducer = combineReducers(
    {
        movie:movieReducer,
        user: userReducer, 
        form: formReducer
    }
); 

export default rootReducer; 
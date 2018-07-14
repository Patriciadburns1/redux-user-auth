import types from '../actions/types'; 

const DEFAULT_STATE ={
    quote: ''}; 

//make reducer itself 
// two parameters - state/ action 
// switch statement goes inside 
//uses types to determine the cases - action.type 
//actions always end up in reducer 


export default ( state = DEFAULT_STATE, action )=> {
    switch(action.type){
        case types.GET_MOVIE_QUOTE:
            return {quote : action.quote}; 
        default: 
        return state; 
    }
}
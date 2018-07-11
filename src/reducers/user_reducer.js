import types from '../actions/types'; 

const DEFAULT_STATE ={}; 

//make reducer itself 
// two parameters - state/ action 
// switch statement goes inside 
//uses types to determine the cases - action.type 
export default ( state = DEFAULT_STATE, action )=> {
    switch(action.type){
        default: 
        return state; 
    }
}
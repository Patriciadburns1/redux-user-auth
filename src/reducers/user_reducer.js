import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
};

//make reducer itself 
// two parameters - state/ action 
// switch statement goes inside 
//uses types to determine the cases - action.type

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true };
        case types.SIGN_OUT:
            return { auth: false };   
        default:
            return state;
    }
}
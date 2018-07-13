// return action not what we are looking for 
// if we made it to this point in our code/action must be a function 

export default store => next => action => {
    if(typeof action !== 'function'){
        return next(action); 
    }
    return action (store.dispatch); 
}
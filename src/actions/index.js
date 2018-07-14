import types from './types'; 
import axios from 'axios'; 

const BASE_URL = 'http://api.reactprototypes.com'; 

export function accountsSignIn(){
    return { type: types.SIGN_IN }; 
}

export function signOut(){
    return { type: types.SIGN_OUT }; 
}

export function createAccount(userInfo){
    return async (dispatch) => {
        try{
            const resp= await axios.post(`${BASE_URL}/signup`, userInfo); 
            console.log('Sign Up Response', resp); 
            localStorage.setItem('token', resp.data.token); 
            dispatch({type: types.SIGN_UP}); 
        }
       catch(err){
           console.log("sign up error", err.message); 
       }
    }
    
}

//patricia@gmail.com
// patricia 

export function accountSignIn(userInfo){
    return async dispatch => {
        try {
            const resp= await axios.post(`${BASE_URL}/signin`, userInfo); 
            // console.log('sign in', resp.data.token); 
            dispatch ({ type :types.SIGN_IN}); 
            localStorage.setItem('token', resp.data.token)

        } catch (err){
            console.log ('error signing in', err.message); 
        }
    }
}

export function SignOut(){
    localStorage.removeItem('token');
    return {type: types.SIGN_OUT}; 
}

export function getMovieQuote(){
    return async dispatch =>{
        try {
            const axiosConfig ={
                headers: {
                    authorization: localStorage.getItem('token')
                }
            }
            const resp= await axios.get(BASE_URL, axiosConfig); 
            console.log("Get Quote response", resp); 
            dispatch({
                type: types.GET_MOVIE_QUOTE,
                quote: resp.data.message
            }); 
        }
        catch(err){
            console.log('get quote error signing in', err.message);  
        }
    }
}
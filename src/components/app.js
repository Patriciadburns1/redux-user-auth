import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Route} from 'react-router-dom'; 
import Home from './home'; 
import About from './about';
import SecretList from './secrets_list'; 
import MovieQuote from './movie_quote'; 
import Nav from './nav'; 
import auth from '../hoc/auth'; 
import SignUp from './sign_up'; 
import SignIn from './sign_in'; 




const App = () => (
    <div>
        <Nav/> 
        <div className="container">
         <Route exact path='/' component={Home}/> 
         <Route path='/about' component={About}/>
         <Route path='/not-secret-list' component={SecretList}/>
         <Route path='/secret-list' component={auth(SecretList)}/> 
         <Route path='/movie-quote' component={MovieQuote}/> 
         <Route path='/sign-up' component={SignUp}/> 
         <Route path='/sign-in' component={SignIn}/> 
        </div>
    </div>
);

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Route} from 'react-router-dom'; 
import Home from './home'; 
import About from './about';
import Secret from './secrets_list'; 
import MovieQuote from './movie_quote'; 
import Nav from './nav'; 

const App = () => (
    <div>
        <Nav/> 
        <div className="container">
         <Route exact path='/' component={Home}/> 
         <Route path='/about' component={About}/>
         <Route path='/secret-list' component={Secret}/> 
         <Route path='/movie-quote' component={MovieQuote}/> 
        </div>
    </div>
);

export default App;

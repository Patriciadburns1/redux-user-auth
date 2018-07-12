import React from 'react';
import auth from '../hoc/auth';

const MovieQuote = props => {
    return (
        <div>
            <h1 className="text-center">  Movie Quotes </h1>
            <h4> Frankly my dear I don't give a damn </h4>
        </div>

    )
}

// MovieQuote is being called in auth
export default auth(MovieQuote); 
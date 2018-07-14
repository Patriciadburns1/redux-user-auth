import React, {Component} from 'react';
import auth from '../hoc/auth';
import {connect} from 'react-redux'; 
import {getMovieQuote} from '../actions/'; 

class MovieQuote extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getMovieQuote(); 
    }

    render(){
        return (
            <div>
                <h1 className="text-center">  Movie Quotes </h1>
                <h4> {this.props.quote}</h4>
            </div>
        )
    }
}

// pull information from redux state - map state to props 
function mapStateToProps(state){
    return{
        quote: state.movie.quote
    }
}


// MovieQuote is being called in auth
//connect returns a function and we are calling that functioin
export default connect(mapStateToProps, {getMovieQuote: getMovieQuote})(auth(MovieQuote)); 
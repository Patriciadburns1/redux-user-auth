import React, { Component } from 'react';
import { connect } from 'react-redux'; 


export default (WrappedComponent) => {
    class Auth extends Component {
        componentDidMount(){
            if(!this.props.auth){
                this.props.history.push('/')
            }
        }
//gets called anytime props change or the state change 
// don't change state in here unless you want to be caught in endless loop/ must have an if statement to set state if needed
        componentDidUpdate(){
            if(!this.props.auth){
                this.props.history.push('/'); 
            }

        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }
    function mapStateToProps(state){
        return{
            auth: state.user.auth
        }
    }
    return connect(mapStateToProps)(Auth);
}
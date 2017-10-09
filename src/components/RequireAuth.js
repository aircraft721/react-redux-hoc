import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default function(ComposedComponent){
    class Authentication extends Component {
        render(){
            console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            authenticated: state.authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}
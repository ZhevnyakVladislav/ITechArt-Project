import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions/UserAuth';

import Component from '../components/SignUpForm/SignUpForm';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signUp
    }, dispatch);
}

class SignUpForm extends React.PureComponent {
    render() {
        return (!this.props.isUserAuth) ? (
            <Component signUp={this.props.signUp} /> 
        ) : (<Redirect to='/' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
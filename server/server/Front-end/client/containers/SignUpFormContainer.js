import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions/UserActions';

import Component from '../components/SignUpForm/SignUpForm';

function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
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
            <Component 
                signUp={this.props.signUp}
                errors={this.props.errors} /> 
        ) : (<Redirect to='/' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

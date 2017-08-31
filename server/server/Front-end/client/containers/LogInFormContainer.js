import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../actions/UserActions';
import { bindActionCreators } from 'redux';

import Component from '../components/LogInForm/LogInForm';

function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logIn
    }, dispatch);
}

class LogInForm extends React.PureComponent {
    render() {
        return (!this.props.isUserAuth) ? (
            <Component 
                logIn={this.props.logIn} 
                errors={this.props.errors} /> 
        ) : (<Redirect to='/' />);
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

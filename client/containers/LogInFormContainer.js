import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../actions/AuthActions';
import { bindActionCreators } from 'redux';

import Component from '../components/LogInForm/LogInForm';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth
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
            <Component logIn={this.props.logIn} />
        ) : (<Redirect to='/' />);
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

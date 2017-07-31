import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Component from '../components/LogInForm/LogInForm';

function mapStateToProps (state) {
    return {
        isAuth: state.user
    };
};

class LogInForm extends React.PureComponent {
    render() {
        return (this.props.isAuth) ? (
            <Component />
        ): (<Redirect to='/' />);
    }
};

export default connect(mapStateToProps)(LogInForm);

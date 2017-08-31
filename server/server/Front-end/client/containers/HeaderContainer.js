import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logOut } from '../actions/UserActions';

import Header from '../components/Header/Header';

function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        user: state.UserActions.user
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOut,
    }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
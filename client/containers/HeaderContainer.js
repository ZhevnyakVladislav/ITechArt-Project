import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logOut } from '../actions/UserAuth';
import { openDrawer } from '../actions/PageActions';

import Header from '../components/Header/Header';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOut,
        openDrawer
    }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
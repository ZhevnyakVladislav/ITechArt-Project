import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { closeDrawer } from '../actions/PageActions';
import { logOut } from '../actions/UserAuth';

import LeftDrawer from '../components/LeftDrawer/LeftDrawer';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
        isDrawerOpen: state.pageState.isDrawerOpen
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeDrawer,
        logOut
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftDrawer));
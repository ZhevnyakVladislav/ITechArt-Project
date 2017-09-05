import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createAdvert } from '../actions/AdvertActions';

import AddAdvertForm from '../components/AddAdvertForm/AddAdvertForm';

function mapStateToProps(state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        user: state.UserActions.user
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createAdvert
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAdvertForm));
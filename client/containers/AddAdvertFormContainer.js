import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import AddAdvertForm from '../components/AddAdvertForm/AddAdvertForm';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAdvertForm));
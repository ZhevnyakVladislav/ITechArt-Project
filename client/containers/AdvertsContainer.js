import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getFewAdverts } from '../actions/AdvertActions';


import Adverts from '../components/Adverts/Adverts';
    
function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
        adverts: state.AdvertActions.adverts,
        count: state.AdvertActions.count
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFewAdverts
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adverts);
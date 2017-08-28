import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getFewAdverts, updateAdver } from '../actions/AdvertActions';
import { addMessage } from '../actions/MessageAction';


import Adverts from '../components/Adverts/Adverts';
    
function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        adverts: state.AdvertActions.adverts,
        advertsCount: state.AdvertActions.count,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFewAdverts,
        updateAdver,
        addMessage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adverts);
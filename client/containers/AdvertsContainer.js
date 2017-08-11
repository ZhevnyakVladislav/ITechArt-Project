import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getFewAdverts } from '../actions/AdvertActions';
import { addMessage } from '../actions/MessageAction';


import Adverts from '../components/Adverts/Adverts';
    
function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
        adverts: state.AdvertActions.adverts,
        count: state.AdvertActions.count,
        userId: state.UserActions.user.id
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFewAdverts,
        addMessage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adverts);
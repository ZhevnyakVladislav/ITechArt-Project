import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getUserAdverts, removeAdvert } from '../actions/AdvertActions';
import { getMessagesById, addMessage } from '../actions/MessageAction';

import Component from '../components/UserPage/UserPage';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
        userAdverts: state.AdvertActions.userAdverts,   
        messages: state.MessageAction.messages
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserAdverts,
        removeAdvert,
        getMessagesById,
        addMessage
    }, dispatch);
}

class UserPage extends React.PureComponent {
    render() {
        return (this.props.isUserAuth) ? (
            <Component
                messages={this.props.messages}
                getMessagesById={this.props.getMessagesById}
                addMessage={this.props.addMessage}
                removeAdvert={this.props.removeAdvert}
                userAdverts={this.props.userAdverts}
                getUserAdverts={this.props.getUserAdverts} /> 
        ) : (<Redirect to='/login' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

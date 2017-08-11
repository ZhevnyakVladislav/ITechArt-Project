import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getUserAdverts, removeAdvert } from '../actions/AdvertActions';
import { getMessagesById, addMessage } from '../actions/MessageAction';
import { changeAvatar } from '../actions/UserActions';

import Component from '../components/UserPage/UserPage';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
        userAdverts: state.AdvertActions.userAdverts,   
        messages: state.MessageAction.messages,
        user: state.UserActions.user
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserAdverts,
        removeAdvert,
        getMessagesById,
        addMessage, 
        changeAvatar
    }, dispatch);
}

class UserPage extends React.PureComponent {
    render() {
        return (this.props.isUserAuth) ? (
            <Component
                user={this.props.user}
                messages={this.props.messages}
                getMessagesById={this.props.getMessagesById}
                addMessage={this.props.addMessage}
                removeAdvert={this.props.removeAdvert}
                userAdverts={this.props.userAdverts}
                getUserAdverts={this.props.getUserAdverts}
                changeAvatar={this.props.changeAvatar} /> 
        ) : (<Redirect to='/login' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

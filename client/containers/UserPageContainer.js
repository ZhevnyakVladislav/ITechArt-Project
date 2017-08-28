import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getAuthorsAdverts, getInterestedAdverts, removeAdvert } from '../actions/AdvertActions';
import { getMessagesById, addMessage } from '../actions/MessageAction';
import { changeAvatar } from '../actions/UserActions';
import { getUserPageData } from '../actions/UserPageAction';

import Component from '../components/UserPage/UserPage';

function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        interestedAdverts: state.AdvertActions.interestedAdverts,
        authorsAdverts: state.AdvertActions.authorsAdverts,
        messages: state.MessageAction.messages,
        user: state.UserActions.user
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserPageData,
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
                authorsAdverts={this.props.authorsAdverts}
                interestedAdverts={this.props.interestedAdverts}
                getUserPageData={this.props.getUserPageData}
                changeAvatar={this.props.changeAvatar} /> 
        ) : (<Redirect to='/login' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

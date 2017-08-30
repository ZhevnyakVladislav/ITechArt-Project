import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getAuthorsAdverts, getInterestedAdverts, removeAdvert } from '../actions/AdvertActions';
import { getMessagesById, createMessage } from '../actions/MessageAction';
import { updateUser } from '../actions/UserActions';

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
        getAuthorsAdverts,
        getInterestedAdverts,
        removeAdvert,
        getMessagesById,
        createMessage, 
        updateUser
    }, dispatch);
}

class UserPage extends React.PureComponent {
    render() {
        return (this.props.isUserAuth) ? (
            <Component
                user={this.props.user}
                messages={this.props.messages}
                getMessagesById={this.props.getMessagesById}
                createMessage={this.props.createMessage}
                removeAdvert={this.props.removeAdvert}
                authorsAdverts={this.props.authorsAdverts}
                interestedAdverts={this.props.interestedAdverts}
                getAuthorsAdverts={this.props.getAuthorsAdverts}
                getInterestedAdverts={this.props.getInterestedAdverts}
                updateUser={this.props.updateUser} /> 
        ) : (<Redirect to='/login' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

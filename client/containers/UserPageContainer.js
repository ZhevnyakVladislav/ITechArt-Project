import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getUserAdverts, removeAdvert } from '../actions/AdvertActions';

import Component from '../components/UserPage/UserPage';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth,
        userAdverts: state.AdvertActions.userAdverts
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserAdverts,
        removeAdvert
    }, dispatch);
}

class UserPage extends React.PureComponent {
    render() {
        return (this.props.isUserAuth) ? (
            <Component 
                removeAdvert={this.props.removeAdvert}
                userAdverts={this.props.userAdverts}
                getUserAdverts={this.props.getUserAdverts} /> 
        ) : (<Redirect to='/login' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

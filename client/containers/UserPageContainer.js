import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserPage from '../components/UserPage/UserPage';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth
    };
};

class UserPageContainer extends React.PureComponent {
    render() {
        return (this.props.isUserAuth) ? (
            <UserPage /> 
        ) : (<Redirect to='/login' />);
    };
};

export default connect(mapStateToProps)(UserPageContainer);

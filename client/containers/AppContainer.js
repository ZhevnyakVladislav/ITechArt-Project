import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../stylesheets/index.scss';

import Header from '../containers/HeaderContainer';
import LeftDrawer from '../containers/LeftDrawerContainer';
import Routes from '../routes/Routes';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth
    };
};

class App extends React.Component {
    render() {
        return(
            <div className='app-container'>
                <Header />
                <LeftDrawer />
                <Routes />
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps)(App));

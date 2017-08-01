import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../stylesheets/index.scss';

import Header from '../containers/HeaderContainer';
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
                <Header isUserAuth={this.props.isUserAuth}/>
                <Routes />
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps)(App));

import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getUser, logOut } from '../actions/UserActions';
import { getFromStorage } from '../helpers/storageHelper';
import '../stylesheets/index.scss';

import Header from '../containers/HeaderContainer';
import LeftDrawer from '../components/LeftDrawer/LeftDrawer';
import Routes from '../routes/Routes';

function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        user: state.UserActions.user,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOut,
        getUser
    }, dispatch);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        };
        this.handleChanheDrawerState = this.handleChanheDrawerState.bind(this);
    }

    handleChanheDrawerState() {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
        this.state.errors = this.refs.notificationSystem;
    }

    componentWillMount() {
        this.props.getUser();
    }

    render() {
        return(
            <div className='app-container'>
                <Header
                    openDrawer={this.handleChanheDrawerState}/>
                <LeftDrawer
                    user={this.props.user} 
                    isUserAuth={this.props.isUserAuth}
                    isDrawerOpen={this.state.isDrawerOpen}
                    closeDrawer={this.handleChanheDrawerState}
                    logOut={this.props.logOut}/>
                <Routes />
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

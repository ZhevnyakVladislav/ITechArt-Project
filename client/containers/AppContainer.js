import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../stylesheets/index.scss';

import Header from '../containers/HeaderContainer';
import LeftDrawer from '../components/LeftDrawer/LeftDrawer';
import Routes from '../routes/Routes';

function mapStateToProps (state) {
    return {
        isUserAuth: state.userState.isUserAuth
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        };
        this.handleChanheDrawerState = this.handleChanheDrawerState.bind(this);
    }

    handleChanheDrawerState() {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }

    render() {
        return(
            <div className='app-container'>
                <Header openDrawer={this.handleChanheDrawerState}/>
                <LeftDrawer 
                    isUserAuth={this.props.isUserAuth}
                    isDrawerOpen={this.state.isDrawerOpen}
                    closeDrawer={this.handleChanheDrawerState}/>
                <Routes />
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps)(App));

import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header/Header';
import Routes from '../routes/Routes';

import '../stylesheets/index.scss';

function mapStateToProps (state) {
    return {
        user: state.user
    };
};

class App extends React.Component {
    render() {
        return(
            <div className='app-container'>
                <Header />
                <Routes />
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps)(App));

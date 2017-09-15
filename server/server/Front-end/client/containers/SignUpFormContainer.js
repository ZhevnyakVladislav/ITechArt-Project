import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getCountries, getCities } from '../actions/AddressActions';
import { getLanguages } from '../actions/LanguageActions';
import { signUp } from '../actions/UserActions';

import Component from '../components/SignUpForm/SignUpForm';

function mapStateToProps (state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        countries: state.AddressActions.countries,
        cities: state.AddressActions.cities,
        languages: state.LanguageActions.languages
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signUp,
        getCountries,
        getCities,
        getLanguages
    }, dispatch);
}

class SignUpForm extends React.PureComponent {
    render() {
        return (!this.props.isUserAuth) ? (
            <Component 
                getCities={this.props.getCities}
                getCountries={this.props.getCountries}
                getLanguages={this.props.getLanguages}
                countries={this.props.countries}
                cities={this.props.cities}
                languages={this.props.languages}
                signUp={this.props.signUp}
                errors={this.props.errors} /> 
        ) : (<Redirect to='/' />);
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

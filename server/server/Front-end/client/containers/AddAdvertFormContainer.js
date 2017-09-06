import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createAdvert } from '../actions/AdvertActions';
import { getCountries, getRegions, getCities } from '../actions/AddressActions';

import AddAdvertForm from '../components/AddAdvertForm/AddAdvertForm';

function mapStateToProps(state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        user: state.UserActions.user,
        countries: state.AddressActions.countries,
        regions: state.AddressActions.regions,
        cities: state.AddressActions.cities,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createAdvert,
        getCountries,
        getRegions,
        getCities
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAdvertForm));
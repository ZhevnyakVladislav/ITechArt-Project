import addressApi from './api/AddressApi';
import actionType from '../constants/AddressActions';

export function getCountries() {
    return dispatch => addressApi.getCountries()
        .then(data => dispatch({
            type: actionType.GET_COUNTRIES_SUCCESSFULL,
            payload: data
        }));
}

export function getCities(countryId) {
    return dispatch => addressApi.getCities(countryId)
        .then(data => dispatch({
            type: actionType.GET_CITIES_SUCCESSFULL,
            payload: data
        }));
}
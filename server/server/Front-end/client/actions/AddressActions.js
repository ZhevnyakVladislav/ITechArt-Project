import addressApi from './api/AddressApi';
import actionType from '../constants/AddressActions';

export function getCountries() {
    return dispatch => addressApi.getCountries()
        .then(data => dispatch({
            type: actionType.GET_COUNTRIES_SUCCESSFULL,
            payload: data
        }));
}

export function getRegions(countryCode) {
    return dispatch => addressApi.getRegionsByCountry(countryCode)
        .then(data => dispatch({
            type: actionType.GET_REGIONS_SUCCESSFULL,
            payload: data
        }));
}

export function getCities(countryCode, region) {
    return dispatch => addressApi.getCitiesByRegion(countryCode, region)
        .then(data => dispatch({
            type: actionType.GET_CITIES_SUCCESSFULL,
            payload: data
        }));
}
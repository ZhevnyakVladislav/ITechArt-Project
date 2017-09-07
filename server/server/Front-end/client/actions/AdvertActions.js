import advertApi from './api/AdvertApi';
import actionType from '../constants/AdvertActions';

export function getFewAdverts(type, page) {
    return dispatch => advertApi.getFewAdverts(type, page)
        .then(data => dispatch({ 
            type: actionType.GET_FEW_ADVERTS_SUCCESSFUL, 
            payload: data
        }));
}

export function getAuthorsAdverts() {
    return dispatch => advertApi.getAuthorsAdverts()
        .then(data => dispatch({
            type: actionType.GET_AUTHORS_ADVERTS_SUCCESSFUL,
            payload: data
        }));
} 

export function getInterestedAdverts() {
    return dispatch => advertApi.getInterestedAdverts()
        .then(data => dispatch({
            type: actionType.GET_INTERESTED_ADVERTS_SUCCESSFUL,
            payload: data
        }));
} 

export function createAdvert(advert) {
    return dispatch => advertApi.createAdverd(advert)
        .then(data => dispatch({ 
            type: actionType.ADD_ADVERT_SUCCESSFUL, 
        }));
}

export function removeAdvert(advertId) {
    return dispatch => advertApi.removeAdvert(advertId)
        .then(data => dispatch({ 
            type: actionType.REMOVE_ADVERT_SUCCESSFUL,
            payload: advertId
        }));
}


export function updateAdver(advert) {
    return dispatch => advertApi.updateAdver(advert)
        .then(data => dispatch({
            type: actionType.CHANGE_ADVERT_SUCCESSFUL,
            payload: { fewAdverts: data.fewFilteredAdverts, count: data.count }
        }));
}

export function getAdvert(id) {
    return async dispatch => {
        let advert = null;
        await advertApi.getAdvert(id).then(data => advert = data);
        const address = `${advert.address.street}+${advert.address.city}+${advert.address.country}`;
        advert.address.coordinate = await getCoordinate(address);
        return dispatch({
            type: actionType.GET_ADVERT_SUCCESSFUL,
            payload: advert
        });
    }
}

const getCoordinate = (address) => {
    let coordinate;
    return advertApi.getCoordinate(address).then(data => data.data.results[0].geometry.location);
}

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
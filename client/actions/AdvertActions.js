import advertApi from './api/AdvertApi';
import actionType from '../constants/AdvertActions';

export function getFewAdverts(page, type, count = 3) {
    return dispatch => {
        advertApi.getFewAdverts(page, type, count)
            .then(data => {
                dispatch({ 
                    type: actionType.GET_FEW_ADVERTS_SUCCESSFUL, 
                    payload: { fewAdverts: data.fewFilteredAdverts, count: data.count } 
                });
            });
    };
}

export function addAdvert(advert) {
    return dispatch => {
        advertApi.addAdvert(advert)
            .then((data) => dispatch({ 
                type: actionType.ADD_ADVERT_SUCCESSFUL, 
            }));
    };
}

export function removeAdvert(advert) {
    return dispatch => {
        advertApi.removeAdvert(advert)
            .then((data) => dispatch({ 
                type: actionType.REMOVE_ADVERT_SUCCESSFUL, 
                payload: { userAdverts: data }
            }));
    };
}

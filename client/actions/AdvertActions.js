import advertApi from './api/AdvertApi';
import actionType from '../constants/AdvertActions';

export function getFewAdwerts(page, type, count = 3) {
    return dispatch => {
        advertApi.getAllAdverts()
            .then(data => {
                const allAdverts = JSON.parse(data).filter(advert => advert.type === type);
                const fewAdverts = allAdverts.slice((page - 1) * count, (page - 1) * count + count);
                dispatch({ 
                    type: actionType.GET_ADVERTS_SUCCESSFUL, 
                    payload: { fewAdverts: fewAdverts, count: allAdverts.length } 
                });
            });
    };
}

export function addAdvert(advert) {
    return dispatch => {
        advertApi.addAdvert()
            .then((data) => dispatch({ type: actionType.ADD_ADVERT_SUCCESSFUL }));
    };
}

export function removeAdvert(advert) {
    return dispatch => {
        advertApi.removeAdvert()
            .then((data) => dispatch({ type: actionType.REMOVE_ADVERT_SUCCESSFUL }));
    };
}

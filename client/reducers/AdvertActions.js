import actionType from '../constants/AdvertActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    adverts: [],
};

function getAllAdverts(state, action) {
    return {
        ...state,
        adverts: action.payload.fewAdverts,
        count: action.payload.count
    };
}

function addAdvert(state, action) {
    return {
        ...state
    };
}

function removeAdvert(state, action) {
    return {
        ...state
    };
}

export default createReducer(initialState, {
    [actionType.GET_ADVERTS_SUCCESSFUL]: getAllAdverts,
    [actionType.ADD_ADVERT_SUCCESSFUL]: addAdvert,
    [actionType.REMOVE_ADVERT_SUCCESSFUL]: removeAdvert
});

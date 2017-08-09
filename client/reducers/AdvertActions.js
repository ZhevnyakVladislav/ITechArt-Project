import actionType from '../constants/AdvertActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
};

function getFewAdverts(state, action) {
    return {
        ...state,
        adverts: action.payload.fewAdverts,
        count: action.payload.count
    };
}

function getUserAdverts(state, action) {
    return {
        ...state,
        userAdverts: action.payload.userAdverts
    };
}

function addAdvert(state, action) {
    return {
        ...state
    };
}

function removeAdvert(state, action) {
    return {
        ...state,
        userAdverts: action.payload.userAdverts
    };
}

export default createReducer(initialState, {
    [actionType.GET_FEW_ADVERTS_SUCCESSFUL]: getFewAdverts,
    [actionType.ADD_ADVERT_SUCCESSFUL]: addAdvert,
    [actionType.REMOVE_ADVERT_SUCCESSFUL]: removeAdvert,
    [actionType.GET_USER_ADVERTS_SUCCESSFUL]:getUserAdverts
});

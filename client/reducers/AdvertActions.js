import actionType from '../constants/AdvertActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    adverts: [],
    authorsAdverts: [],
    interestedAdverts: [], 
};

function getFewAdverts(state, action) {
    return {
        ...state,
        adverts: action.payload.fewAdverts,
        count: action.payload.count
    };
}

function getAuthorsAdverts(state, action) {
    return {
        ...state,
        authorsAdverts: action.payload.authorsAdverts
    };
}

function getInterestedAdverts(state, action) {
    return {
        ...state,
        interestedAdverts: action.payload.interestedAdverts
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

function changeAdvertActivity(state, action) {
    return {
        ...state,
        adverts: action.payload.fewAdverts,
        count: action.payload.count
    };
}

export default createReducer(initialState, {
    [actionType.GET_FEW_ADVERTS_SUCCESSFUL]: getFewAdverts,
    [actionType.GET_AUTHORS_ADVERTS_SUCCESSFUL]: getAuthorsAdverts,
    [actionType.GET_INTERESTED_ADVERTS_SUCCESSFUL]: getInterestedAdverts,
    [actionType.ADD_ADVERT_SUCCESSFUL]: addAdvert,
    [actionType.REMOVE_ADVERT_SUCCESSFUL]: removeAdvert,
    [actionType.CHANGE_ADVERT_SUCCESSFUL]: changeAdvertActivity
});

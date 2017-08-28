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
        adverts: action.payload.data.adverts,
        count: action.payload.data.count
    };
}

function getAuthorsAdverts(state, action) {
    return {
        ...state,
        authorsAdverts: action.payload.data
    };
}

function getInterestedAdverts(state, action) {
    return {
        ...state,
        interestedAdverts: action.payload.data
    };
}

function createAdvert(state, action) {
    return {
        ...state
    };
}

function removeAdvert(state, action) {
    return {
        ...state,
    };
}


function updateAdvert(state, action) {
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
    [actionType.ADD_ADVERT_SUCCESSFUL]: createAdvert,
    [actionType.REMOVE_ADVERT_SUCCESSFUL]: removeAdvert,
    [actionType.CHANGE_ADVERT_SUCCESSFUL]: updateAdvert
});
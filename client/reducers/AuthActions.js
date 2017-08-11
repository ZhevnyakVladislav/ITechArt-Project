import actionType from '../constants/AuthActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    isUserAuth: false
};

function userAuth(state, action) {
    return {
        ...state,
        isUserAuth: true
    };
}

function logIn(state, action) {
    return {
        ...state,
        isUserAuth: true
    };
}

function logOut(state, action) {
    return {
        ...state,
        isUserAuth: false,
    };
}

function signUp(state, action) {
    return {
        ...state,
        isUserAuth: true
    };
}

export default createReducer(initialState, {
    [actionType.USER_AUTH]: userAuth,
    [actionType.LOG_IN_SUCCESSFUL]: logIn,
    [actionType.LOG_OUT]: logOut,
    [actionType.SIGN_UP_SUCCESSFUL]: signUp
});

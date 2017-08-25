import actionType from '../constants/AuthActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    isUserAuth: false,
    user: {},
    errors: null
};

function userAuthSuccessful(state, action) {
    return {
        ...state,
        isUserAuth: true,
        user: action.payload.data
    };
}

function userAuthFailure(state, action) {
    return {
        ...state,
        isUserAuth: false,
    };
}

function logInSuccessful(state, action) {
    return {
        ...state,
        isUserAuth: true,
        user: action.payload.data
    };
}

function logInFailure(state, action) {
    return {
        ...state,
        isUserAuth: false,
        errors: action.payload
    };
}

function signUpSuccessful(state, action) {
    return {
        ...state,
        isUserAuth: true,
        user: action.payload.data
    };
}

function signUpFailure(state, action) {
    return {
        ...state,
        isUserAuth: false,
        errors: action.payload
    };
}

function logOut(state, action) {
    return {
        ...state,
        isUserAuth: false,
    };
}



export default createReducer(initialState, {
    [actionType.USER_AUTH_SUCCESSFUL]: userAuthSuccessful,
    [actionType.USER_AUTH_FAILURE]: userAuthFailure,
    [actionType.LOG_IN_SUCCESSFUL]: logInSuccessful,
    [actionType.LOG_IN_FAILURE]: logInFailure,
    [actionType.SIGN_UP_SUCCESSFUL]: signUpSuccessful,
    [actionType.SIGN_UP_FAILURE]: signUpFailure,
    [actionType.LOG_OUT]: logOut,
});

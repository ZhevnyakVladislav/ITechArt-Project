import actionType from '../constants/AuthActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    isUserAuth: false,
    user: {},
    errors: null,
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
        errors: action.payload
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
        errors: action.payload.data
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
        errors: action.payload.data
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
    [actionType.LOG_IN_SUCCESSFUL]: logInFailure,
    [actionType.LOG_IN_FAILURE]: logInSuccessful,
    [actionType.SIGN_UP_SUCCESSFUL]: signUpSuccessful,
    [actionType.SIGN_UP_FAILURE]: signUpFailure,
    [actionType.LOG_OUT]: logOut,
});

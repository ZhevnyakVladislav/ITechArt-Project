import actionType from '../constants/UserActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    isUserAuth: true,
    user: {
        avatar: null,
        languages: [],
        address: {
            city: {
                country: {}
            }
        }
    },   
    errors: {}
};

function getUserSuccessful(state, action) {
    return {
        ...state,
        isUserAuth: true,
        user: action.payload.data
    };
}

function getUserFailure(state, action) {
    return {
        ...state,
        isUserAuth:false,
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
        errors: { message: action.payload }
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
        errors: { message: action.payload }
    };
}

function logOut(state, action) {
    return {
        ...state,
        isUserAuth: false,
    };
}

function changeAvatarSuccessful(state, action) {
    return {
        ...state,
    };
} 

function changeAvatarFailure(state, action) {
    return {
        ...state,
    };
} 


export default createReducer(initialState, {
    [actionType.GET_USER_SUCCESSFUL]: getUserSuccessful,
    [actionType.GET_USER_FAILURE]: getUserFailure,
    [actionType.LOG_IN_SUCCESSFUL]: logInSuccessful,
    [actionType.LOG_IN_FAILURE]: logInFailure,
    [actionType.SIGN_UP_SUCCESSFUL]: signUpSuccessful,
    [actionType.SIGN_UP_FAILURE]: signUpFailure,
    [actionType.LOG_OUT]: logOut,
    [actionType.СHANGE_AVATAR_SUCCESSFUL]: changeAvatarSuccessful,
    [actionType.СHANGE_AVATAR_FAILURE]: changeAvatarFailure
});
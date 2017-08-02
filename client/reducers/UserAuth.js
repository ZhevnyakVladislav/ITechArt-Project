import user from '../constants/UserAuth';

const initialState = {
    isUserAuth: false
};

export function userState(state = initialState, action) {
    switch (action.type) {
    case user.USER_AUTH: 
        return {
            ...state,
            isUserAuth: true
        };
    case user.LOG_IN_SUCCESSFUL: 
        return {
            ...state,
            isUserAuth: true
        };
    case user.LOG_OUT: 
        return {
            ...state,
            isUserAuth: false,
        };
    case user.SIGN_UP_SUCCESSFUL: {
        return {
            ...state,
            isUserAuth: true
        };
    }
    default:
        return state;
    }
};

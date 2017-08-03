import actionType from '../constants/UserAuth';

const initialState = {
    isUserAuth: false
};

export function userState(state = initialState, action) {
    switch (action.type) {
    case actionType.USER_AUTH: 
        return {
            ...state,
            isUserAuth: true
        };
    case actionType.LOG_IN_SUCCESSFUL: 
        return {
            ...state,
            isUserAuth: true
        };
    case actionType.LOG_OUT: 
        return {
            ...state,
            isUserAuth: false,
        };
    case actionType.SIGN_UP_SUCCESSFUL: {
        return {
            ...state,
            isUserAuth: true
        };
    }
    default:
        return state;
    }
};

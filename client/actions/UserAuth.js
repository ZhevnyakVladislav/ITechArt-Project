import actionType from '../constants/UserAuth';

export function logIn(user) {
    localStorage.setItem('user', user);
    return {
        type: actionType.LOG_IN_SUCCESSFUL
    };
}

export function logOut() {
    localStorage.removeItem('user');
    return {
        type: actionType.LOG_OUT
    };
}

export function signUp(user) {
    localStorage.setItem('user', user);
    return {
        type: actionType.SIGN_UP_SUCCESSFUL
    };
}

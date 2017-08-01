import user from '../constants/UserAuth';

export function logIn(user) {
    localStorage.setItem('user', user);
    return {
        type: user.LOG_IN_SUCCESSFUL,
    };
}

export function logOut() {
    localStorage.removeItem('user');
    return {
        type: user.LOG_OUT
    };
}

export function signUp(user) {
    localStorage.setItem('user', user);
    return {
        type: user.SIGN_UP_SUCCESSFUL
    };
}

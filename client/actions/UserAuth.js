import user from '../constants/UserAuth';

export function logIn(user) {
    localStorage.setItem('user', user);
    return {
        type: user.LOG_IN_SUCCESFUL,
    };
}

export function logOut() {
    localStorage.removeItem('user');
    return {
        type: user.LOG_OUT
    };
}

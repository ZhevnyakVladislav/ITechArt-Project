import actionType from '../constants/UserAuth';
import userApi from './api/userApi';

export function logIn(user) {
    return dispatch => {
        userApi.logIn(user)
            .then(()=> {
                dispatch({ type: actionType.LOG_IN_SUCCESSFUL});
            });
    };
}

export function logOut() {
    return dispatch => {
        userApi.logOut()
            .then(()=> {
                dispatch({ type: actionType.LOG_OUT});
            });
    };
}

export function signUp(user) {
    return dispatch => {
        userApi.signUp(user)
            .then(()=> {
                dispatch({ type: actionType.SIGN_UP_SUCCESSFUL});
            });
    };
}

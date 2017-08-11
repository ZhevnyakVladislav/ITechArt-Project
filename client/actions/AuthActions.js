import actionType from '../constants/AuthActions';
import authApi from './api/AuthApi';
import { saveToStorage } from '../helpers/storageHelper';

export function logIn(user) {
    return dispatch => {
        authApi.logIn(user)
            .then(data => {
                saveToStorage('user', JSON.stringify(data));
                dispatch({ type: actionType.LOG_IN_SUCCESSFUL});
            }).catch(data => {
                console.log(data);
            });
    };
}

export function logOut() {
    return dispatch => {
        authApi.logOut()
            .then(()=> {
                dispatch({ type: actionType.LOG_OUT});
            }).catch(data => 
                console.log(data)
            );
    };
}

export function signUp(user) {
    return dispatch => {
        authApi.signUp(user)
            .then(data => {
                saveToStorage('user', JSON.stringify(data));
                dispatch({ type: actionType.SIGN_UP_SUCCESSFUL});
            }).catch(data =>
                console.log(data)
            );
    };
}

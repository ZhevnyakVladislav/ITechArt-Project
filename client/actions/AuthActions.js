import actionType from '../constants/AuthActions';
import userApi from './api/AuthApi';
import { saveToStorage } from '../helpers/storageHelper';

export function logIn(user) {
    return dispatch => {
        userApi.logIn(user)
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
        userApi.logOut()
            .then(()=> {
                dispatch({ type: actionType.LOG_OUT});
            }).catch(data => 
                console.log(data)
            );
    };
}

export function signUp(user) {
    return dispatch => {
        userApi.signUp(user)
            .then(data => {
                saveToStorage('user', JSON.stringify(data));
                dispatch({ type: actionType.SIGN_UP_SUCCESSFUL});
            }).catch(data =>
                console.log(data)
            );
    };
}

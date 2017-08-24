import actionType from '../constants/AuthActions';
import authApi from './api/AuthApi';
import { saveToStorage } from '../helpers/storageHelper';

export function logIn(user) {
    return dispatch => authApi.logIn(user)
        .then(data => dispatch({
            type: actionType.LOG_IN_SUCCESSFUL,
            payload: data
        }))
        .catch((data) => 
            console.log(data, 'login')
        );
}

export function logOut() {
    return dispatch => authApi.logOut()
        .then(() => dispatch({ 
            type: actionType.LOG_OUT 
        }));
}

export function signUp(user) {
    return dispatch => authApi.signUp(user)
        .then(data =>  dispatch({ 
            type: actionType.SIGN_UP_SUCCESSFUL 
        }))
        .catch(data => dispatch({ 
            type: actionType.SIGN_UP_SUCCESSFUL 
        }));
}

export function checkUserAuth() {
    return dispatch => authApi.chengeUserAuth()
        .then(data => dispatch({
            type: actionType.USER_AUTH_SUCCESSFUL,
            payload: data
        }))
        .catch(data => dispatch({
            type: actionType.USER_AUTH_FAILURE,
        }));
}

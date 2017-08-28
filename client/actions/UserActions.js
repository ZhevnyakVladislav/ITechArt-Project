import userApi from './api/UserApi';
import actionType from '../constants/UserActions';

export function getUser() {
    return dispatch => userApi.getUser()
        .then(data => dispatch({ 
            type: actionType.GET_USER_SUCCESSFUL,
            payload: data
        }))
        .catch(data => dispatch({
            type: actionType.GET_USER_FAILURE,
        }));
}

export function logIn(user) {
    return dispatch => userApi.logIn(user)
        .then(data => dispatch({
            type: actionType.LOG_IN_SUCCESSFUL,
            payload: data
        }))
        .catch((data) =>  dispatch({
            type: actionType.LOG_IN_FAILURE,
            payload: data.response.data
        }));
            
}

export function logOut() {
    return dispatch => userApi.logOut()
        .then(() => dispatch({ 
            type: actionType.LOG_OUT 
        }));
}

export function signUp(user) {
    return dispatch => userApi.signUp(user)
        .then(data =>  dispatch({ 
            type: actionType.SIGN_UP_SUCCESSFUL,
            payload: data
        }))
        .catch(data => dispatch({ 
            type: actionType.SIGN_UP_FAILURE,
            payload: data.response.data 
        }));
}

export function changeAvatar(user) {
    return dispatch => userApi.changeAvatar(user)
        .then(data => dispatch({
            type: actionType.СHANGE_AVATAR_SUCCESSFUL,
            payload: { user: data }
        }))
        .catch(data => console.log(data));
}
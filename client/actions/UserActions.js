import userApi from './api/UserApi';
import actionType from '../constants/UserActions';

export function getUserById(id) {
    return dispatch => {
        userApi.getUserById(id)
            .then(data => dispatch({ 
                type: actionType.GET_USER_SUCCESSFUL,
                payload: { user: data }
            }))
            .catch(data => console.log(data));
    };
}

export function changeAvatar(userId, address) {
    return dispatch => {
        userApi.changeAvatar(userId, address)
            .then(data => dispatch({
                type: actionType.СHANGE_AVATAR_SUCCESSFUL,
                payload: { user: data }
            }))
            .catch( data => console.log(data));
    };
}

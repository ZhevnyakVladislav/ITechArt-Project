import userApi from './api/UserApi';
import actionType from '../constants/UserActions';

export function getUserById(id) {
    return dispatch => {
        userApi.getUserById(id)
            .then(data => {
                dispatch({ 
                    type: actionType.GET_USER_SUCCESSFUL,
                    payload: {user: data}
                });
            })
            .catch(data => console.log(data));
    };
}

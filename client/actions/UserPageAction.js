import advertApi from './api/AdvertApi';
import userApi from './api/UserApi';
import userActionType from '../constants/UserActions';
import advertActionType from '../constants/AdvertActions';
import { getFromStorage } from '../helpers/storageHelper';

export function getUserPageData() {
    return async (dispatch, getState) => {
        const currentState = getState();
        if (currentState.user) {
            user = currentState.user;
        } else {
            var user = await userApi.getUserById(JSON.parse(getFromStorage('user')).id);
        }
        dispatch({ 
            type: userActionType.GET_USER_SUCCESSFUL,
            payload: { user: user}
        });
        const authorsAdverts = await advertApi.getAuthorsAdverts(user.id);
        dispatch({
            type: advertActionType.GET_AUTHORS_ADVERTS_SUCCESSFUL, 
            payload: { authorsAdverts: authorsAdverts }
        });
        const interestedAdverts = await advertApi.getInterestedAdverts(user.id);
        dispatch({
            type: advertActionType.GET_INTERESTED_ADVERTS_SUCCESSFUL, 
            payload: { interestedAdverts: interestedAdverts } 
        });
    };
}

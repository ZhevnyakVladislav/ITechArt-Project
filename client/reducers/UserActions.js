import actionType from '../constants/UserActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    user: {
        languages: []
    }
};

function getUserById(state, action) {
    return {
        ...state,
        user: action.payload.user
    };
}

function changeAvatar(state, action) {
    return {
        ...state,
        user: action.payload.user
    };
} 

export default createReducer(initialState, {
    [actionType.GET_USER_SUCCESSFUL]: getUserById,
    [actionType.СHANGE_AVATAR_SUCCESSFUL]: changeAvatar
});

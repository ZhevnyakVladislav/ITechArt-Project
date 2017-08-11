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

export default createReducer(initialState, {
    [actionType.GET_USER_SUCCESSFUL]: getUserById
});

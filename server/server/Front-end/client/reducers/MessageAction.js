import actionType from '../constants/MessageAction';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    messages: []
};

function getMessagesById(state, action) {
    return {
        ...state,
        messages: action.payload.data
    };
}

function createMessage(state, action) {
    return {
        ...state,
    };
}

function updateMessages(state, action) {
    return {
        ...state,
        messages: action.payload
    };
}

export default createReducer(initialState, {
    [actionType.GET_MESSAGES_SUCCESSFUL]: getMessagesById,
    [actionType.ADD_MESSAGE_SUCCESSFUL]: createMessage,
    [actionType.UPDATE_MESSAGES_SUCCESSFULL]: updateMessages
});

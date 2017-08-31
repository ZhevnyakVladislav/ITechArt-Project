import actionType from '../constants/MessageAction';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    messages: []
};

function getMessagesById(state, action) {
    const oldMessages = state.messages.filter(message => {
        return message && message.advertId != (action.payload.data[0] && action.payload.data[0].advertId);
    });
    return {
        ...state,
        messages: [...oldMessages   , ...action.payload.data]
    };
}

function createMessage(state, action) {
    return {
        ...state,
    };
}

export default createReducer(initialState, {
    [actionType.GET_MESSAGES_SUCCESSFUL]: getMessagesById,
    [actionType.ADD_MESSAGE_SUCCESSFUL]: createMessage,
});

import actionType from '../constants/MessageAction';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    messages: []
};

function getMessagesById(state, action) {
    const oldMessages = state.messages.filter(message => {
        return message && message.advertId != (action.payload.messages[0] && action.payload.messages[0].advertId);
    }
    );
    return {
        ...state,
        messages: [...oldMessages   , ...action.payload.messages]
    };
}

function addMessage(state, action) {
    return {
        ...state,
        messages: action.payload.messages,
    };
}

export default createReducer(initialState, {
    [actionType.GET_MESSAGE_SUCCESSFUL]: getMessagesById,
    [actionType.ADD_MESSAGE_SUCCESSFUL]: addMessage,
});

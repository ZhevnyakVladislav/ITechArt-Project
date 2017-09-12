import messageApi from './api/MessageApi';
import actionType from '../constants/MessageAction';

export function getMessagesById(id) {
    return dispatch => messageApi.getMessages(id)
        .then(data => dispatch({ 
            type: actionType.GET_MESSAGES_SUCCESSFUL, 
            payload: data
        }));
}

export function createMessage(message) {
    return dispatch => messageApi.createMessage(message)
        .then(data => dispatch({ 
            type: actionType.ADD_MESSAGE_SUCCESSFUL, 
        }));
}

export function updateMessages(messages) {
    return dispatch => dispatch({
        type: actionType.UPDATE_MESSAGES_SUCCESSFULL,
        payload: messages
    });
}
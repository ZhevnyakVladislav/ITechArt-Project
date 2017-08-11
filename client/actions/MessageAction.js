import messageApi from './api/MessageApi';
import actionType from '../constants/MessageAction';

export function getMessagesById(id) {
    return dispatch =>  {
        messageApi.getMessages(id)
            .then(data => {
                dispatch({ 
                    type: actionType.GET_MESSAGE_SUCCESSFUL, 
                    payload: { messages: data } 
                });
            });
    };
   
}

export function addMessage(message) {
    return dispatch => {
        messageApi.addMessage(message)
            .then((data) => dispatch({ 
                type: actionType.ADD_MESSAGE_SUCCESSFUL, 
                payload: { messages: data }
            }));
    };
}
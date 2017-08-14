import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getMessages = (id) => AsyncWrapper(() => {
    const messages = JSON.parse(getFromStorage('messages'));
    const filteredMessages = messages.filter(message => message.advertId == id);
    return filteredMessages;
});

const addMessage = (message) => AsyncWrapper(() => {
    const messages = JSON.parse(getFromStorage('messages'));
    messages.sort((a,b) => a.id - b.id);
    if(messages.length > 0) {
        message.id = messages[messages.length-1].id + 1;
    } else {
        message.id = 1;
    }
    messages.push(message);
    saveToStorage('messages', JSON.stringify(messages));
    return messages;   
});

export default {
    getMessages,
    addMessage
};

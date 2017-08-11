import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getMessages = (id) => AsyncWrapper(() => {
    const messages = JSON.parse(getFromStorage('messages'));
    const filteredMessages = messages.filter(message => message.advertId == id);
    return filteredMessages;
});

const addMessage = (message) => AsyncWrapper(() => {
    const messages = JSON.parse(getFromStorage('messages'));
    messages.push(message);
    saveToStorage('messages', JSON.stringify(messages));
    return messages;   
});

export default {
    getMessages,
    addMessage
};

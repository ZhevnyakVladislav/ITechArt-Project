import axios from 'axios';

const getMessages = (advertId) => axios.get('/api/message?advertId=' + advertId);

const createMessage = (message) => axios.post('/api/message', message); 

export default {
    getMessages,
    createMessage
};

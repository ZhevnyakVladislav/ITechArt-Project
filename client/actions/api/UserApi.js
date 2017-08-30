import axios from 'axios';

const getUser = () => axios.get('/api/User');

const logIn = (currUser) => axios.post('/api/account/login', currUser);

const logOut = () => axios.post('/api/account/logout');

const signUp = (currUser) => axios.post('/api/account/register', currUser);

const updateUser = (userId, image) => axios.put('/api/user/' + userId, image, {
    headers: { 'content-type': 'multipart/form-data' } 
});

export default {
    getUser,
    logIn,
    logOut,
    signUp,
    updateUser,
};

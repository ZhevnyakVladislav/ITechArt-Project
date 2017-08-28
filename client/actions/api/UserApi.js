import axios from 'axios';

const getUser = () => axios.get('/api/User');

const logIn = (currUser) => axios.post('/api/account/login', currUser);

const logOut = () => axios.post('/api/account/logout');

const signUp = (currUser) => axios.post('/api/account/register', currUser);

const changeAvatar = (user) => axios.put('/api/user/' + user.id);

export default {
    getUser,
    logIn,
    logOut,
    signUp,
    changeAvatar,
};

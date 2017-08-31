import axios from 'axios';

const getUser = () => axios.get('/api/User');

const logIn = (currUser) => axios.post('/api/account/login', currUser);

const logOut = () => axios.post('/api/account/logout');

const signUp = (currUser) => axios.post('/api/account/register', currUser);

const updateUser = (userId, image) => {
    var formData = new FormData();
    formData.append('image', image[0]);
    return axios.put('/api/user/' + userId, formData);
};

export default {
    getUser,
    logIn,
    logOut,
    signUp,
    updateUser,
};

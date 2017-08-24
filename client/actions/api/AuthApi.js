import axios from 'axios';
import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const logIn = (currUser) => axios.post('/api/account/login', currUser);

const logOut = () => axios.post('/api/account/logout');

const signUp = (currUser) => axios.post('/api/account/register', currUser);

const chengeUserAuth = () => axios.get('/api/account/checkauth');

export default {
    logIn,
    logOut,
    signUp,
    chengeUserAuth
};


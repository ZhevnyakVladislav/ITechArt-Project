import axios from 'axios';
import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const logIn = (currUser) => AsyncWrapper(() => {
    return axios.post('http://localhost:34461/api/account/login', currUser); 
});

function logOut() {
    return axios.post('http://localhost:34461/api/account/logout'); ;
}

const signUp = (currUser) => AsyncWrapper(() => {
    return axios.post('http://localhost:34461/api/account/register', currUser); ;
});

export default {
    logIn,
    logOut,
    signUp
};


import axios from 'axios';
import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const logIn = (currUser) => AsyncWrapper(() => {
    return axios.post('http://localhost:34461/api/account/login', currUser); 
});

function logOut() {
    return AsyncWrapper(() => removeFromStorage(('user')));
}

const signUp = (currUser) => AsyncWrapper(() => {
    const users = JSON.parse(getFromStorage('users'));
    let user = users.find(user => user.email == currUser.email);
    if(!user) {
        currUser.id = users.length + 1;
        currUser.role = 'user';
        currUser.photo = 'https://beautycode.kz/sites/all/themes/savita/images/unknown-avatar.png';
        users.push(currUser);
        saveToStorage('users', JSON.stringify(users));
        return user = { id: currUser.id , role: currUser.role};
    } else {
        return Promise.reject('wrong email');
    }
});

export default {
    logIn,
    logOut,
    signUp
};


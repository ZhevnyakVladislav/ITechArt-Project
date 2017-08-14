import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const logIn = (currUser) => AsyncWrapper(() => {
    const users = JSON.parse(getFromStorage('users'));
    let user = users.find(user => user.email == currUser.email);
    console.log(currUser);
    if (user && user.password == currUser.password) {
        return user = { id: user.id , role: user.role};
    } else {
        return Promise.reject('wrong login or password');
    } 
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
        currUser.photo = 'http://via.placeholder.com/50x50';
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


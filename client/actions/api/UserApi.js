import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

function logIn(user) {
    return AsyncWrapper(() => saveToStorage('user', JSON.stringify(user)));
}

function logOut() {
    return AsyncWrapper(() => removeFromStorage(('user')));
}

function signUp(user) {
    return AsyncWrapper(() => saveToStorage('user', JSON.stringify(user)));
}
export default {
    logIn,
    logOut,
    signUp
};


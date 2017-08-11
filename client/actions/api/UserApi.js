import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getUserById = (id) => AsyncWrapper(() => {
    const users = JSON.parse(getFromStorage('users'));
    const user = users.find(user => user.id == id);
    if (user) { 
        return getClientUser(user);
    } else {
        return Promise.reject('Can\'t read user');
    }
});

const changeAvatar = (userId, address) => AsyncWrapper(() => {
    const users = JSON.parse(getFromStorage('users'));
    let user = users.find(user => user.id == userId);
    if (user) {
        let index = users.indexOf(user);
        user.photo = address;
        users[index] = user;
        saveToStorage('users', JSON.stringify(users));
        return getClientUser(user);
    } else {
        return Promise.reject('Can\'t read user');
    }
    
});

const getClientUser = (user) =>  ({
    id: user.id,
    firstName: user.firstName,
    secondName: user.secondName,
    photo: user.photo,
    email: user.email,
    pseudonym: user.pseudonym,
    country: user.country,
    city: user.city,
    languages: user.languages,
    role: user.role
});


export default {
    getUserById,
    changeAvatar
};

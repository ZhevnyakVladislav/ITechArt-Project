import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getUserById = (id) => AsyncWrapper(() => {
    const users = JSON.parse(getFromStorage('users'));
    const user = users.find(user => user.id == id);
    if (user) { 
        return {
            id: user.id,
            firstName: user.firstName,
            secondName: user.secondName,
            photo: user.photo,
            email: user.email,
            pseudonym: user.pseudonym,
            country: user.country,
            city: user.city,
            languages: user.languages,
        };
    } else {
        return Promise.reject('Can\'t read ser');
    }
});

export default {
    getUserById
};

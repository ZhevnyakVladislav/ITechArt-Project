import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getAuthorsAdverts = (userId) => AsyncWrapper(() => {
    const allAdverts = JSON.parse(getFromStorage('adverts'));
    const userAdverts = allAdverts.filter(advert => advert.author == userId);
    return userAdverts;
});

const getInterestedAdverts = (userId) => AsyncWrapper(() => {
    const allAdverts = JSON.parse(getFromStorage('adverts'));
    const userAdverts = allAdverts.filter(advert => advert.interestedUser == userId);
    return userAdverts;
});

const getFewAdverts = (page, type, count) => AsyncWrapper(() => {
    const allAdverts = JSON.parse(getFromStorage('adverts'));
    const filteredAdverts = allAdverts.filter(advert => advert.type === type);
    const fewFilteredAdverts =  filteredAdverts.slice((page - 1) * count, (page - 1) * count + count);
    return { fewFilteredAdverts: fewFilteredAdverts, count: allAdverts.length };
});

const addAdvert = (advert) => AsyncWrapper(() => {
    const adverts = JSON.parse(getFromStorage('adverts'));
    adverts.sort((a,b) => a.id - b.id);
    advert.id = adverts[adverts.length-1].id + 1;
    advert.interestedUser = null;
    adverts.push(advert);
    saveToStorage('adverts', JSON.stringify(adverts));
});

const removeAdvert = (id) => AsyncWrapper(() => {
    const adverts = JSON.parse(getFromStorage('adverts'));
    const removedAdvert = adverts.find(advert => advert.id == id);
    adverts.splice(adverts.indexOf(removedAdvert), 1);
    saveToStorage('adverts', JSON.stringify(adverts));
    return adverts;
});

export default {
    getAuthorsAdverts,
    getInterestedAdverts,
    getFewAdverts,
    addAdvert,
    removeAdvert
};
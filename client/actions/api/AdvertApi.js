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
    const filteredAdverts = allAdverts.filter(advert => advert.type === type && advert.isActive);
    const fewFilteredAdverts =  filteredAdverts.slice((page - 1) * count, (page - 1) * count + count);
    console.log(filteredAdverts);
    return { fewFilteredAdverts: fewFilteredAdverts, count: filteredAdverts.length };
});

const addAdvert = (advert) => AsyncWrapper(() => {
    const adverts = JSON.parse(getFromStorage('adverts'));
    adverts.sort((a,b) => a.id - b.id);
    if(adverts.length > 0) {
        advert.id = adverts[adverts.length-1].id + 1;
    } else {
        advert.id = 1;
    }
    advert.interestedUser = null;
    advert.isOpenRespondDialog = false;
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

const changeAdvertActivity = (advertId, interestedUser, pageSetting) => AsyncWrapper(() => {
    const adverts = JSON.parse(getFromStorage('adverts'));
    const oldAdvert = adverts.find(advert => advert.id == advertId);
    const index = adverts.indexOf(oldAdvert);
    adverts[index].isActive = false;
    adverts[index].interestedUser = interestedUser;
    saveToStorage('adverts', JSON.stringify(adverts));
    return getFewAdverts(pageSetting.activePage, pageSetting.activeTab, 3);
}); 

export default {
    getAuthorsAdverts,
    getInterestedAdverts,
    getFewAdverts,
    changeAdvertActivity,
    addAdvert,
    removeAdvert
};
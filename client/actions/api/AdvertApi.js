import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getAllAdverts = () => AsyncWrapper(() => getFromStorage('adverts'));

const addAdvert = (advert) => AsyncWrapper(() => {
    const adverts = JSON.parse(getFromStorage('adverts'));
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
    getAllAdverts,
    addAdvert,
    removeAdvert
};
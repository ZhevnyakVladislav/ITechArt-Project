import AsyncWrapper from './AsyncWrapper';
import { getFromStorage, saveToStorage, removeFromStorage } from '../../helpers/storageHelper';

const getAllAdverts = () => AsyncWrapper(() => getFromStorage('adverts'));

const addAdvert = (advert) => AsyncWrapper(() => {
    const adverts = getFromStorage('adverts');
    adverts.push(advert);
    saveToStorage('adverts', adverts);
});

const removeAdvert = (advert) => AsyncWrapper(() => {
    const adverts = getFromStorage('adverts');
    saveToStorage('adverts', adverts);
});

export default {
    getAllAdverts,
    addAdvert,
    removeAdvert
};
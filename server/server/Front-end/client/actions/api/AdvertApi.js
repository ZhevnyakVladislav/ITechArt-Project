import axios from 'axios';
import apiKey from '../../constants/GoogleMapsApiKey';
import advertCache from '../../helpers/AdvertCacheHelper';
import requestsCache from '../../helpers/RequestsCacheHelper';

const getAuthorsAdverts = () => axios.get('/api/advert?isForUserPage=true&type=authorAdverts');

const getInterestedAdverts = () => axios.get('/api/advert?isForUserPage=true&type=interestedAdverts');

const getFewAdverts = (type, page) => axios.get(`/api/advert?isForUserPage=false&type=${type}&page=${page}`);

const createAdverd = (advert) => axios.post('/api/advert', advert);

const updateAdver = (advert) => axios.put('/api/advert' + advert.id, advert);

const removeAdvert = (id) => axios.delete('/api/advert/' + id);

const getAdvert = (id) => {
    let url = '/api/advert/' + id;
    let advert = advertCache.get(id);
    if(!advert) {
        return requestsCache(url, getFromUrl); 
    }
    return new Promise(resolve => resolve(advert));
};

const getFromUrl = (url) => {
    return axios.get(url).then(response => {
        return response.data;
    });
};

const getCoordinate = (address) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);

export default {
    getAuthorsAdverts,
    getInterestedAdverts,
    getFewAdverts,
    createAdverd,
    updateAdver,
    removeAdvert,
    getAdvert,
    getCoordinate
};
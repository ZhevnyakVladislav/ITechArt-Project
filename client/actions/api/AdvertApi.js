import axios from 'axios';

const getAuthorsAdverts = (userId) => axios.get('/api/Advert?userId=' + userId);

const getInterestedAdverts = (userId) => axios.get('/api/advert?userId=' + userId);

const getFewAdverts = (type, page) => axios.get(`/api/advert?type=${type}&userId=${page}`);

const createAdverd = (advert) => axios.post('/api/advert', advert);

const updateAdver = (advert) => axios.put('/api/advert' + advert.id, advert);

const removeAdvert = (id) => axios.delete('/api/advert/' + advert.id);

export default {
    getAuthorsAdverts,
    getInterestedAdverts,
    getFewAdverts,
    createAdverd,
    updateAdver,
    removeAdvert
};
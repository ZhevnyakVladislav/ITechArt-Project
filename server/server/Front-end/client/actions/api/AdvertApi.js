import axios from 'axios';

const getAuthorsAdverts = () => axios.get('/api/advert?isForUserPage=true&type=authorAdverts');

const getInterestedAdverts = () => axios.get('/api/advert?isForUserPage=true&type=interestedAdverts');

const getFewAdverts = (type, page) => axios.get(`/api/advert?isForUserPage=false&type=${type}&page=${page}`);

const createAdverd = (advert) => axios.post('/api/advert', advert);

const updateAdver = (advert) => axios.put('/api/advert' + advert.id, advert);

const removeAdvert = (id) => axios.delete('/api/advert/' + id);

export default {
    getAuthorsAdverts,
    getInterestedAdverts,
    getFewAdverts,
    createAdverd,
    updateAdver,
    removeAdvert
};
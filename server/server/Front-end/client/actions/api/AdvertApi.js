import axios from 'axios';
import apiKey from '../../constants/GoogleMapsApiKey';

const getAuthorsAdverts = () => axios.get('/api/advert?isForUserPage=true&type=authorAdverts');

const getInterestedAdverts = () => axios.get('/api/advert?isForUserPage=true&type=interestedAdverts');

const getFewAdverts = (type, page) => axios.get(`/api/advert?isForUserPage=false&type=${type}&page=${page}`);

const createAdverd = (advert) => axios.post('/api/advert', advert);

const updateAdver = (advert) => axios.put('/api/advert' + advert.id, advert);

const removeAdvert = (id) => axios.delete('/api/advert/' + id);

const getAdvert = (id) => axios.get('/api/advert/' + id);

const getAdvertCoordinates = (address) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`); 

export default {
    getAuthorsAdverts,
    getInterestedAdverts,
    getFewAdverts,
    createAdverd,
    updateAdver,
    removeAdvert,
    getAdvert,
    getAdvertCoordinates
};
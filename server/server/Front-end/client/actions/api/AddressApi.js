import axios from 'axios';
import apiKey from '../../constants/BattutaApiKey';

let callbackCount = 0;

const getCountries = () => {
    return axios.get('/api/country');
  
};

const getCities = (countryId) =>  {
    return axios.get(`/api/city?countryId=${countryId}`);;
};


export default {
    getCountries,
    getCities
};

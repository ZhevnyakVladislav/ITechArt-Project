import axios from 'axios';
import apiKey from '../../constants/BattutaApiKey';

let callbackCount = 0;

const getCountries = () => {
    return new Promise((resolve) => {
        const callbackName = `medunesCallBack${callbackCount}`;
        window[callbackName] = (json) => {
            resolve(json);
            window[callbackName] = null;
        };
        callbackCount++;
        const newScript = document.createElement('script');
        newScript.src = `http://battuta.medunes.net/api/country/all/?key=${apiKey}&callback=${callbackName}`;
        document.body.appendChild(newScript);
    });
};

const getRegionsByCountry = (countryCode) =>  {
    return new Promise((resolve) => {
        const callbackName = `medunesCallBack${callbackCount}`;
        window[callbackName] = (json) => {
            resolve(json);
            window[callbackName] = null;
        };
        callbackCount++;
        const newScript = document.createElement('script');
        newScript.src = `http://battuta.medunes.net/api/region/${countryCode}/all/?key=${apiKey}&callback=${callbackName}`;
        document.body.appendChild(newScript);
    });
};

const getCitiesByRegion = (countryCode, region) => {
    return new Promise((resolve) => {
        const callbackName = `medunesCallBack${callbackCount}`;
        window[callbackName] = (json) => {
            resolve(json);
            window[callbackName] = null;
        };
        callbackCount++;
        const newScript = document.createElement('script');
        newScript.src = `http://battuta.medunes.net/api/city/${countryCode}/search/?region=${region}&key=${apiKey}&callback=${callbackName}`;
        document.body.appendChild(newScript);
    });
};

export default {
    getCountries,
    getRegionsByCountry,
    getCitiesByRegion
};

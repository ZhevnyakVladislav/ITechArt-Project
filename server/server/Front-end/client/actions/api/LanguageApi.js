import axios from 'axios';

const getLanguages = () => axios.get('/api/Language');

export default {
    getLanguages
};
import axios from 'axios';

class Cache {
    constructor() {
        this.data = new Map();
    }

    add(key, value) {
        this.data.set(key, value);
    }

    get(key) {
        return this.data.get(key);    
    }

};

const requestsStore = new Map();
const cache = new Cache();

export default function requestsCache(url) {
    let model = cache.get(url);
    if (!model) {
        let promise = requestsStore.get(url);
        if(!promise) {
            promise = axios.get(url);
            requestsStore.set(url, promise);
            promise.then(data => {
                cache.add(url, data);
                requestsStore.delete(url);
                return data;
            });
        }
        return promise;
    }
    return new Promise(resolve => resolve(model));
};




const requestsStore = new Map();

export default function requestsCache(url, funct) {
    let promise = requestsStore.get(url);
    if(!promise) {
        promise = funct(url);
        requestsStore.set(url, promise);
        promise.then(data => {
            requestsStore.delete(url);
            return data;
        });
    }
    return promise;
};
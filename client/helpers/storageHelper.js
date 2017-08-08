export function saveToStorage(key, data) {
    localStorage.setItem(key, data);
};

export function removeFromStorage(key) {
    localStorage.removeItem(key);
};

export function getFromStorage(key) {
    return localStorage.getItem(key);
}
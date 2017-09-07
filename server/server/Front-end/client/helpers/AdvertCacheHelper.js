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

export default new Cache();

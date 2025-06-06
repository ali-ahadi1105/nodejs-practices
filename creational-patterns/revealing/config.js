export class Config {
    constructor() {
        this.settings = {}
    }
    set(key, value) {
        this.settings[key] = value;
    }
    get(key) {
        return this.settings[key];
    }
    setMultiple(obj) {
        Object.assign(this.settings, obj);
    }
    getAll() {
        return this.settings;
    }
}
// use revealing pattern to avoid of an mutate object after create 
export class Config {
    constructor(setup) {
        const settings = {};
        const configurator = {
            set: (key, value) => {
                settings[key] = value;
            },
            setMultiple: (obj) => {
                Object.assign(settings, obj);
            }
        };
        setup(configurator);
        Object.freeze(settings);
        this.get = (key) => settings[key];
        this.getAll = () => ({...settings});
    }
}
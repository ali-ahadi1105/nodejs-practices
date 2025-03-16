// Use revealing pattern for create an object in initilization phase to make it immutable

export class RevealingConfig {
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
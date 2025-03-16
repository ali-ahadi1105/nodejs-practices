import { Config } from "./config.js";
import { RevealingConfig } from "./revealingConfig.js";

// this make an object that can change the data after startup

// const config = new Config();

// config.set("port", 3000);
// config.set("mode", "dev");

// config.setMultiple({
//     dbName: 'postgres',
//     log: true
// });


// console.log("port: ", config.get("port"));
// console.log("All configs: ", config.getAll());

// startup

// config.set("port", 8000);

// console.log(`port after service startup: ${config.get("port")}`);

// Use revealing class to create an object that is immutable after creation phase

const config = new RevealingConfig(appconfig => {
    appconfig.set("port", 3000);
    appconfig.setMultiple({
        dbName: 'postgres',
        log: true
    });
});

console.log("port: ", config.get("port"));
console.log("All configs: ", config.getAll());

// STARTUP

config.getAll.port = 8000;

console.log(`port after service startup: ${config.get("port")}`);



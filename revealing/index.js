import { Config } from "./config.js";

const config = new Config((appConfigur) => {
    appConfigur.set("port", 3000);
    appConfigur.setMultiple({
        database: "myApp",
        debug: true
    });
});

console.log("port is: ", config.get("port"));
console.log("all config is: ", config.getAll());

// startup app

config.getAll.port = 8000;
console.log("port is changed after start app: ", config.get("port"));

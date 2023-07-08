var Client = require("pg");
var client = new Client({
    host: "localhost",
    user: "huynhngoctuankiet",
    port: 5432,
    password: "password",
    database: "schedulexpert",
});
client.connect();

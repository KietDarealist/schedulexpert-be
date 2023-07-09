import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
dotenv.config();
const app = express();
const port = process.env.PORT;
createConnection()
    .then(() => {
    console.log("Connected to database");
})
    .catch((error) => {
    console.log("Error connecting to database:", error);
});
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

createConnection()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

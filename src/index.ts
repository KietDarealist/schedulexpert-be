import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const app: Express = express();

const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "employeedb",
  user: "huynhngoctuankiet",
  password: "password",
});

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript asas asasas Server");
});

app.listen(port, async () => {
  try {
    await client.connect();
    const result = await client.query("Select * from mt_employee");
    console.log("Query result", result?.rows);
  } catch (error) {
    console.log("ERROR", error);
  }
  console.log(
    `⚡️[server]: Server is running olll at http://localhost:${port}`
  );
});

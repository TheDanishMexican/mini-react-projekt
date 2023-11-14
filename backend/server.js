import mysql from "mysql2/promise";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { dataRouter } from "./route.js";

const dbconnect = {
  host: "localhost",
  port: 3306,
  user: "root",
  database: "minibase",
  password: "Max1234",
};
const dbconfig = await mysql.createConnection(dbconnect);

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/", dataRouter);

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});

export { dbconfig };

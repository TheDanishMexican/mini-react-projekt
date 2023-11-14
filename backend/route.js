import { Router } from "express";
import { dbconfig } from "./server.js";

const dataRouter = Router();

dataRouter.get("/", async (request, response) => {
  const sql = "SELECT * FROM users;";
  // Execute the SQL query
  const [results] = await dbconfig.execute(sql);
  response.json(results);
});

dataRouter.post("/", async (request, response) => {
  const sql = "INSERT INTO users (name)VALUES (?);";
  const name = request.body.name;
  console.log(name);
  const value = [name];
  const [results] = await dbconfig.execute(sql, value);
  response.json(results);
});

export { dataRouter };

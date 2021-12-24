import express from "express";
import conectarDB from "./config/db.config";

const app = express();
app.use(express.json());
conectarDB();

app.use("/", require("./libros/librosRoutes"));

export default app;

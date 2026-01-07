import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
const app = express();
import bodyParser from "body-parser";
import connection from "./config/connectDB";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

//test connection DB
connection();

//config view engine
configViewEngine(app);

//config body-parser

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT backend is running on the port = " + PORT);
});

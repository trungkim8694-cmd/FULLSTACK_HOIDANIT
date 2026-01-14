import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
require("dotenv").config();
const app = express();
import bodyParser from "body-parser";
import connection from "./config/connectDB";

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

//config cors
configCors(app);

//test connection DB
connection();

//config view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT backend is running on the port = " + PORT);
});

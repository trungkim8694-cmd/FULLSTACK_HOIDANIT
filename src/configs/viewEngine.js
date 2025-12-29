import express from "express";

/**
 *
 * @param {*} app - express app
 */

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs"); // định nghĩa công cụ view
  app.set("views", "./src/views"); // file path view Engine
};

export default configViewEngine;

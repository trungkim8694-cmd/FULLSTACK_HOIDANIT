import cors from "cors";
require("dotenv").config();

const configCors = (app) => {
  // sử dụng CORS cho phép link gọi dữ liệu
  app.use(cors({ origin: process.env.REACT_URL, credentials: true }));
};
export default configCors;

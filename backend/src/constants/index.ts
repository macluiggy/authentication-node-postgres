import { config } from "dotenv";
config();

// const CONSTS = {
//   port: process.env.PORT || 3000,
//   SERVER_URL: process.env.SERVER_URL || "http://localhost:3000",
//   CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
//   SECRET: process.env.SECRET || "secret",
// };
// export default CONSTS;

const CONSTS = {
  port: process.env.PORT || 3000,
  SERVER_URL: process.env.SERVER_URL || "http://localhost:3000",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  SECRET: process.env.SECRET || "secret",
};
module.exports = CONSTS;

import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  SERVER_URL: process.env.SERVER_URL || "http://localhost:3000",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  SECRET: process.env.SECRET || "secret",
};

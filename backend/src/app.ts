import express from "express";
import indexRoute from "./routes/index.route";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
//import routes
import authRoute from "./routes/auth.route";

// middlewares
app.use(express.json());
app.use(cors()); //nunca te olvides de poner esto, si es que vas a usar las api de otro lado, osea de otro dominio o proxy
app.use(cookieParser());
//initialize routes
app.use("/", indexRoute);
app.use("/api/", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;

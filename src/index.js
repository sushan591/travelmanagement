import cors from "cors";
import multer from "multer";
import express from "express";
import "./env";
import helmet from "helmet";
// import routes from "./routes";
const upload = multer();

const app = express();
app.use(upload.any());
app.use(cors);
app.use(helmet());
app.use(express.json());
const APP_PORT =
  (process.env.NODE_ENV === "test"
    ? process.env.TEST_APP_PORT
    : process.env.APP_PORT) ||
  process.env.PORT ||
  "3000";

const APP_HOST = process.env.APP_HOST || "0.0.0.0";

app.set("port", APP_PORT);
app.set("host", APP_HOST);

// API routes
app.get("/tmis", (req, res) => {
  console.log("here");
  res.json("he");
});

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `Server started at http://${app.get("host")}:${app.get("port")}/tmis`
  );
});
console.log("here ===================30");

// // Catch unhandled rejections
// process.on("unhandledRejection", (err) => {
//   logger.error("Unhandled rejection", err);
//   process.exit(1);
// });

// // Catch uncaught exceptions
// process.on("uncaughtException", (err) => {
//   logger.error("Uncaught exception", err);
//   process.exit(1);
// });

export default app;

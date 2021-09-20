"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _multer = _interopRequireDefault(require("multer"));

var _express = _interopRequireDefault(require("express"));

require("./env");

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const upload = (0, _multer.default)();
const app = (0, _express.default)();
app.use(upload.any());
app.use(_cors.default);
app.use((0, _helmet.default)());
app.use(_express.default.json());
const APP_PORT = (process.env.NODE_ENV === "test" ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || "3000";
const APP_HOST = process.env.APP_HOST || "0.0.0.0";
app.set("port", APP_PORT);
app.set("host", APP_HOST);
app.listen(app.get("port"), app.get("host"), () => {
  logger.info(`Server started at http://${app.get("host")}:${app.get("port")}/mms`);
}); // Catch unhandled rejections

process.on("unhandledRejection", err => {
  logger.error("Unhandled rejection", err);
  process.exit(1);
}); // Catch uncaught exceptions

process.on("uncaughtException", err => {
  logger.error("Uncaught exception", err);
  process.exit(1);
});
var _default = app;
exports.default = _default;
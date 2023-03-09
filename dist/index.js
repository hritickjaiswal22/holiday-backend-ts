"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const envValues_1 = require("./utils/envValues");
const commonUrl_1 = require("./utils/commonUrl");
const HolidayRoute_1 = __importDefault(require("./routes/HolidayRoute"));
const app = (0, express_1.default)();
const port = envValues_1.PORT || 3000;
// adding set of security middlewares
app.use((0, helmet_1.default)());
// parse incoming request body and append data to `req.body`
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// enable all CORS request
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Express + TS Server");
});
app.use(commonUrl_1.holidaysUrl, HolidayRoute_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

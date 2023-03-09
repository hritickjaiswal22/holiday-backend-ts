"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolidaysByYearAndMonth = exports.getHolidaysByYear = exports.test = void 0;
const axios_1 = __importDefault(require("axios"));
const envValues_1 = require("../utils/envValues");
const commonUrl_1 = require("../utils/commonUrl");
function test(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.params);
    });
}
exports.test = test;
function getHolidaysByYear(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { country, year } = req.params;
            const response = yield axios_1.default.get(`${commonUrl_1.baseURL}/holidays?&api_key=${envValues_1.key}&country=${country}&year=${year}`);
            res.status(200).send({
                msg: "success",
                holidays: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.holidays,
            });
        }
        catch (error) {
            res.status(400).send({
                mes: error.message,
            });
        }
    });
}
exports.getHolidaysByYear = getHolidaysByYear;
function getHolidaysByYearAndMonth(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { country, year, month } = req.params;
            const response = yield axios_1.default.get(`${commonUrl_1.baseURL}/holidays?&api_key=${envValues_1.key}&country=${country}&year=${year}&month=${month}`);
            res.status(200).send({
                msg: "success",
                holidays: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.holidays,
            });
        }
        catch (error) {
            res.status(400).send({
                mes: error.message,
            });
        }
    });
}
exports.getHolidaysByYearAndMonth = getHolidaysByYearAndMonth;

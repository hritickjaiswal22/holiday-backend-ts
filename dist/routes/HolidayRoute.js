"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HolidayController_1 = require("../controllers/HolidayController");
const router = (0, express_1.Router)();
router.get("/country/:country/year/:year", HolidayController_1.getHolidaysByYear);
router.get("/country/:country/year/:year/month/:month", HolidayController_1.getHolidaysByYearAndMonth);
exports.default = router;

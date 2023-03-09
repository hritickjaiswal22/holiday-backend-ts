import { Router } from "express";
import {
  getHolidaysByYear,
  getHolidaysByYearAndMonth,
} from "../controllers/HolidayController";

const router = Router();

router.get("/country/:country/year/:year", getHolidaysByYear);

router.get(
  "/country/:country/year/:year/month/:month",
  getHolidaysByYearAndMonth
);

export default router;

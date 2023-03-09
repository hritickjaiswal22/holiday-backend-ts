import { Request, Response } from "express";
import axios from "axios";

import { key } from "../utils/envValues";

export async function test(req: Request, res: Response) {
  console.log(req.params);
}

export async function getHolidaysByYear(req: Request, res: Response) {
  try {
    const { country, year } = req.params;

    const response = await axios.get(
      `https://calendarific.com/api/v2/holidays?&api_key=${key}&country=${country}&year=${year}`
    );

    res.status(200).send({
      msg: "success",
      holidays: response?.data?.response?.holidays,
    });
  } catch (error: any) {
    res.status(400).send({
      mes: error.message,
    });
  }
}

export async function getHolidaysByYearAndMonth(req: Request, res: Response) {
  try {
    const { country, year, month } = req.params;

    const response = await axios.get(
      `https://calendarific.com/api/v2/holidays?&api_key=${key}&country=${country}&year=${year}&month=${month}`
    );

    res.status(200).send({
      msg: "success",
      holidays: response?.data?.response?.holidays,
    });
  } catch (error: any) {
    res.status(400).send({
      mes: error.message,
    });
  }
}

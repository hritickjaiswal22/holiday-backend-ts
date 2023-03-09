import helmet from "helmet";
import cors from "cors";
import express, { Express, Request, Response } from "express";

import { PORT } from "./utils/envValues";
import HolidayRoute from "./routes/HolidayRoute";

const app: Express = express();
const port = PORT || 3000;

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TS Server");
});

app.use("/holiday", HolidayRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

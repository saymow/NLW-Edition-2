import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import cors from "cors";
import routes from "./routes";
import AppError from "./Errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).send({
      message: error.message,
    });
  }

  console.error(error);

  res.status(500).send({
    message: "Internal server error.",
  });
});

app.listen(process.env.PORT || 9000, () =>
  console.log("Server is opened at port", process.env.PORT || 9000)
);

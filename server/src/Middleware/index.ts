import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../Errors/AppError";

export default {
  auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError("Invalid token", 401);

    let parts = authorization.split(" ");

    if (parts.length !== 2) throw new AppError("Invalid token", 401);

    let [format, token] = parts;

    if (format !== "Bearer") throw new AppError("Token malformateed.", 401);

    try {
      const decoded = verify(
        token,
        process.env.JWT_SESSION_TOKEN_SECRET as string
      );

      const { id } = decoded as { id: string };

      req.user = {
        id,
      };

      next();
    } catch (err) {
      throw new AppError("Invalid token", 401);
    }
  },
};

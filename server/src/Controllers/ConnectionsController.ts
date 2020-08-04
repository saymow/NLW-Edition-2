import { Request, Response } from "express";
import db from "../database/connection";

export default {
  async index(req: Request, res: Response) {
    const [{ total }] = await db("connections").count("* as total");

    res.send({ total });
  },

  async store(req: Request, res: Response) {
    const { user_id } = req.body;

    await db("connections").insert({ user_id });

    res.status(201).send();
  },
};

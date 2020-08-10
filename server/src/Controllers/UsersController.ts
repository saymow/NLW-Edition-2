import { Response, Request } from "express";
import knex from "../database/connection";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../Errors/AppError";

export default {
  async store(req: Request, res: Response) {
    const { name, lastname, email, password } = req.body;

    const emailIsAvailabe = await knex("users").where({ email });

    if (emailIsAvailabe.length !== 0)
      throw new AppError("Email already in use.", 409);

    const hashedPass = await hash(password, 8);

    const { id } = await knex("users").insert({
      name,
      lastname,
      email,
      password: hashedPass,
    });

    res.status(201).send({
      token: generateToken(
        { id },
        process.env.JWT_SESSION_TOKEN_SECRET as string,
        "7d"
      ),
      userData: {
        name,
        email,
      },
    });
  },

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const [userExists] = await knex("users").where({ email });

    if (!userExists) throw new AppError("Email is not registered", 400);

    const {
      id,
      name,
      lastname,
      avatar,
      whatsapp,
      password: hashedPass,
    } = userExists;

    if (!(await compare(password, hashedPass)))
      throw new AppError("Invalid password", 401);

    return res.send({
      token: generateToken(
        { id },
        process.env.JWT_SESSION_TOKEN_SECRET as string,
        "7d"
      ),
      userData: {
        name,
        lastname,
        avatar,
        whatsapp,
      },
    });
  },

  async recoverPass(req: Request, res: Response) {
    const { email } = req.body;

    const [userExists] = await knex("users").where({ email });

    if (!userExists) throw new AppError("Email is not registered", 409);

    const token = generateToken(
      { email },
      process.env.JWT_PASSWORD_RECOVER_SECRET as string,
      "1h"
    );

    const serializedLink = "http://localhost:3333/retrieve_pass/" + token;

    res.send({ serializedLink });
  },
};

function generateToken(params: {}, secret: string, time: string) {
  return sign(params, secret, {
    expiresIn: time,
  });
}

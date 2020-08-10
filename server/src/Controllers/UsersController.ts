import { Response, Request } from "express";
import knex from "../database/connection";
import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

import AppError from "../Errors/AppError";
import MailService from "../Services/mailer";

interface TokenPayload {
  email: string;
}

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

  async sendRecoverPass(req: Request, res: Response) {
    const { email } = req.body;

    const [userExists] = await knex("users").where({ email });

    if (!userExists) throw new AppError("Email is not registered", 409);

    const { name, lastname } = userExists;

    const token = generateToken(
      { email },
      process.env.JWT_PASSWORD_RECOVER_SECRET as string,
      "1h"
    );

    const serializedLink = "http://localhost:3333/retrieve_pass/" + token;

    await MailService.sendEmail({
      to: {
        name: `${name} ${lastname}`,
        address: email as string,
      },
      subject: "Proffy - Recuperação de senha",
      body:
        "<p> Olá, proffy. Fiquei sabendo que perdeu sua senha, segue abaixo um link para recuperá-la. </p>" +
        `<p><a href="${serializedLink}">Clique aqui!</a></p>`,
    });

    res.send();
  },

  async changePassword(req: Request, res: Response) {
    const { token, password } = req.body;

    try {
      const decoded = verify(
        token as string,
        process.env.JWT_PASSWORD_RECOVER_SECRET as string
      );

      const { email } = decoded as TokenPayload;

      const hashedPass = await hash(password, 8);

      await knex("users")
        .where({
          email,
        })
        .update({
          password: hashedPass,
        });

      res.send();
    } catch (err) {
      throw new AppError("Invalid token", 401);
    }
  },
};

function generateToken(params: {}, secret: string, time: string) {
  return sign(params, secret, {
    expiresIn: time,
  });
}

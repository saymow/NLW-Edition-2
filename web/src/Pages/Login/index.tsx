import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../../Components/Auth/Input";
import SideWallpaper from "../../Components/Auth/SideWallpaper";
import SideTemplate from "../../Components/Auth/SideTemplate";

import {
  Container,
  LoginContainer,
  Form,
  Eye,
  EyeSlash,
  Options,
  Button,
  MoreOptions,
  PurpleHeartIcon,
} from "./styles";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <Container>
      <SideWallpaper />
      <SideTemplate>
        <LoginContainer>
          <h2>Fazer Login</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={async (values) => {
              try {
                const schema = Yup.object().shape({
                  email: Yup.string().required().max(320).email(),
                  password: Yup.string()
                    .required()
                    .min(8)
                    .max(32)
                    .matches(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/g),
                });

                await schema.validate(values);

                setIsFormValid(true);

                return {};
              } catch (error) {
                setIsFormValid(false);
                return {
                  email:
                    "since i won't use this, arbitrary message, i just wanna control the form validy",
                  password: "",
                };
              }
            }}
            onSubmit={(fields) => alert(fields)}
          >
            <Form>
              <Input name="email" type="email" placeholder="E-mail" />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                passwordIcons={[Eye as any, EyeSlash as any]}
              />
              <Options>
                <div>
                  <label>
                    Lembrar-me
                    <input type="checkbox" id="keep-conected" />
                    <span></span>
                  </label>
                </div>
                <Link to="/recover_pass">Esqueci minha senha</Link>
              </Options>
              <Button className={isFormValid ? "validForm" : ""}>Entrar</Button>
            </Form>
          </Formik>

          <MoreOptions>
            <div>
              <div>Não tem conta?</div>
              <Link to="/register">Cadastre-se</Link>
            </div>
            <div>
              É de graça <PurpleHeartIcon />
            </div>
          </MoreOptions>
        </LoginContainer>
      </SideTemplate>
    </Container>
  );
};

export default Login;

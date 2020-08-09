import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

import SideWallpaper from "../../Components/Auth/SideWallpaper";
import SideTemplate from "../../Components/Auth/SideTemplate";
import Input from "../../Components/Auth/Input";

import {
  Container,
  RegisterContainer,
  Form,
  Button,
  ArrowBack,
  Eye,
  EyeSlash,
} from "./styles";

const Register: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <Container>
      <SideTemplate>
        <RegisterContainer>
          <Link to="/">
            <ArrowBack />
          </Link>
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo para começar.</p>
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validate={async (values) => {
              try {
                const schema = Yup.object().shape({
                  name: Yup.string().required(),
                  lastname: Yup.string().required(),
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
                  email: "",
                };
              }
            }}
            onSubmit={(values) => alert(values)}
          >
            <Form>
              <Input type="text" name="name" placeholder="Nome" />
              <Input type="text" name="lastname" placeholder="Sobrenome" />
              <Input type="email" name="email" placeholder="E-mail" />
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                passwordIcons={[Eye, EyeSlash]}
              />
              <Button className={isFormValid ? "validForm" : ""}>
                Concluir cadastro
              </Button>
            </Form>
          </Formik>
        </RegisterContainer>
      </SideTemplate>
      <SideWallpaper />
    </Container>
  );
};

export default Register;

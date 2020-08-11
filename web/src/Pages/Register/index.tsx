import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

import navigateBackIcon from "../../Assets/Images/icons/back.svg";

import SideWallpaper from "../../Components/Auth/SideWallpaper";
import SideTemplate from "../../Components/Auth/SideTemplate";
import Input from "../../Components/Auth/Input";

import {
  Container,
  RegisterContainer,
  Form,
  Button,
  Eye,
  EyeSlash,
  NavigateBackImage,
} from "./styles";
import SuccessBackground from "../../Components/Auth/SuccessBackground";
import api from "../../Services/api";

const Register: React.FC = () => {
  const history = useHistory();

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  return isFormSubmited ? (
    <SuccessBackground
      title="Cadastro concluído"
      description={[
        "Agora você faz parte da plataforma da Proffy.",
        "Tenha uma ótima experiência.",
      ]}
      action={() => history.push("/")}
    />
  ) : (
    <Container>
      <SideTemplate>
        <RegisterContainer>
          <Link to="/">
            <NavigateBackImage src={navigateBackIcon} alt="navigte back" />
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
            onSubmit={async (values) => {
              const response = await api.post("/signup", values);

              if (response.status === 201) setIsFormSubmited(true);
              else alert("Error");
            }}
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
              <Button
                type="submit"
                disabled={!isFormValid}
                className={isFormValid ? "validForm" : ""}
              >
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

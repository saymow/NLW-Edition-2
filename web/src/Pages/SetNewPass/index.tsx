import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

import api from "../../Services/api";

import SideTemplate from "../../Components/Auth/SideTemplate";
import SideWallpaper from "../../Components/Auth/SideWallpaper";
import SuccessBackground from "../../Components/Auth/SuccessBackground";

import {
  Container,
  SetPassContainer,
  Form,
  Button,
  Eye,
  EyeSlash,
} from "./styles";
import Input from "../../Components/Auth/Input";

const SetNewPass: React.FC = () => {
  const history = useHistory();
  const { token } = useParams();

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  return isFormSubmited ? (
    <SuccessBackground
      title="Sua nova senha está configurada!"
      description={[
        "Sua nova senha já pode ser usada.",
        "Agora é só ir para página de login efetua-lo. :D",
      ]}
      action={() => history.push("/")}
    />
  ) : (
    <Container>
      <SideTemplate>
        <SetPassContainer>
          <h2>Digite aqui sua nova senha.</h2>
          <Formik
            initialValues={{
              password: "",
              confirmation: "",
            }}
            validate={async (values) => {
              try {
                const schema = Yup.object().shape({
                  password: Yup.string()
                    .required()
                    .min(8)
                    .max(32)
                    .matches(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/g),
                  confirmation: Yup.string()
                    .required()
                    .min(8)
                    .max(32)
                    .oneOf([Yup.ref("password")]),
                });

                await schema.validate(values);

                setIsFormValid(true);

                return {};
              } catch (err) {
                setIsFormValid(false);

                return {
                  password: "arbitrary",
                };
              }
            }}
            onSubmit={async (values) => {
              api
                .post("change_pass", {
                  token,
                  password: values.password,
                })
                .then((response) => {
                  setIsFormSubmited(true);
                })
                .catch((error) => alert(JSON.stringify(error.response.data)));
            }}
          >
            <Form>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                passwordIcons={[Eye, EyeSlash]}
              />
              <Input
                type="password"
                name="confirmation"
                placeholder="Confirmação"
              />
              <Button
                type="submit"
                disabled={!isFormValid}
                className={isFormValid ? "validForm" : ""}
              >
                Enviar
              </Button>
            </Form>
          </Formik>
        </SetPassContainer>
      </SideTemplate>
      <SideWallpaper />
    </Container>
  );
};

export default SetNewPass;

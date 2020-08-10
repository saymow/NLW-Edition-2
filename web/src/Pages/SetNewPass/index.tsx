import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

import SideTemplate from "../../Components/Auth/SideTemplate";
import SideWallpaper from "../../Components/Auth/SideWallpaper";

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
  const { token } = useParams();

  const [isFormValid, setIsFormValid] = useState(false);

  return (
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
            onSubmit={(values) => {
              alert(JSON.stringify({ ...values, token }));

              // todo
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
              <Button className={isFormValid ? "validForm" : ""}>Enviar</Button>
            </Form>
          </Formik>
        </SetPassContainer>
      </SideTemplate>
      <SideWallpaper />
    </Container>
  );
};

export default SetNewPass;

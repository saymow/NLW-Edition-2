import React, { useState, ChangeEvent, FormEvent } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import SideTemplate from "../../Components/Auth/SideTemplate";
import SideWallpaper from "../../Components/Auth/SideWallpaper";
import {
  Container,
  RecoverPassContainer,
  Form,
  Input,
  Button,
  ArrowBack,
} from "./styles";

const RecoverPass: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  async function handleOnChangeInputEmail(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { value } = event.target;
    setEmail(value);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
      });

      await schema.validate({ email: value });

      setIsFormValid(true);
    } catch (err) {
      setIsFormValid(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert({
      email,
    });
  }

  return (
    <Container>
      <SideTemplate>
        <Link to="/">
          <ArrowBack />
        </Link>
        <RecoverPassContainer>
          <h2>Eita, esqueceu sua senha?</h2>
          <p>Não esquenta, vamos dar um jeito nisso.</p>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input
                value={email}
                onChange={handleOnChangeInputEmail}
                id="email"
                type="email"
                placeholder="E-mail"
              />
            </div>
            <Button
              disabled={!isFormValid}
              className={isFormValid ? "validForm" : ""}
            >
              Enviar
            </Button>
          </Form>
        </RecoverPassContainer>
      </SideTemplate>
      <SideWallpaper />
    </Container>
  );
};

export default RecoverPass;

import React, { useState, ChangeEvent, FormEvent } from "react";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import navigateBackIcon from "../../Assets/Images/icons/back.svg";

import SideTemplate from "../../Components/Auth/SideTemplate";
import SideWallpaper from "../../Components/Auth/SideWallpaper";
import {
  Container,
  RecoverPassContainer,
  Form,
  Input,
  Button,
  NavigateBackImage,
} from "./styles";
import SuccessBackground from "../../Components/Auth/SuccessBackground";

const RecoverPass: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

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

    // TO-DO

    setIsFormSubmited(true);
  }

  return isFormSubmited ? (
    <SuccessBackground
      title="Redefinição enviada!"
      description={[
        "Boa, agora é só checar o e-mail que foi enviado para você",
        "redefinir sua senha e aproveitar os estudos.",
      ]}
      action={() => history.push("/")}
    />
  ) : (
    <Container>
      <SideTemplate>
        <Link to="/">
          <NavigateBackImage src={navigateBackIcon} alt="navigte back" />
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
              />
              <span className={email !== "" ? "repositioned" : ""}>E-mail</span>
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

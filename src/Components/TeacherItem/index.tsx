import React from "react";

import whatsappIcon from "../../Assets/Images/icons/whatsapp.svg";

import { Container, ItemHeader, ItemFooter, Button } from "./styles";

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <ItemHeader>
        <img
          src="https://avatars1.githubusercontent.com/u/52419335?s=400&v=4"
          alt="imagem"
        />
        <div>
          <strong>Gustavo Alves</strong>
          <span>Matemática</span>
        </div>
      </ItemHeader>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque facilis
        velit veritatis quaerat, quisquam,
        <br></br>
        laudantium sed architecto ex voluptates labore delectus suscipit,
        reprehenderit nisi! Mollitia nemo architecto sapiente doloribus eum.
      </p>
      <ItemFooter>
        <p>
          Preço/hora<strong>R$ 80,00</strong>
        </p>

        <Button>
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </Button>
      </ItemFooter>
    </Container>
  );
};

export default TeacherItem;

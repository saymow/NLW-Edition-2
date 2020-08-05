import React from "react";

import api from "../../Services/api";

import whatsappIcon from "../../Assets/Images/icons/whatsapp.svg";

import { Container, ItemHeader, ItemFooter, AnchorButton } from "./styles";

interface Teacher {
  avatar: string;
  bio: string;
  cost: string;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  data: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  data: { avatar, bio, cost, name, subject, whatsapp, id: user_id },
}) => {
  function createNewConnection() {
    api.post("connections", {
      user_id,
    });
  }

  return (
    <Container>
      <ItemHeader>
        <img src={avatar} alt="imagem" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </ItemHeader>

      <p>{bio}</p>
      <ItemFooter>
        <p>
          Preço/hora<strong>R$ {cost}</strong>
        </p>

        <AnchorButton
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${whatsapp}`}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </AnchorButton>
      </ItemFooter>
    </Container>
  );
};

export default TeacherItem;

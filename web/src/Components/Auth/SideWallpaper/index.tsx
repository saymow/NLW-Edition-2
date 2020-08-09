import React from "react";

import { Container, BackDrop } from "./styles";

const SideWallpaper: React.FC = () => {
  return (
    <Container>
      <BackDrop></BackDrop>
      <div>
        <h1>Proffy</h1>
        <h3>Sua plataforma de estudos online.</h3>
      </div>
    </Container>
  );
};

export default SideWallpaper;

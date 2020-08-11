import React from "react";

import { useGlobalState } from "../../../Context";

import {
  Container,
  InformationContainer,
  Profile,
  Image,
  EditIcon, 
  Options,
  DefaultImage,
  UserIcon,
  LogoutIcon,
} from "./styles";

const Header: React.FC = () => {
  const { user, logOut } = useGlobalState();

  return (
    <Container>
      <InformationContainer>
        <Profile>
          <Image>
            {user && user.avatar ? (
              <img
                src="https://images.pexels.com/photos/2177013/pexels-photo-2177013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="user's own"
              />
            ) : (
              <DefaultImage>
                <UserIcon />
              </DefaultImage>
            )}
          </Image>
          <p>{user ? user.name : "Nome do usuário"}</p>
          <EditIcon />
        </Profile>
        <Options>
          <div onClick={logOut}>
            <LogoutIcon />
          </div>
        </Options>
      </InformationContainer>
    </Container>
  );
};

export default Header;

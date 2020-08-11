import styled from "styled-components";

import { User, PowerOff, Edit } from "../../../Styles/icons";

export const Container = styled.div`
  position: absolute;
  display: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 65px;
`;

export const InformationContainer = styled.div`
  margin: auto;
  max-width: 1260px;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.main`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  padding: 1rem 4rem 1rem 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.3);

    svg {
      display: block;
    }
  }

  > p {
    margin-left: 1.6rem;
  }
`;

export const Image = styled.section`
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DefaultImage = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const UserIcon = styled(User)`
  position: absolute;
  top: 50%;
  right: 50%;

  transform: translate(50%, -50%);

  width: 2.6rem;
  height: 2.6rem;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  div {
    cursor: pointer;
    position: relative;

    height: 3.2rem;
    width: 3.2rem;

    border-radius: 0.5rem;

    background: rgba(0, 0, 0, 0.15);

    transition: background 300ms ease;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const LogoutIcon = styled(PowerOff)`
  position: absolute;
  top: 50%;
  right: 50%;

  transform: translate(50%, -50%);

  width: 2rem;
  height: 2rem;
`;

export const EditIcon = styled(Edit)`
  display: none;
  position: absolute;

  top: .3rem;
  right: .3rem;

  width: 2rem;
  height: 2rem;
`;

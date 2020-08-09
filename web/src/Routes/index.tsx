import React from "react";

import { useGlobalState } from "../Context";

import UserRoutes from "./user";
import GuestRoutes from "./guest";

const Routes: React.FC = () => {
  const { loggedIn } = useGlobalState();

  return loggedIn ? <UserRoutes /> : <GuestRoutes />;
};

export default Routes;

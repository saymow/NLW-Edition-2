import React from "react";

import Context from "./Context";
import Routes from "./Routes";

function App() {
  return (
    <Context>
      <Routes />
    </Context>
  );
}

export default App;

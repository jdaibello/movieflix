import "react-native-gesture-handler";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { isAuthenticated } from "./src/services/auth";
import { AuthContext } from "./src/contexts/AuthContext";

const App: React.FC = () => {
  const [isUserLogged, setIsUserLogged] = useState(
    setUserLogged() ? true : false
  );

  async function setUserLogged() {
    const isUserAuthenticated = await isAuthenticated();

    if (isUserAuthenticated) setIsUserLogged(true);
    else setIsUserLogged(false);
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isUserLogged, setUserLogged }}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;

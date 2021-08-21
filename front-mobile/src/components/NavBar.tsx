import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { nav, text } from "../styles";
import { doLogout, isAuthenticated } from "../services/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavBar: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigation = useNavigation();

  function navigate(path: any) {
    if (path) {
      navigation.navigate(path);
    }
  }

  async function logged() {
    const result = await isAuthenticated();
    result ? setAuthenticated(true) : setAuthenticated(false);
  }

  async function logout() {
    doLogout();
    navigation.navigate("Home");
  }

  useEffect(() => {
    logged();
  }, []);

  return (
    <>
      {authenticated ? (
        <TouchableOpacity style={nav.logoutBtn} onPress={() => logout()}>
          <Text style={text.logoutText}>Sair</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default NavBar;

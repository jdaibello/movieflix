import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { nav, text } from "../styles";

const NavBar: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigation = useNavigation();

  function navigate(path: any) {
    if (path) {
      navigation.navigate(path);
    }
  }

  async function logged() {
    const result = false;
    result ? setAuthenticated(true) : setAuthenticated(false);
  }

  async function logout() {
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

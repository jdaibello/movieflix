import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { nav, text } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../services/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { setUserLogged } = useContext(AuthContext);
  const navigation = useNavigation();

  async function handleLogout() {
    await logout();
    setUserLogged();
    navigation.navigate("Home");
  }

  return (
    <TouchableOpacity style={nav.logoutBtn} onPress={() => handleLogout()}>
      <Text style={text.logoutText}>Sair</Text>
    </TouchableOpacity>
  );
};

export default NavBar;

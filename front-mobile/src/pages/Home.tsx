import React, { useContext, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import eyesOpened from "../assets/eyes-opened.png";
import eyesClosed from "../assets/eyes-closed.png";
import { text, theme } from "../styles";
import { makeLogin } from "../services";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { setUserLogged } = useContext(AuthContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  async function handleLogin() {
    await makeLogin(userInfo);
    setUserLogged();
    navigation.navigate("Catalog");
  }

  return (
    <View style={theme.container}>
      <View style={theme.loginCard}>
        <Text style={text.loginTitle}>Login</Text>
        <View style={theme.form}>
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            style={theme.textInput}
            value={userInfo.username}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          <View style={theme.passwordGroup}>
            <TextInput
              placeholder="Senha"
              autoCapitalize="none"
              style={theme.textInput}
              value={userInfo.password}
              secureTextEntry={hidePassword}
              onChangeText={(e) => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            <TouchableOpacity
              style={theme.toggle}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image source={hidePassword ? eyesOpened : eyesClosed} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={theme.primaryButton}
          activeOpacity={0.8}
          onPress={() => handleLogin()}
        >
          <View style={theme.buttonTextContainer}>
            <Text style={text.primaryText}>Fazer Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Catalog } from "../pages";
import { colors, nav } from "../styles";
import { Text } from "react-native";
import { NavBar } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import { isAuthenticated } from "../services/auth";
import MovieDetails from "../pages/MovieDetails";

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>Movieflix</Text>;

const Routes: React.FC = () => {
  const { isUserLogged } = useContext(AuthContext);

  async function checkIsUserLogged() {
    const isLogged = await isAuthenticated();
    return isLogged;
  }

  useEffect(() => {
    checkIsUserLogged();
  }, [isUserLogged]);

  return (
    <>
      {isUserLogged ? (
        <Stack.Navigator
          screenOptions={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerLeft: () => <HeaderText />,
            headerRight: () => <NavBar />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Catalog" component={Catalog} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerLeft: () => <HeaderText />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Catalog" component={Catalog} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Routes;

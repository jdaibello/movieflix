import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Catalog } from "../pages";
import { colors, nav } from "../styles";
import { Text } from "react-native";
import { NavBar } from "../components";

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>Movieflix</Text>;

const Routes: React.FC = () => {
  return (
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
    </Stack.Navigator>
  );
};

export default Routes;

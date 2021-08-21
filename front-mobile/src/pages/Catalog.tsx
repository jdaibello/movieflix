import React from "react";
import { Text, View } from "react-native";
import { text, theme } from "../styles";

const Catalog: React.FC = () => {
  return (
    <View style={theme.container}>
      <Text style={text.regular}>Tela de Catálogo (tela temporária)</Text>
    </View>
  );
};

export default Catalog;

import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const colors = {
  white: "#FFFFFF",
  lightGray: "#FEFEFE",
  mediumGray: "#6C6C6C",
  borderGray: "#E1E1E1",
  textGray: "#9E9E9E",
  darkGray: "#525252",
  black: "#000000",
  primary: "#FFC700",
};

const text = StyleSheet.create({
  logoutText: {
    fontWeight: "700",
    fontSize: 14,
    textTransform: "uppercase",
  },
});

const nav = StyleSheet.create({
  leftText: {
    color: colors.black,
    fontWeight: "700",
    fontSize: 24,
    marginVertical: 20,
    marginLeft: 20,
  },
  logoutBtn: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});

export { colors, text, nav };

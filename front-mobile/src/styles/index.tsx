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
  regular: {
    color: colors.white,
  },
  primaryText: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  logoutText: {
    fontWeight: "700",
    fontSize: 14,
    textTransform: "uppercase",
  },
  loginTitle: {
    fontSize: 36,
    fontWeight: "400",
    color: colors.white,
    marginBottom: 60,
    textTransform: "uppercase",
  },
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.darkGray,
  },
  primaryButton: {
    width: 265,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  // HomePage
  loginCard: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.mediumGray,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginVertical: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  textInput: {
    width: 265,
    height: 50,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 4,
    padding: 18,
    fontSize: 16,
    color: colors.textGray,
    paddingVertical: 15,
  },
  toggle: {
    marginLeft: -30,
  },
  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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

export { colors, theme, text, nav };

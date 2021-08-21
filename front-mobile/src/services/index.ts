import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "https://daibello-movieflix.herokuapp.com/",
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export async function userToken() {
  const token = await AsyncStorage.getItem("@token");
  return token;
}

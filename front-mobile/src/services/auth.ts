import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export const CLIENT_ID = "movieflix";
export const CLIENT_SECRET = "movieflix123";

export type Role = "ROLE_VISITOR" | "ROLE_MEMBER";

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export async function isAuthenticated() {
  try {
    const token = await AsyncStorage.getItem("@token");
    return token ? true : false;
  } catch (e) {
    console.warn(e);
  }
}

export async function logout() {
  try {
    AsyncStorage.removeItem("@token");
  } catch (e) {
    console.warn(e);
  }
}

async function getAcessTokenDecoded() {
  const accessToken = (await AsyncStorage.getItem("@token")) ?? "";

  try {
    const accessTokenDecoded = jwtDecode(accessToken);
    return accessTokenDecoded as AccessToken;
  } catch (e) {
    return {} as AccessToken;
  }
}

export async function userIsMember() {
  const { authorities } = await getAcessTokenDecoded();

  return authorities.toString() === "ROLE_MEMBER";
}

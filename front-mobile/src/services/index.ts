import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encode as btoa } from "base-64";
import qs from "qs";

import { CLIENT_ID, CLIENT_SECRET, logout } from "./auth";

export type LoginData = {
  username: string;
  password: string;
};

const BASE_URL = "https://daibello-movieflix.herokuapp.com/";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);

export async function makeRequest(params: AxiosRequestConfig) {
  return axios({
    ...params,
    baseURL: BASE_URL,
  });
}

export async function makePrivateRequest(params: AxiosRequestConfig) {
  const token = await AsyncStorage.getItem("@token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return makeRequest({ ...params, headers });
}

export async function makeLogin(loginData: LoginData) {
  const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

  const headers = {
    Authorization: `Basic ${btoa(token)}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const payload = qs.stringify({ ...loginData, grant_type: "password" });

  const response = await makeRequest({
    url: "/oauth/token",
    data: payload,
    method: "POST",
    headers,
  });

  const { access_token } = response.data;

  setAsyncKeys("@token", access_token);
}

async function setAsyncKeys(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.warn(error);
  }
}

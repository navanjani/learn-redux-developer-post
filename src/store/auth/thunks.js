import axios from "axios";
import { API_URL } from "../../config";
import { setToken } from "./slice";

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    dispatch(setToken({ token: response.data.jwt }));
  };
}

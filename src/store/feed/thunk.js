import axios from "axios";
import { startLoading, postsFetched } from "./slice";
import { API_URL } from "../../config";

export const fetchPosts = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response);
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
};

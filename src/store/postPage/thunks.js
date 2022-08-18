import axios from "axios";
import { API_URL } from "../../config";
import { startLoadingPost, fetchFullPost } from "./slice";

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [responsePost, responseComments] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    dispatch(
      fetchFullPost({
        post: responsePost.data,
        comments: responseComments.data,
      })
    );
  };
}

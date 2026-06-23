import axios from "axios";

const API_URL = "http://localhost:5050/api/comments";

export const getComments = async (postId) => {
  const response = await axios.get(
    `${API_URL}/${postId}`
  );

  return response.data;
};

export const addComment = async (
  postId,
  content
) => {
  const response = await axios.post(
    `${API_URL}/${postId}`,
    { content }
  );

  return response.data;
};
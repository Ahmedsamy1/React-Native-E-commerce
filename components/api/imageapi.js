import client from "./client";

const endpoint = "/task/categories";

const getImages = () => client.get(endpoint);

export default {
  getImages,
};

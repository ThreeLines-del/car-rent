import axios from "axios";
const baseUrl = "http://localhost:3000/api";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/allcars`);
  return response.data;
};

export default { getAll };

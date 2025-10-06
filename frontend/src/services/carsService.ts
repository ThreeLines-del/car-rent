import axios from "axios";
import { Car } from "../../types/types";
const baseUrl = "http://localhost:3000/api";

const getAll = async () => {
  const response = await axios.get<Car[]>(`${baseUrl}/allcars`);
  return response.data;
};

const getSingleCar = async (id: string) => {
  const response = await axios.get<Car>(`${baseUrl}/car/${id}`);
  return response.data;
};

export default { getAll, getSingleCar };

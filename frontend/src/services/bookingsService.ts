import axios from "axios";
import { BookingType, NewBookingType } from "../../types/types";
const baseUrl = "http://localhost:3000/api";

const getToken = () => {
  const storedUser = localStorage.getItem("loggedCarAppUser");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return user?.token ? `Bearer ${user.token}` : null;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: getToken() },
  };
  const response = await axios.get<BookingType[]>(
    `${baseUrl}/allbookings`,
    config
  );
  return response.data;
};

const addBooking = async (obj: NewBookingType) => {
  const config = {
    headers: { Authorization: getToken() },
  };
  const response = await axios.post<BookingType>(
    `${baseUrl}/addbooking`,
    obj,
    config
  );
  return response.data;
};

export default { getAll, addBooking };

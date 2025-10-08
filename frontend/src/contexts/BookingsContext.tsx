import { createContext, useEffect, useState } from "react";
import { BookingType, Children, NewBookingType } from "../../types/types";
import bookingsService from "../services/bookingsService";

interface BookingContextType {
  allBookings: BookingType[];
  addBooking: (newObj: NewBookingType) => Promise<BookingType>;
}

const BookingsContext = createContext<BookingContextType>({
  allBookings: [],
  addBooking: async () => Promise.resolve({} as BookingType),
});

export function BookingProvider({ children }: Children) {
  const [allBookings, setAllBookings] = useState<BookingType[]>([]);
  console.log(allBookings);

  useEffect(() => {
    bookingsService.getAll().then((data) => setAllBookings(data));
  }, []);

  const addBooking = async (newObj: NewBookingType): Promise<BookingType> => {
    const newBooking = await bookingsService.addBooking(newObj);
    setAllBookings([...allBookings, newBooking]);

    return newBooking;
  };

  const contextObj = {
    allBookings,
    addBooking,
  };

  return (
    <BookingsContext.Provider value={contextObj}>
      {children}
    </BookingsContext.Provider>
  );
}

export default BookingsContext;

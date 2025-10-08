import * as React from "react";

export interface Children {
  children: React.ReactNode;
}

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  transmission: "automatic" | "manual";
  fuelType: "petrol" | "diesel" | "electric" | "hybrid";
  seats: number;
  mileage: number; // in kilometers
  location: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  pricePerDay: number;
  available: boolean;
  imageUrl: string;
  features: string[]; // e.g. ['Air Conditioning', 'Bluetooth', 'GPS']
  description: string;
  rating: number; // avg rating
  numBookings: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ButtonType {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

export interface BookingType {
  _id: string;
  userId: string; // reference to User object
  carId: string; // reference to Car object
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  payment: {
    method: "credit_card" | "mobile_money" | "paypal" | "cash";
    status: "pending" | "paid" | "failed";
    transactionId?: string;
  };
  pickupLocation: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  dropoffLocation: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export type NewBookingType = Omit<BookingType, "_id" | "userId">;

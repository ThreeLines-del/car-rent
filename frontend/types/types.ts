import * as React from "react";

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

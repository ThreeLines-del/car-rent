import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    make: String,
    model: String,
    year: Number,
    color: String,
    transmission: {
      type: String,
      enum: ["automatic", "manual"],
    },
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "electric", "hybrid"],
    },
    seats: Number,
    mileage: Number,
    location: {
      city: String,
      country: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    pricePerDay: Number,
    available: Boolean,
    imageUrl: String,
    features: [String],
    description: String,
    rating: Number,
    numBookings: Number,
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", CarSchema);

export default Car;

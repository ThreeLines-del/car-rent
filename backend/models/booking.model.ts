import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalPrice: Number,
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    payment: {
      method: {
        type: String,
        enum: ["credit_card", "mobile_money", "paypal", "cash"],
      },
      status: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
      },
      transactionId: String,
    },
    pickupLocation: {
      city: String,
      country: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    dropoffLocation: {
      city: String,
      country: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;

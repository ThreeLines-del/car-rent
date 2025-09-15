import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    address: {
      city: String,
      country: String,
      street: String,
    },
    driverLicense: {
      number: String,
      expiryDate: Date,
      verified: { type: Boolean, default: false },
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;

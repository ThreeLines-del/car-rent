import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(3),
});

export const UserInputSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.email(),
  password: z.string().min(3),
  phone: z.string().min(6, "Phone number is too short"),
  address: z
    .object({
      city: z.string(),
      country: z.string(),
      street: z.string().optional(),
    })
    .optional(),
  driverLicense: z.object({
    number: z.string(),
    expiryDate: z.coerce.date(),
    verified: z.boolean().default(false) || undefined,
  }),
});

export const UserSchema = UserInputSchema.omit({ password: true }).extend({
  id: z.string().optional(),
  passwordHash: z.string(),
  role: z.enum(["customer", "admin"]).default("customer"),
  bookings: z.array(z.string()),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const BookingInputSchema = z.object({
  userId: z.string(),
  carId: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),

  totalPrice: z.number().positive().optional(),

  status: z
    .enum(["pending", "confirmed", "cancelled", "completed"])
    .default("pending"),

  payment: z.object({
    method: z.enum(["credit_card", "mobile_money", "paypal", "cash"]),
    status: z.enum(["pending", "paid", "failed"]).default("pending"),
    transactionId: z.string().optional(),
  }),

  pickupLocation: z.object({
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),

  dropoffLocation: z.object({
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
});

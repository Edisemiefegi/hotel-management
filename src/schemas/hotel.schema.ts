import { z } from "zod";

export const hotelSchema = z.object({
  name: z.string().min(2, "Hotel name is required"),
  location: z.string().min(2, "location is required"),
  whatsapp: z.string().min(10),
  description: z.string(),
  status: z.enum(["Operational", "Renovation", "Closed"]),
  images: z.array(z.any()).min(1, "atleast 1 image is required"),
  amenities: z.array(z.any()).default([]),
  rooms: z.array(z.any()).optional(),
  addons: z.array(z.any()).optional(),
});

export type HotelFormType = z.infer<typeof hotelSchema>;

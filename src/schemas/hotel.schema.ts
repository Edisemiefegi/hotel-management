import { z } from "zod";

export const hotelSchema = z.object({
  name: z.string().min(2, "Hotel name is required"),
  location: z.string().min(2),
  whatsapp: z.string().min(10, "number should be up to 10 char"),
  description: z.string().optional(),
  status: z.enum(["Operational", "Renovation", "Closed"]),
  images: z.array(z.any()).min(1, "atleast 1 image is required"),
  amenities: z.array(z.string()).default([]),

  rooms: z.array(z.any()).optional(),
  addons: z.array(z.any()).optional(),
});

export type HotelFormType = z.infer<typeof hotelSchema>;

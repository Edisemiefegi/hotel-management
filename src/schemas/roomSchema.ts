import { z } from "zod";


export const roomSchema = z.object({
  type: z.string().min(1),
  pricePerNight: z.number().min(1),
  roomNo: z.string().min(1),
  bed: z.string().min(1, 'required'),
  capacity: z.string(),
  status: z.string(),
  image: z.instanceof(File),
});

export type RoomFormType = z.infer<typeof roomSchema>;


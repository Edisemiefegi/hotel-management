import { z } from "zod";

export const addonSchema = z.object({
  addonName: z.string().min(1, 'required'),
  price: z.number().min(1),
  description: z.string(),
  icon: z.string()
});

export type AddonFormType = z.infer<typeof addonSchema>;


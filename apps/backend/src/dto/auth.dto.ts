import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email(),
    password: z.string().min(8, 'minimum password length is 8'),
  })
  .required();

export type registerUserDTO = z.infer<typeof registerSchema>;

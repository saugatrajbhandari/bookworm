import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email(),
    password: z.string().min(8, 'minimum password length is 8'),
  })
  .required();

export class registerUserDto extends createZodDto(RegisterSchema) {}
export class loginUserDto extends createZodDto(
  RegisterSchema.omit({ name: true }),
) {}

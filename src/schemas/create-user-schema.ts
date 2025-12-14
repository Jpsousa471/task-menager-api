import { z } from 'zod';

export const createUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter o mínino de 3 caracteres.' }),
  email: z
    .string()
    .min(10, { message: 'O email deve ter o mínimo de 10 caracteres.' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter o mínino de 8 caracteres.' })
});

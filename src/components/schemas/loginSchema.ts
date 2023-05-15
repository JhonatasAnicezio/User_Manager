import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().nonempty({
    message: 'O e-mail é obrigatório',
  }).email({
    message: 'Formato de e-mail inválido',
  }).toLowerCase(),
  password: z.string().nonempty({
    message: 'A senha é obrigatória',
  }).min(6, {
    message: 'A senha precisa ter no mínimo 6 caracteres',
  }),
});

export type loginData = z.infer<typeof loginSchema>;

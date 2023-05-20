import { z } from 'zod';

export const registerAdminSchema = z.object({
  name: z.string().nonempty({
    message: 'O nome é obrigatório',
  }),
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

export type registerAdminData = z.infer<typeof registerAdminSchema>;

import { loginData } from '@/components/schemas/loginSchema';
import { api } from './api';
import { AxiosResponse } from 'axios';

export type registerData = {
  name: string,
  email: string,
  password: string,
  role?: string,
}

export async function postLogin({ email, password }: loginData) {
  const { data } = await api.post<AxiosResponse>('/login', { email, password })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    })

  return data;
}

export async function postRegister({ name, email, password, role }: registerData) {
  const { data } = await api.post<AxiosResponse>('/', { name, email, password, role })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    })

  return data;
}
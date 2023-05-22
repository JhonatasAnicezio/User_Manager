import { loginData } from '@/components/schemas/loginSchema';
import { api } from './api';
import { AxiosResponse } from 'axios';
import { registerData } from '@/components/schemas/registerSchema';
import { ResponseGetUsers, ResponsePost, User } from '@/interfaces/IAuthContext';

export async function postLogin({ email, password }: loginData) {
  const { data }: AxiosResponse<ResponsePost | string> = await api.post<AxiosResponse>('/login', { email, password })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    })

  return data;
}

export async function postRegister({ name, email, password, role }: registerData) {
  const { data }: AxiosResponse<ResponsePost | string> = await api.post<AxiosResponse>('/', { name, email, password, role })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    })

  return data;
}

export async function getUser(token: string): Promise<User> {
  const { data }: AxiosResponse<User> = await api.get<AxiosResponse>('/me', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    })

  return data;
}

export async function getAllUsers(token: string): Promise<ResponseGetUsers> {
  const { data }: AxiosResponse<ResponseGetUsers> = await api.get<AxiosResponse>('/', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    })

  return data;
}

export async function deleteUser(id: number, token: string) {
  await api.delete(`/${id}`, {
    headers: {
      'Authorization': `${token}`,
    }
  });
}

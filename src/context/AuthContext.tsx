'use client'
import { loginData } from '@/components/schemas/loginSchema';
import { postLogin, postRegister, registerData } from '@/services/UserServices/userApi';
import { ReactNode, createContext, useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';

type invalid = {
  validate: boolean,
  message: string,
}

interface AuthContext {
  singIn: (data: loginData) => void,
  register: (data: registerData) => void,
  user: User | null,
  invalid: invalid,
  setInvalid: (value: invalid) => void,
}

export const AuthContext = createContext({} as AuthContext);

type Prop = {
  children: ReactNode,
}

type User = {
  id: number,
  name: string,
  role: string,
}

export function AuthProvider({ children }: Prop) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [invalid, setInvalid] = useState({
    validate: false,
    message: '',
  });

  async function singIn({ email, password }: loginData) {
    const responseLogin = await postLogin({email, password});

    if(responseLogin.token) {

      setCookie(undefined, 'nextAuth.token', responseLogin.token, {
        maxAge: 60 * 60 * 48, // 2 dias
      });

      setUser(responseLogin.userData);

      router.push('/user');
      
    } else {
      setInvalid({
        validate: true,
        message: responseLogin,
      });
    }
  }

  async function register({ name, email, password, role }: registerData) {
    const responseRegister = await postRegister({ name, email, password, role});

    if(responseRegister.token) {

      setCookie(undefined, 'nextAuth.token', responseRegister.token, {
        maxAge: 60 * 60 * 48, // 2 dias
      });

      setUser(responseRegister.userData);

      router.push('/user');
      
    } else {
      setInvalid({
        validate: true,
        message: responseRegister,
      });
    }
  }

  const context = {
    singIn,
    register,
    user,
    invalid,
    setInvalid,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}
'use client'
import { loginData } from '@/components/schemas/loginSchema';
import { getUser, postLogin, postRegister, registerData } from '@/services/UserServices/userApi';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

type invalid = {
  validate: boolean,
  message: string,
}

interface AuthContext {
  singIn: (data: loginData) => void,
  register: (data: registerData) => void,
  user: User | null,
  setUser: (data: User | null) => void,
  invalid: invalid,
  setInvalid: (value: invalid) => void,
  redirect: (role: string) => void,
}

export const AuthContext = createContext({} as AuthContext);

type Prop = {
  children: ReactNode,
}

export type User = {
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

  const {'nextAuth.token': token} = parseCookies();

  useEffect(() => {
    if(token) {
      getUser(token).then(({id, name, role}: User) => {
        setUser({id, name, role});
      });
    }
  }, []);

  const redirect = (role: string) => {
    switch (role) {
    case 'admin':
      router.push('/admin');
      break
    case 'user':
      router.push('/user');
      break
    default:
      router.push('/');
    }
  };

  async function singIn({ email, password }: loginData) {
    const responseLogin = await postLogin({email, password});

    if(responseLogin.token) {

      setCookie(undefined, 'nextAuth.token', responseLogin.token, {
        maxAge: 60 * 60 * 48, // 2 dias
      });

      setUser(responseLogin.userData);

      redirect(responseLogin.userData.role);
      
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

      redirect(responseRegister.userData.role);
      
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
    setUser,
    invalid,
    setInvalid,
    redirect,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}
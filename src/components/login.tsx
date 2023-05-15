'use client'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginData, loginSchema } from "./schemas/loginSchema";
import { Form } from '../components/Form';

type Props = {
  setRegisteredUser: (value: boolean) => void,
}

export function Login({ setRegisteredUser }: Props) {

  const loginForm = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit, formState: { errors } } = loginForm;

  const login = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <FormProvider {...loginForm}>
      <form
        onSubmit={ handleSubmit(login) }
        className="my-auto flex flex-col items-center pb-16 gap-5 w-72 shadow-lg bg-white"
      >
        <Form.Title title="USER MANAGER" />
        <div>
          <Form.Input name="email" type='email' placeholder='Email'/>
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <div>
          <Form.Input name="password" type='password' placeholder='Password'/>
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>
        <div>
          <Form.Button text="LOGIN" />
          <Form.Transiton text1="Not register?" text2="Create an account" func={() => setRegisteredUser(false)} />
        </div>
      </form>
    </FormProvider>
  );
}

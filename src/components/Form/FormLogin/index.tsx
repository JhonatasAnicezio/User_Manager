'use client'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginData, loginSchema } from "../../schemas/loginSchema";
import { Form } from '..';
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

type Props = {
  setRegisteredUser: (value: boolean) => void,
}

export function Login({ setRegisteredUser }: Props) {
  const { singIn, invalid, setInvalid } = useContext(AuthContext);

  const loginForm = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit, formState: { errors } } = loginForm;

  return (
    <FormProvider {...loginForm}>
      <form
        onSubmit={ handleSubmit(singIn) }
        className="my-auto flex flex-col items-center pb-16 gap-5 w-72 shadow-lg bg-white"
      >
        <Form.Title title="USER MANAGER" />
        <div>
          <Form.Input
            name="email"
            type='email'
            placeholder='Email'
            onClick={() => setInvalid({...invalid, validate: false})}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <div>
          <Form.Input
            name="password"
            type='password'
            placeholder='Password'
            onClick={() => setInvalid({...invalid, validate: false})}
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          {invalid.validate && <span className="text-red-500 text-xs">{invalid.message}</span>}
        </div>
        <div>
          <Form.Button text="LOGIN" />
          <Form.Transiton text1="Not register?" text2="Create an account" func={() => setRegisteredUser(false)} />
        </div>
      </form>
    </FormProvider>
  );
}

'use client'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { registerData, registerSchema } from "../../schemas/registerSchema";
import { Form } from '..';
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

type Props = {
  setRegisteredUser: (value: boolean) => void,
}

export function Register({ setRegisteredUser }: Props) {
  const { register, invalid, setInvalid } = useContext(AuthContext);

  const registerForm = useForm<registerData>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, formState: { errors } } = registerForm;

  const registerUser = async ({ name, email, password }: registerData) => {
    await register({ name, email, password, role: 'user' });
  };

  return (
    <FormProvider {...registerForm}>
      <form
        onSubmit={ handleSubmit(registerUser) }
        className="my-auto flex flex-col items-center pb-16 gap-5 w-72 shadow-lg bg-white"
      >
        <Form.Title title="USER MANAGER" />
        <div>
          <Form.Input
            name="name"
            type='name'
            placeholder='Name'
            onClick={() => setInvalid({...invalid, validate: false})}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
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
          <Form.Button text="Register" />
          <Form.Transiton text1="Already have an account?" text2="log in" func={() => setRegisteredUser(true)} />
        </div>
      </form>
    </FormProvider>
  );
}

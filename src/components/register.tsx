'use client'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { registerData, registerSchema } from "./schemas/registerSchema";
import { Form } from '../components/Form';

type Props = {
  setRegisteredUser: (value: boolean) => void,
}

export function Register({ setRegisteredUser }: Props) {

  const registerForm = useForm<registerData>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, formState: { errors } } = registerForm;

  const register = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <FormProvider {...registerForm}>
      <form
        onSubmit={ handleSubmit(register) }
        className="my-auto flex flex-col items-center pb-16 gap-5 w-72 shadow-lg bg-white"
      >
        <Form.Title title="USER MANAGER" />
        <div>
          <Form.Input name="name" type='name' placeholder='Name'/>
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
        <div>
          <Form.Input name="email" type='email' placeholder='Email'/>
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <div>
          <Form.Input name="password" type='password' placeholder='Password'/>
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>
        <div>
          <Form.Button text="Register" />
          <Form.Transiton text1="Already have an account?" text2="log in" func={() => setRegisteredUser(true)} />
        </div>
      </form>
    </FormProvider>
  );
}

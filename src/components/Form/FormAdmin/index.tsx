'use client'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { registerAdminData, registerAdminSchema } from "../../schemas/registerAdminSchema";
import { Form } from '../';
import { getAllUsers, postRegister } from "@/services/UserServices/userApi";
import { useQuery } from "react-query";
import { parseCookies } from "nookies";

export function RegisterAdmin() {
  const loginForm = useForm<registerAdminData>({
    resolver: zodResolver(registerAdminSchema),
  });

  const {'nextAuth.token': token} = parseCookies();

  const { refetch } = useQuery(['users'], async () => {
    const { users } = await getAllUsers(token);

    return users;
  });

  const { handleSubmit, reset } = loginForm;

  const register = async (data: registerAdminData) => {
    await postRegister(data);
    refetch();
    reset();
  }

  return (
    <FormProvider {...loginForm}>
      <form
        onSubmit={ handleSubmit(register) }
        className="bg-blue-500 my-auto flex items-center p-8 gap-5 shadow-lg"
      >
        <div className="flex flex-col">
          <Form.Label
            name="Nome"
            htmlFor="name"
            className="text-white text-sm px-2"
          />
          <Form.Input
            className="bg-white text-xs w-36 h-7 rounded-md px-3"
            name="name"
            type='name'
            placeholder='Nome do usuario'
          />
        </div>
        <div className="flex flex-col">
          <Form.Label
            name="Email"
            htmlFor="email"
            className="text-white text-sm px-2"
          />
          <Form.Input
            className="bg-white text-xs w-36 h-7 rounded-md px-3"
            name="email"
            type='email'
            placeholder='Email do usuario'
          />
        </div>
        <div className="flex flex-col">
          <Form.Label
            name="Senha"
            htmlFor="password"
            className="text-white text-sm px-2"
          />
          <Form.Input
            className="bg-white text-xs w-36 h-7 rounded-md px-3"
            name="password"
            type='password'
            placeholder='**********'
          />
        </div>
        <div className="flex flex-col">
          <Form.Label
            name="Tipo"
            htmlFor="role"
            className="text-white text-sm px-2" 
          />
          <Form.Select
            className="bg-white text-xs w-36 h-7 rounded-md px-3"
            name="role"
            placeholder="Tipo de usuario"
            options={['user', 'admin', 'moderator']}
          />
        </div>
        <div>
          <Form.Button
            className="bg-blue-800 text-white text-xs rounded-md px-3 py-1"
            text="CADASTRAR"
          />
        </div>
      </form>
    </FormProvider>
  );
}

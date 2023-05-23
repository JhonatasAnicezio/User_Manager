'use client'
import { useQuery, useQueryClient } from 'react-query';
import { Table } from '../';
import { deleteUser, getAllUsers } from '@/services/UserServices/userApi';
import { parseCookies } from 'nookies';
import { User } from '@/interfaces/IAuthContext';

export function TableAdmin() {
  const queryClient = useQueryClient();

  const {'nextAuth.token': token} = parseCookies();

  const { isFetching, data } = useQuery(['users'], async () => {
    const { users } = await getAllUsers(token);

    return users;
  });

  const handleDelete = async (id: number) => {
    // Chame a função de exclusão do usuário aqui
    await deleteUser(id, token);

    // Atualize o estado do useQuery para refletir a exclusão do elemento
    queryClient.setQueryData<User[] | undefined>(['users'], (prevData) => {
      if (prevData) {
        return prevData.filter((user) => user.id !== id);
      }
    });
  };

  return (
    <table className='shadow-lg'>
      <Table.Header
        className='border border-solid border-blue-950'
        classNameTh='bg-white text font-medium text-blue-950 border border-solid border-blue-500'
        titles={['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir']}
      />
      <Table.Body>
        {data?.map((user, index) => (
          <tr key={index} className='bg-gray-300 border border-solid border-blue-500'>
            <Table.Element>
              {index + 1}
            </Table.Element>
            <Table.Element>
              {user.name}
            </Table.Element>
            <Table.Element>
              {user.email}
            </Table.Element>
            <Table.Element>
              {user.role}
            </Table.Element>
            <Table.Element>
              <button
                onClick={() => handleDelete(user.id)}
                type='button'
                className='bg-blue-700 text-white w-full'
              >
                EXCLUIR
              </button>
            </Table.Element>
          </tr>
        ))}
      </Table.Body>
    </table>
  );
}
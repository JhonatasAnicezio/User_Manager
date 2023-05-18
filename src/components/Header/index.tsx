'use client'
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export function Header() {
  const { user, setUser } = useContext(AuthContext);
  const client = new QueryClient();
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, 'nextAuth.token');
    router.push('/');
    setUser(null);
  }

  return (
    <QueryClientProvider client={client}>
      <header className="flex flex-row justify-between h-12 px-10 py-2 bg-blue-950 text-white">
        <h2 className="font-semibold text-3xl">{user?.role.toUpperCase()}</h2>
        <h2 className="font-medium text-3xl">{user?.name}</h2>
        <button
          onClick={logout}
          className="bg-blue-600 px-4 rounded-md font-medium"
        >
          SAIR
        </button>
      </header>
    </QueryClientProvider>
  );
}
'use client'
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="flex flex-row justify-between px-10 py-2 bg-blue-950 text-white">
      <h2 className="font-semibold text-3xl">{user?.role}</h2>
      <h2 className="font-medium text-3xl">{user?.name}</h2>
      <button className="bg-blue-600 px-4 rounded-md font-medium">
        SAIR
      </button>
    </header>
  );
}
'use client'
import { Login } from "@/components/Form/FormLogin";
import { Register } from "@/components/Form/FormRegister";
import { useState } from "react";

export default function Home() {
  const [registeredUser, setRegisteredUser] = useState(true); 

  return (
    <main className="flex justify-center h-screen">
      {registeredUser?
        <Login setRegisteredUser={setRegisteredUser} /> :
        <Register setRegisteredUser={ setRegisteredUser } />
      }
    </main>
  )
}

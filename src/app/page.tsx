'use client'
import { Login } from "@/components/login";
import { Register } from "@/components/register";
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
